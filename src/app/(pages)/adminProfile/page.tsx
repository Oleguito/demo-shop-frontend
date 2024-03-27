'use client';

import React from 'react';
import {Header} from '@/app/components/Header';
import DebugComponent from '@/app/components/DebugComponent';
import {GlobalContextProvider} from '@/app/context/GlobalContext';
import * as Card from "@/components/ui/card.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Input} from "@/components/ui/input.tsx";
import {Label} from "@/components/ui/label.tsx";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs"

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
            <DebugComponent/>
            <Tabs defaultValue="account" className="w-[100vw] flex-col">
                <TabsList>
                    <TabsTrigger value="account">Account</TabsTrigger>
                    <TabsTrigger value="password">Password</TabsTrigger>
                </TabsList>
                <TabsContent value="account">
                    Make changes to your account here.
                </TabsContent>
                <TabsContent value="password">
                    Change your password here.
                </TabsContent>
            </Tabs>
        </>
    );
};
export default AdminProfilePage;
