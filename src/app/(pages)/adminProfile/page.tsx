'use client';

import React from 'react';
import { Header } from '@/app/components/Header';
import DebugComponent from '@/app/components/DebugComponent';
import { GlobalContextProvider } from '@/app/context/GlobalContext';
import * as Tabs from "@/components/ui/tabs/index.js";
import * as Card from "@/components/ui/card.tsx";
import { Button } from "@/components/ui/button.tsx";
import { Input } from "@/components/ui/input.tsx";
import { Label } from "@/components/ui/label.tsx";

const AdminProfilePage = () => {
    return (
        <>
            <div className="text-4xl flex justify-center items-center">
                <span className="text-center">AdminProfilePage</span>
            </div>
            <div className="flex flex-row">
                <div className="w-[30%]"></div>
                <div className="w-[70%]"></div>
            </div>
            <DebugComponent />
        </>
    );
};
export default AdminProfilePage;
