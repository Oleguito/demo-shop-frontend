'use client';

import React, {useEffect, useState} from 'react';
import {Header} from '@/app/components/Header';
import DebugComponent from '@/app/components/DebugComponent';
import {GlobalContextProvider} from '@/app/context/GlobalContext';
import * as Card from "@/components/ui/card.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Input} from "@/components/ui/input.tsx";
import {Label} from "@/components/ui/label.tsx";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs"
import {getAllCategories} from "@/api/Categories.ts";
import {DataTable} from "@/app/components/tables/categories/data-table.tsx";
import {columns} from "@/app/components/tables/categories/columns.tsx";
import {CategoryResponse} from "@/types/Category.ts";

const AdminProfilePage = () => {

    const [categories, setCategories] = useState<CategoryResponse[]>([]);

    useEffect(() => {
        getAllCategories().then(data => {
            setCategories(data);
        });
    }, []);


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
            <Tabs defaultValue="categories" className="w-[100vw] flex-col">
                <TabsList>
                    <TabsTrigger value="categories">Categories</TabsTrigger>
                    <TabsTrigger value="password">Password</TabsTrigger>
                    <TabsTrigger value="something-else">Something else</TabsTrigger>
                </TabsList>
                <TabsContent value="categories">
                    <div className="text-red-400">Create category fields</div>
                    <div className="text-red-400">
                        <p>List of categories table</p>
                        <Button onClick={() => {
                            getAllCategories().then(data => {
                                console.log(data)});
                        }}>
                            GetCategories
                        </Button>
                        <div className="container mx-auto py-10">
                            <DataTable columns={columns} data={categories} />
                        </div>
                    </div>
                </TabsContent>
                <TabsContent value="password">
                    Change your password here.
                </TabsContent>
                <TabsContent value="something-else">
                    sth else here
                </TabsContent>
            </Tabs>
        </>
    );
};
export default AdminProfilePage;
