import React, { ReactNode, useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { LoginButton } from '@/app/components/LoginButton';
import { SearchBar } from '@/app/components/SearchBar';
import { Logo } from '@/app/components/Logo';
import { MainLayout } from '@/app/components/MainLayout';
import {Utils} from '@/lib/utils';
import Cookies from "js-cookie";
import {getUserById} from "@/api/Users";
import dynamic from 'next/dynamic';

function Header() {
    return (
        <header className="flex justify-between mx-[15%]">
            <Logo />
            <SearchBar />
            <LoginButton />
        </header>
    );
}

const PageCarcass = () => {

    const {loggedInUserData} = useContext(GlobalContext);
    const {userIsLoggedIn} = useContext(GlobalContext);

    const currentUserId = Cookies.get("currentUserId");
    const userIsLoggedInCookies = currentUserId !== undefined;

    const [isClient, setIsClient] = useState(false)
    useEffect(() => {
        setIsClient(true)
    }, [currentUserId])

    return (
        <>
            <Header />
            <div>
                User Id (Cookies): <span>{isClient && currentUserId}</span>
                <br/>
                User is logged in (context): {userIsLoggedIn ? "yes" : "no"}
                <br/>
                User data (context): {JSON.stringify(loggedInUserData)}
            </div>
            <MainLayout />
        </>
    );
};

export default PageCarcass;
