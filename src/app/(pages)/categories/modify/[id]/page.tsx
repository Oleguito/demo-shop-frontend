"use client"

import React from 'react';
import CreateCategoryForm from '@/app/components/CreateCategoryForm.tsx';
import ModifyCategoryForm from '@/app/components/ModifyCategoryForm.tsx';
import { useSearchParams } from 'next/navigation';
import { usePathname } from 'next/navigation';
const Page = (
  {params} : {params: {id: number}}
) => {
  return (
    <>
      <h1>{params.id}</h1>
      <ModifyCategoryForm categoryId={params.id} />
    </>
  );
};
export default Page;
