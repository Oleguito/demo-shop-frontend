import React, {useContext, useEffect, useState} from 'react'
import {GlobalContext} from "@/app/context/GlobalContext.tsx";
import {CategoryResponse} from "@/types/category/Category.ts";
import {UserQuery} from "@/types/user/user.types.ts";
import {getAllCategories} from "@/api/backend/Categories.ts";
import {DataTable} from "@/app/components/tables/data-table.tsx";
import {columnsCategories} from "@/app/components/tables/categories/columnsCategories.tsx";
import {columnsUsers} from "@/app/components/tables/users/columnsUsers.tsx";
import {getAllUsers} from "@/api/backend/Users.ts";

const UsersTable = () => {

    const { userIsLoggedIn } = useContext(GlobalContext);
    const [categories, setCategories] = useState<CategoryResponse[]>([]);
    const [users, setUsers] = useState<UserQuery[]>([]);

    useEffect(() => {
        getAllUsers().then((data) => {
            setUsers(data);
        });
    }, []);

    return (
        <>
            <div className="mx-[10%]">
                <DataTable columns={columnsUsers} data={users} />
            </div>
        </>
    )
}
export default UsersTable
