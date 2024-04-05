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
import { registerUser } from '@/api/backend/Register.ts';
import { AccountTypes, returnBy } from '@/types/accountTypes/AccountTypes.ts';
import { getUserById, modifyAUserById } from '@/api/backend/Users.ts';
import { UserQuery } from '@/types/user/user.types.ts';
import { ProductBin } from '@/api/backend/ProductBin.ts';

type Props = {
  userId: number;
};

const formSchema = z.object({
  login: z.string().min(2).max(50),
  password: z.string().min(3),
  email: z.string().email(),
  accountType: z.string(),
  // id: number;
  // login: string;
  // email: string;
  // password: string;
  // accountType: string;
});

function ThisForm(props: Props) {
  const [accountType, setAccountType] = useState('');
  const [formUser, setFormUser] = useState({} as UserQuery);
  
  useEffect(() => {
    getUserById(props.userId).then(
      data => {
        setFormUser(data)
      }
    )
  }, []);
  
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      login: formUser ? formUser.login : "sdf",
      password: formUser && formUser.password,
      email: formUser.email,
      accountType: AccountTypes.ADMIN,
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log("values: ", values);
    console.log('modifying user...');
    console.log("formUser:", formUser);
    
    modifyAUserById(props.userId, {
      login: values.login,
      email: values.email,
      password: values.password,
      accountType: returnBy(values.accountType),
      productBin: formUser.productBin,
      purchases: formUser.purchases
    }).then(
      data => {
        console.log("returned: ", data);
      }
    )
    
    // console.log("returned:");
    // console.log(returned);
    // if(returned) alert("Congratz, you have successfully created a user");
    // else {alert("Sorry, something went wrong!!")}
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
                <Input {...field} />
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
                <Input placeholder="user email here..." {...field} />
              </FormControl>
              <FormDescription>Your email</FormDescription>
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
                <Input placeholder="user password here..." {...field} />
              </FormControl>
              <FormDescription>
                This is what user will use to log in
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="accountType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Account type</FormLabel>
              <FormControl>
                <Select
                  onValueChange={(value: string) => {
                    setAccountType(value);
                  }}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="USER" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="USER">USER</SelectItem>
                    <SelectItem value="ADMIN">ADMIN</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormDescription>Account type for the new user</FormDescription>
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

const UpdateUserForm = (props: Props) => {
  return (
    <>
      <div className={'mt-[10%] w-[75%] mx-[10%]'}>
        <ThisForm userId={props.userId} />
      </div>
    </>
  );
};
export default UpdateUserForm;
