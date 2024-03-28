import React from 'react';
import { Button } from '@/components/ui/button.tsx';
import {useRouter} from "next/navigation";

const CreateUserButton = () => {

    const router = useRouter();

    return (
        <>
            <Button className={'bg-blue-950'} onClick={() => {
                console.log("redirecting to create a new user...");
                router.push("/users/create")
            }}>
                Create User
            </Button>
        </>
    );
};
export default CreateUserButton;
