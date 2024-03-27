'use client';


import React, {useContext, useEffect, useState} from 'react';
import {Header} from '@/app/components/Header';
import DebugComponent from '@/app/components/DebugComponent';
import {GlobalContext, GlobalContextProvider} from '@/app/context/GlobalContext';
import * as Card from "@/components/ui/card.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Input} from "@/components/ui/input.tsx";
import {Label} from "@/components/ui/label.tsx";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs"
import {getAllCategories} from "@/api/backend/Categories.ts";
import {DataTable} from "@/app/components/tables/categories/data-table.tsx";
import {columns} from "@/app/components/tables/categories/columns.tsx";
import {CategoryResponse} from "@/types/category/Category.ts";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const AdminProfilePage = () => {

    const {userIsLoggedIn} = useContext(GlobalContext);
    const [categories, setCategories] = useState<CategoryResponse[]>([]);

    useEffect(() => {
        getAllCategories().then(data => {
            setCategories(data);
        });
    }, []);


    return ( userIsLoggedIn &&
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
                    <TabsTrigger value="users">Users</TabsTrigger>
                    <TabsTrigger value="products">Products</TabsTrigger>
                    <TabsTrigger value="product-bin">Product bin</TabsTrigger>
                </TabsList>
                <TabsContent value="categories">
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Create</AccordionTrigger>
                            <AccordionContent>
                                <div>Create Category stuff</div>
                                <div className="text-red-400">Create category fields</div>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>Read</AccordionTrigger>
                            <AccordionContent>
                                <div>Read Categories stuff</div>
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
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger>Update</AccordionTrigger>
                            <AccordionContent>
                                <div>Update Category stuff</div>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4">
                            <AccordionTrigger>Delete</AccordionTrigger>
                            <AccordionContent>
                                <div>Delete Category stuff</div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </TabsContent>
                <TabsContent value="users">
                    <p>Users stuff here</p>
                </TabsContent>
                <TabsContent value="products">
                    <p>Products stuff here</p>
                </TabsContent>
                <TabsContent value="product-bin">
                    <p>Product bin stuff here</p>
                </TabsContent>
            </Tabs>
        </>
    );
};
export default AdminProfilePage;
