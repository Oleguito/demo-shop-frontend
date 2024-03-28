'use client';

import React, { useContext, useEffect, useState } from 'react';
import { DataTable } from '@/app/components/tables/data-table.tsx';
import { columnsCategories } from '@/app/components/tables/categories/columnsCategories.tsx';
import { GlobalContext } from '@/app/context/GlobalContext.tsx';
import { CategoryResponse } from '@/types/category/Category.ts';
import { UserQuery } from '@/types/user/user.types.ts';
import { getAllCategories } from '@/api/backend/Categories.ts';

const CategoriesTable = () => {
    const { userIsLoggedIn } = useContext(GlobalContext);
    const [categories, setCategories] = useState<CategoryResponse[]>([]);
    const [users, setUsers] = useState<UserQuery[]>([]);

    useEffect(() => {
        getAllCategories().then((data) => {
            setCategories(data);
        });
    }, []);

    return (
        <>
            <div className="mx-[10%]">
                <DataTable columns={columnsCategories} data={categories} />
            </div>
        </>
    );
};
export default CategoriesTable;
