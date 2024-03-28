'use client';

import React, { useContext, useEffect, useState } from 'react';
import { DataTable } from '@/app/components/tables/data-table.tsx';
import { columnsCategories } from '@/app/components/tables/categories/columnsCategories.tsx';
import { GlobalContext } from '@/app/context/GlobalContext.tsx';
import { CategoryResponse } from '@/types/category/Category.ts';
import { UserQuery } from '@/types/user/user.types.ts';
import { getAllCategories } from '@/api/backend/Categories.ts';
import {columnsProducts} from "@/app/components/tables/products/columnsProducts.tsx";
import {getAllProducts} from "@/api/backend/Products.ts";
import {ProductResponse} from "@/types/product/product.types.ts";

const ProductsTable = () => {
    const { userIsLoggedIn } = useContext(GlobalContext);
    const [products, setProducts] = useState<ProductResponse[]>([]);
    const [users, setUsers] = useState<UserQuery[]>([]);

    useEffect(() => {
        getAllProducts().then((data) => {
            setProducts(data);
        });
    }, []);

    return (
        <>
            <div className="mx-[10%]">
                <DataTable columns={columnsProducts} data={products} />
            </div>
        </>
    );
};
export default ProductsTable;
