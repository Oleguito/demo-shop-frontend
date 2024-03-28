import React from 'react';
import { Button } from '@/components/ui/button.tsx';
import {useRouter} from "next/navigation";

const CreateCategoryButton = () => {

    const router = useRouter();

    return (
        <>
            <Button className={'bg-blue-950'} onClick={() => {
                console.log("hello");
                router.push("/categories/create")
            }}>
                Create Category
            </Button>
        </>
    );
};
export default CreateCategoryButton;
