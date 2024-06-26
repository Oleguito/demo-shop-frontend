'use client';

import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

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
import {AccountTypes} from "@/types/accountTypes/AccountTypes"
import { registerUser } from '@/api/backend/Register.ts';
import {
    RegisterCredentials,
    RegisterResponse,
} from '@/types/user/user.types.ts';
import {useRouter} from "next/navigation";

const formSchema = z.object({
    username: z.string().min(2).max(50),
    password: z.string().min(8).max(50),
    email: z.string().email().min(8).max(50),
});

export function RegistrationPage() {

    const router = useRouter();

    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: '',
            password: '',
            email: '',

        },
    });

    // 2. Define a submit handler.
    async function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.

        const returned = await registerUser({
            login: values.username,
            password: values.password,
            email: values.email,
            accountType: AccountTypes.USER,
        });

        console.log(returned);
        alert("gratz you can now log in using your credentials");

        router.push("/")
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8 w-[50%] mt-[100px]"
            >
                <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Username</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="e.g. 'Oleguito'"
                                    {...field}
                                />
                            </FormControl>
                            <FormDescription>
                                This is your public display name.
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
                                    placeholder="Using passwords like '123' is unsafe"
                                    {...field}
                                />
                            </FormControl>
                            <FormDescription>
                                This is your password. Don`&amp;apos`t share it with
                                anyone.
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
                            <FormLabel>Your e-mail address</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="e.g. 'myemail@gmail.com'"
                                    {...field}
                                />
                            </FormControl>
                            <FormDescription>
                                This is your email address.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" className={'bg-white'}>
                    Submit
                </Button>
            </form>
        </Form>
    );
}

export default RegistrationPage;
