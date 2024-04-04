"use client"

import React from 'react';
import CreateCategoryForm from '@/app/components/CreateCategoryForm.tsx';
import ModifyCategoryForm from '@/app/components/ModifyCategoryForm.tsx';
import { useSearchParams } from 'next/navigation';
import { usePathname } from 'next/navigation';
const Page = (
  {params} : {params: {id: number}}
) => {
  console.log(params.id);
  return (
    <>
      <h1>{params.id}</h1>
      <ModifyCategoryForm />
    </>
  );
};
export default Page;
