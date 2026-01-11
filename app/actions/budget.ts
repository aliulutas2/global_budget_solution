'use server';

import { prisma } from '@/lib/prisma';
import { getSession } from './auth';
import { Budget, Category } from '@prisma/client';

export async function getCategories() {
    return await prisma.category.findMany({
        orderBy: { code: 'asc' }
    });
}

export async function getLocations() {
    return await prisma.location.findMany();
}

export async function getLocationByManager(userId: string) {
    return await prisma.location.findFirst({
        where: { managerId: userId }
    });
}

export async function getBudgets(locationId?: string) {
    if (!locationId) {
        return await prisma.budget.findMany();
    }
    return await prisma.budget.findMany({
        where: { locationId }
    });
}

export async function saveBudgetEntry(entry: {
    locationId: string;
    categoryId: string;
    monthIndex: number;
    amount: number;
}) {
    // 1. Check Auth (Security)
    const user = await getSession();
    if (!user) return { success: false, message: "Unauthorized" };

    try {
        // 2. See if record exists
        const existing = await prisma.budget.findUnique({
            where: {
                locationId_categoryId: {
                    locationId: entry.locationId,
                    categoryId: entry.categoryId
                }
            }
        });

        // Prepare new array
        let monthlyAmounts: number[] = new Array(12).fill(0);

        if (existing) {
            // Cast the decimal array to numbers
            monthlyAmounts = (existing.monthlyAmounts as unknown as any[]).map(d => Number(d));
        }

        monthlyAmounts[entry.monthIndex] = entry.amount;

        // 3. Upsert
        await prisma.budget.upsert({
            where: {
                locationId_categoryId: {
                    locationId: entry.locationId,
                    categoryId: entry.categoryId
                }
            },
            update: {
                monthlyAmounts: monthlyAmounts
            },
            create: {
                locationId: entry.locationId,
                categoryId: entry.categoryId,
                monthlyAmounts: monthlyAmounts
            }
        });

        return { success: true };
    } catch (e) {
        console.error(e);
        return { success: false, message: "Failed to save" };
    }
}

export async function getConsolidatedReport() {
    // Get all budgets
    const budgets = await prisma.budget.findMany();
    const categories = await prisma.category.findMany();

    // Aggregate in memory
    const report = categories.map((cat: Category) => {
        const catEntries = budgets.filter((b: Budget) => b.categoryId === cat.id);
        const total = catEntries.reduce((sum: number, item: Budget) => {
            const rowSum = (item.monthlyAmounts as unknown as any[]).reduce((mSum: number, val: any) => mSum + Number(val), 0);
            return sum + rowSum;
        }, 0);

        return {
            category_name: cat.name,
            category_code: cat.code,
            total_amount: total,
            entries_count: catEntries.length
        };
    }).filter((r: { total_amount: number }) => r.total_amount > 0);

    return report;
}
