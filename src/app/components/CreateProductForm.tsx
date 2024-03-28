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

const formSchema = z.object({
    productName: z.string().min(2).max(50),
});

function ThisForm() {
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            productName: '',
        },
    });

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values);
        console.log("creating product...");
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
                                <Input
                                    placeholder="product name here..."
                                    {...field}
                                />
                            </FormControl>
                            <FormDescription>
                                This is what your Product shall be named
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
