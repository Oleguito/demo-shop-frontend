import React from 'react';
import CreateProductForm from '@/app/components/CreateProductForm.tsx';
import UpdateProductForm from '@/app/components/UpdateProductForm.tsx';

const Page = (
  {params} : {params: {id: number}}
) => {
    return (
        <>
            <UpdateProductForm id={params.id} />
        </>
    );
};
export default Page;
