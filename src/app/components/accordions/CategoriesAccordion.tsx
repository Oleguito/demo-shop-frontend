import React, {useContext, useEffect, useState} from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from "@/components/ui/accordion.tsx";
import {Button} from "@/components/ui/button.tsx";
import {getAllCategories} from "@/api/backend/Categories.ts";
import {DataTable} from "@/app/components/tables/data-table.tsx";
import {columnsCategories} from "@/app/components/tables/categories/columnsCategories.tsx";
import {GlobalContext} from "@/app/context/GlobalContext.tsx";
import {CategoryResponse} from "@/types/category/Category.ts";
import {UserQuery} from "@/types/user/user.types.ts";

const CategoriesAccordion = () => {

    const {userIsLoggedIn} = useContext(GlobalContext);
    const [categories, setCategories] = useState<CategoryResponse[]>([]);
    const [users, setUsers] = useState<UserQuery[]>([]);

    useEffect(() => {
        getAllCategories().then(data => {
            setCategories(data);
        });
    }, []);

    return (
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
                            <DataTable columns={columnsCategories} data={categories} />
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
    )
}
export default CategoriesAccordion
