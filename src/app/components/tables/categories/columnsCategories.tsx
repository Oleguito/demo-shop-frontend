"use client"

import { ColumnDef } from "@tanstack/react-table"
import { CategoryResponse, ModifyCategoryRequest } from '@/types/category/Category.ts';
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
import { deleteCategoryById, modifyCategory } from '@/api/backend/Categories.ts';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { frontend } from '@/app/routes/routes.ts';


export const columnsCategories: ColumnDef<CategoryResponse>[] = [
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
                console.log("deleting category...");
                deleteCategoryById(Number(row.original.id));
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
            <Link href={frontend.updateCategory(row.original.id)}>
                <GrEdit />
            </Link>
        )
    }
]
