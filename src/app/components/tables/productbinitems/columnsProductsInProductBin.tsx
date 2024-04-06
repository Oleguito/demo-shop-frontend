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
} from "@tanstack/react-table";
import { IoTrashBinOutline } from "react-icons/io5";
import { GrEdit } from "react-icons/gr";
import Router from 'next/router'
import {ProductResponse} from "@/types/product/product.types.ts";
import { useContext } from 'react';
import { GlobalContext } from '@/app/context/GlobalContext.tsx';
import { removeProductFromCurrentUsersProductBin } from '@/api/backend/Users.ts';
import {cookies} from '@/constants/cookies.ts'
import Cookies from 'js-cookie';
import { toast } from 'sonner';

export const columnsProductsInProductBin: ColumnDef<ProductResponse>[] = [
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
        accessorKey: "title",
        enableSorting: true,
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Title
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
                console.log("deleting product from user's Product Bin...");
                const userId = Number(Cookies.get(cookies.currentUserId))
                removeProductFromCurrentUsersProductBin(
                  userId,
                  row.original.id
                ).then(r => {
                    // toast("Looks like success! Refresh page please");
                });
            }}>
                <IoTrashBinOutline />
            </Button>
        )
    },
]
