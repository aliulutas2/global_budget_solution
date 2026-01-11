
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

const USERS = [
    { email: 'admin@hq.com', password: '123', role: 'ADMIN', name: 'Can (Admin)' },
    { email: 'manager@london.com', password: '123', role: 'LOCATION_MANAGER', name: 'John (London)' },
    { email: 'manager@istanbul.com', password: '123', role: 'LOCATION_MANAGER', name: 'Ayşe (Istanbul)' }
];

const CATEGORIES = [
    { code: '100', name: 'Revenue', type: 'INCOME' },
    { code: '100.01', name: 'New Business Subscription Revenue', parentCode: '100' },
    { code: '100.02', name: 'Renewal Subscription Revenue', parentCode: '100' },
    { code: '200', name: 'Cost of Goods Sold (COGS)', type: 'EXPENSE' },
    { code: '200.01', name: 'Public Cloud Infrastructure (Production)', parentCode: '200' },
    { code: '200.02', name: 'Content Delivery Network (CDN) Fees', parentCode: '200' },
    { code: '300', name: 'Research & Development (R&D)', type: 'EXPENSE' },
    { code: '300.01', name: 'Software Engineering Salaries', parentCode: '300' },
    { code: '400', name: 'Sales & Marketing (S&M)', type: 'EXPENSE' },
    { code: '400.01', name: 'Sales Base Salaries', parentCode: '400' },
];

export async function GET() {
    try {
        console.log('Seeding via API...');

        // 1. Users
        for (const u of USERS) {
            await prisma.user.upsert({
                where: { email: u.email },
                update: {},
                create: u,
            });
        }

        // 2. Locations
        const managerLdn = await prisma.user.findUnique({ where: { email: 'manager@london.com' } });
        const managerIst = await prisma.user.findUnique({ where: { email: 'manager@istanbul.com' } });

        if (managerLdn) {
            await prisma.location.upsert({
                where: { id: 'loc_ldn' },
                update: {},
                create: { id: 'loc_ldn', name: 'London HQ', currency: 'GBP', managerId: managerLdn.id }
            });
        }
        if (managerIst) {
            await prisma.location.upsert({
                where: { id: 'loc_ist' },
                update: {},
                create: { id: 'loc_ist', name: 'Istanbul Branch', currency: 'TRY', managerId: managerIst.id }
            });
        }

        // 3. Categories
        // Parents
        for (const c of CATEGORIES.filter(c => !c.parentCode)) {
            const existing = await prisma.category.findFirst({ where: { code: c.code } });
            if (!existing) {
                await prisma.category.create({ data: { code: c.code, name: c.name, type: c.type } });
            }
        }
        // Children
        for (const c of CATEGORIES.filter(c => c.parentCode)) {
            const existing = await prisma.category.findFirst({ where: { code: c.code } });
            if (!existing) {
                const parent = await prisma.category.findFirst({ where: { code: c.parentCode } });
                if (parent) {
                    await prisma.category.create({ data: { code: c.code, name: c.name, parentId: parent.id } });
                }
            }
        }

        return NextResponse.json({ success: true, message: "Database seeded successfully!" });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ success: false, error: String(error) }, { status: 500 });
    }
}
