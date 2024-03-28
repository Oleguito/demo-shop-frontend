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
    login: z.string().min(2).max(50),
    password: z.string().min(3),
    email: z.string().email()
    // id: number;
    // login: string;
    // email: string;
    // password: string;
    // accountType: string;
});

function ThisForm() {
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            login: '',
            password: '',
            email: '',
        },
    });

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values);
        console.log("creating user...");
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="login"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>User name (login)</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="user name here..."
                                    {...field}
                                />
                            </FormControl>
                            <FormDescription>
                                This is what your user shall be named
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>User email</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="user email here..."
                                    {...field}
                                />
                            </FormControl>
                            <FormDescription>
                                Your email
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="user password here..."
                                    {...field}
                                />
                            </FormControl>
                            <FormDescription>
                                This is what user will use to log in
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

const CreateUserForm = () => {
    return (
        <>
            <div className={'mt-[10%] w-[75%] mx-[10%]'}>
                <ThisForm />
            </div>
        </>
    );
};
export default CreateUserForm;
