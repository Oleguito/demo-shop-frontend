import React from 'react';
import { Button } from '@/components/ui/button.tsx';
import {useRouter} from "next/navigation";

const CreateProductButton = () => {

    const router = useRouter();

    return (
        <>
            <Button className={'bg-blue-950'} onClick={() => {
                console.log("creating a new product...");
                router.push("/products/create");
            }}>
                Create Product
            </Button>
        </>
    );
};
export default CreateProductButton;
