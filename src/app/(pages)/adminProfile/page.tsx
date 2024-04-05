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
import { getAllUsers, removeProductFromCurrentUsersProductBin } from '@/api/backend/Users.ts';
import CategoriesAccordion from '@/app/components/accordions/CategoriesAccordion.tsx';
import UsersAccordion from '@/app/components/accordions/UsersAccordion.tsx';
import CategoriesTable from '@/app/(pages)/tables/CategoriesTable.tsx';
import CreateCategoryButton from '@/app/components/CreateCategoryButton.tsx';
import UsersTable from '@/app/(pages)/tables/UsersTable.tsx';
import CreateUserButton from '@/app/components/CreateUserButton.tsx';
import CreateProductButton from '@/app/components/CreateProductButton.tsx';
import ProductsTable from '@/app/(pages)/tables/ProductsTable.tsx';
import { CiSquareRemove } from 'react-icons/ci';

const AdminProfilePage = () => {
  const { userIsLoggedIn, loggedInUserData } = useContext(GlobalContext);

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
        <h1 className={'text-blue-100'}>
          Your account balance: $12,386,495.66
        </h1>
        <Tabs
          defaultValue="categories"
          className="w-[100vw] flex-col text-amber-100 ml-[0%] mt-8"
        >
          <TabsList>
            <TabsTrigger value="categories">Categories</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="products">Products</TabsTrigger>
            <TabsTrigger value="product-bin">Your Product bin</TabsTrigger>
            <TabsTrigger value="purchases">Your Purchases</TabsTrigger>
          </TabsList>
          <TabsContent value="categories">
            <div className="mx-[10%] flex justify-center flex-col gap-3">
              <p>Categories stuff here</p>
              <CreateCategoryButton />
              <CategoriesTable />
            </div>
          </TabsContent>
          <TabsContent value="users">
            <div className="mx-[10%] flex justify-center flex-col gap-3">
              <p>Users stuff here</p>
              <CreateUserButton />
              <UsersTable />
            </div>
          </TabsContent>
          <TabsContent value="products">
            <p>Products stuff here</p>
            <CreateProductButton />
            <ProductsTable />
          </TabsContent>
          <TabsContent value="purchases">
            <p>Purchases stuff here</p>
            <p className={"text-8xl"}>NOT IMPLEMENTED!!!</p>
          </TabsContent>
          <TabsContent value="product-bin">
            <p>Product bin stuff here</p>
            <p>Items in your product bin:</p>
            {loggedInUserData.productBin?.items.length
              ? loggedInUserData.productBin.items.map((item) => {
                  return (
                    <>
                      <span className={"flex justify-center items-center border-2 border-amber-100"}>
                        item: {item.title}{'   '}
                        id: {item.id}{'   '}
                        category: {item.category.title}{'   '}
                        <Button
                          onClick={() => {
                            console.log('removing item fromm players product bin...');
                            removeProductFromCurrentUsersProductBin(
                              loggedInUserData.id,
                              item.id
                            )
                          }}
                        >
                          <CiSquareRemove className={"size-10"} />
                        </Button>
                      </span>
                    </>
                  );
                })
              : 'Empty'}
          </TabsContent>
        </Tabs>
      </>
    )
  );
};
export default AdminProfilePage;
