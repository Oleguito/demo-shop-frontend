'use client';

import React, { useEffect, useState } from 'react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import * as categoriesApi from '@/api/backend/Categories.ts';
import { getAllCategories, getCategoryById } from '@/api/backend/Categories.ts';
import { CategoryResponse } from '@/types/category/Category.ts';
import { createAProduct } from '@/api/backend/Products.ts';

function convertCategoriesToReactElements(allCategories: CategoryResponse[]) {
  return allCategories.map((category: CategoryResponse) => {
    console.log(category.id);
    return (
      <SelectItem key={category.id} value={category.id?.toString()}>
        {category.title}
      </SelectItem>
    );
  });
}

const formSchema = z.object({
  productName: z.string().min(2).max(50),
  categoryId: z.string(),
});

function ThisForm() {
  const [allCategories, setAllCategories] = useState([{} as CategoryResponse]);
  const [selectedCategoryTitle, setSelectedCategoryTitle] = useState('');

  useEffect(() => {
    getAllCategories().then((cats) => {
      setAllCategories(cats);
    });
  }, []);

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      productName: '',
      categoryId: '',
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    console.log('creating product...');
    getCategoryById(Number(values.categoryId)).then((category) => {
      createAProduct({
        title: values.productName,
        category: category,
      });
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="productName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name your Product</FormLabel>
              <FormControl>
                <Input placeholder="product name here..." {...field} />
              </FormControl>
              <FormDescription>
                This is what your Product shall be named
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="categoryId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Category for your awesome amazing interesting cool product
              </FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    {allCategories.map((category) => {
                      return (
                        <SelectItem
                          key={category.id}
                          value={category?.id?.toString()}
                        >
                          {category.title}
                        </SelectItem>
                      );
                    })}
                    {/*{<SelectItem value={'One'}>One</SelectItem>}*/}
                    {/*{<SelectItem value={'Two'}>Two</SelectItem>}*/}
                    {/*{<SelectItem value={'Three'}>Three</SelectItem>}*/}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormDescription>
                Category in which your new Product shall he listed
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className={'bg-white hover:text-amber-100'}>
          Submit
        </Button>
      </form>
    </Form>
  );
}

const CreateCategoryForm = () => {
  return (
    <>
      <div className={'mt-[10%] w-[75%] mx-[10%]'}>
        <ThisForm />
      </div>
    </>
  );
};
export default CreateCategoryForm;

