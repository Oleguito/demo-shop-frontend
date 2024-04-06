import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { GlobalContextProvider } from '@/app/context/GlobalContext';
import React, { ReactNode } from 'react';
import { Header } from '@/app/components/Header';
import LoginOverlay from '@/app/components/LoginOverlay.tsx';
import { Toaster } from '@/components/ui/sonner.tsx';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Demo shop app',
    description: 'Front end for demo-shop routes project in Node.TS',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div className="square"></div>
                <GlobalContextProvider>
                    <Header />
                    {children}
                </GlobalContextProvider>
                <Toaster className={"text-4xl"} />
            </body>
        </html>
    );
}
