import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {GlobalContextProvider} from "@/app/context/GlobalContext";
import React, {ReactNode} from "react";
import {Header} from "@/app/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Demo shop app",
    description: "Front end for demo-shop backend project in Node.TS",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <GlobalContextProvider>
            <Header />
            {children}
        </GlobalContextProvider>
        </body>
        </html>
    );
}
