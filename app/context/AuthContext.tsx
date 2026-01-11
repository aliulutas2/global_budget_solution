'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { loginUser, logoutUser, getSession } from '@/app/actions/auth';

interface User {
    id: string;
    email: string;
    name: string;
    role: string;
}

interface AuthContextType {
    user: User | null;
    loading: boolean;
    login: (email: string, pass: string) => Promise<{ success: boolean; message?: string; user?: User }>;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true); // Normal loading state for Vercel
    const router = useRouter();

    useEffect(() => {
        // Init verify session
        const initAuth = async () => {
            const sessionUser = await getSession();
            if (sessionUser) setUser(sessionUser);
            setLoading(false);
        };
        initAuth();
    }, []);

    const login = async (email: string, pass: string) => {
        const result = await loginUser(email, pass);
        if (result.success && result.user) {
            setUser(result.user);
            // Optional: Redirect based on role if needed
            router.push('/dashboard/reports'); // Default to reports for now
        }
        return result;
    };

    const logout = async () => {
        await logoutUser();
        setUser(null);
        router.push('/');
    };

    return (
        <AuthContext.Provider value={{ user, loading, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}
