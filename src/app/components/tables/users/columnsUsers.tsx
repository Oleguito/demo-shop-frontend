"use client"

import { ColumnDef } from "@tanstack/react-table"
import {CategoryResponse} from "@/types/category/Category.ts";
import {Button} from "@/components/ui/button.tsx";
import {ArrowUpDown} from "lucide-react";
import * as React from "react"
import {
    SortingState,
    flexRender,
    getCoreRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table"
import {UserQuery} from "@/types/user/user.types.ts";
import {IoTrashBinOutline} from "react-icons/io5";
import {GrEdit} from "react-icons/gr";
import { deleteUserById } from '@/api/backend/Users.ts';
import Link from 'next/link';
import { frontend } from '@/app/routes/routes.ts';

export const columnsUsers: ColumnDef<UserQuery>[] = [
    {
        accessorKey: "id",
        enableSorting: true,
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    ID
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },
    {
        accessorKey: "email",
        enableSorting: true,
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Email
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },
    {
        accessorKey: "password",
        enableSorting: true,
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Password
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },
    {
        accessorKey: "login",
        enableSorting: true,
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Login
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },
    {
        accessorKey: "accountType",
        enableSorting: true,
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Account type
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },
    {
        accessorKey: "delete",
        header: ({column}) => {
            return (
                <>Delete</>
            )
        },
        cell: ({row}) => (
            <Button onClick={() => {
                console.log("deleting user...");
                deleteUserById(row.original.id);
            }}>
                <IoTrashBinOutline />
            </Button>
        )
    },
    {
        accessorKey: "edit",
        header: ({column}) => {
            return (
                <>Edit</>
            )
        },
        cell: ({row}) => (
            <Link href={frontend.updateUser(row.original.id)} onClick={() => {
                console.log("Redirecting to edit user...");
            }}>
                <GrEdit />
            </Link>
        )
    }
]
