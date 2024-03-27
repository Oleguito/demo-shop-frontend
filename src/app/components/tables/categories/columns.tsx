"use client"

import { ColumnDef } from "@tanstack/react-table"
import {CategoryResponse} from "@/types/Category.ts";
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

export const columns: ColumnDef<CategoryResponse>[] = [
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
        cell: ({ row }) => <div className="lowercase">{row.getValue("id")}</div>,
    },
    {
        accessorKey: "title",
        header: "Title",
        enableSorting: true,
    },
]
