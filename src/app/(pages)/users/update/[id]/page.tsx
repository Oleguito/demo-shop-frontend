import React from 'react';
import CreateUserForm from '@/app/components/CreateUserForm.tsx';
import UpdateUserForm from '@/app/components/UpdateUserForm.tsx';

const Page = (
  { params } : {params: {id: number}}
) => {
    return (
        <>
            <UpdateUserForm userId={params.id} />
        </>
    );
};
export default Page;
