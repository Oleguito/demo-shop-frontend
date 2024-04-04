'use client';

import React from 'react';
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
import { modifyCategory, postOneCategory } from '@/api/backend/Categories.ts';
import {useRouter} from "next/navigation";

type Props = {
  categoryId:number;
}

const formSchema = z.object({
    categoryName: z.string().min(2).max(50),
});

function ThisForm(props:Props) {
  
    const router = useRouter();
  
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            categoryName: '',
        },
    });

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values);
        console.log("modifying category...");
        modifyCategory(props.categoryId,{title:values.categoryName}).then(
          data => console.log("from server", data)
        )
      // console.log("yesyesyesyes",props.categoryId);
      
      router.push("/profile");
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="categoryName"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Name your Category</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="category name here..."
                                    {...field}
                                />
                            </FormControl>
                            <FormDescription>
                                This is what your Category shall be REnamed to
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button
                    type="submit"
                    className={'bg-white hover:text-amber-100'}
                >
                    Submit
                </Button>
            </form>
        </Form>
    );
}

const ModifyCategoryForm = (
  props: Props
) => {
  return (
        <>
            <div className={'mt-[10%] w-[75%] mx-[10%]'}>
                <ThisForm categoryId={props.categoryId} />
            </div>
        </>
    );
};
export default ModifyCategoryForm;
