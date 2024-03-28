'use client';

import React, { useContext, useEffect, useState } from 'react';
import { Header } from '@/app/components/Header';
import DebugComponent from '@/app/components/DebugComponent';
import {
    GlobalContext,
    GlobalContextProvider,
} from '@/app/context/GlobalContext';
import * as Card from '@/components/ui/card.tsx';
import { Button } from '@/components/ui/button.tsx';
import { Input } from '@/components/ui/input.tsx';
import { Label } from '@/components/ui/label.tsx';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { getAllCategories } from '@/api/backend/Categories.ts';
import { DataTable } from '@/app/components/tables/data-table.tsx';
import { columnsCategories } from '@/app/components/tables/categories/columnsCategories.tsx';
import { columnsUsers } from '@/app/components/tables/users/columnsUsers.tsx';
import { CategoryResponse } from '@/types/category/Category.ts';
import { UserQuery } from '@/types/user/user.types.ts';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import { getAllUsers } from '@/api/backend/Users.ts';
import CategoriesAccordion from '@/app/components/accordions/CategoriesAccordion.tsx';
import UsersAccordion from '@/app/components/accordions/UsersAccordion.tsx';
import CategoriesTable from "@/app/(pages)/tables/CategoriesTable.tsx";

const AdminProfilePage = () => {
    const { userIsLoggedIn } = useContext(GlobalContext);

    return (
        userIsLoggedIn && (
            <>
                <div className="text-4xl flex justify-center items-center mt-[10%] text-blue-100">
                    <span className="text-center">AdminProfilePage</span>
                </div>
                <div className="flex flex-row">
                    <div className="w-[30%]"></div>
                    <div className="w-[70%]"></div>
                </div>
                <DebugComponent />
                <Tabs defaultValue="categories" className="w-[100vw] flex-col text-amber-100 ml-[0%] mt-8">
                    <TabsList>
                        <TabsTrigger value="categories">Categories</TabsTrigger>
                        <TabsTrigger value="users">Users</TabsTrigger>
                        <TabsTrigger value="products">Products</TabsTrigger>
                        <TabsTrigger value="product-bin">
                            Product bin
                        </TabsTrigger>
                    </TabsList>
                    <TabsContent value="categories">
                        <p>Categories stuff here</p>
                        <CategoriesTable/>
                    </TabsContent>
                    <TabsContent value="users">
                        <p>Users stuff here</p>
                        <UsersAccordion />
                    </TabsContent>
                    <TabsContent value="products">
                        <p>Products stuff here</p>
                    </TabsContent>
                    <TabsContent value="product-bin">
                        <p>Product bin stuff here</p>
                    </TabsContent>
                </Tabs>
            </>
        )
    );
};
export default AdminProfilePage;
