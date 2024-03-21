"use client"

import React, { ReactNode, useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { LoginButton } from '@/app/components/LoginButton';
import { SearchBar } from '@/app/components/SearchBar';
import { Logo } from '@/app/components/Logo';
import { MainLayout } from '@/app/components/MainLayout';
import {Utils} from '@/lib/utils';
import Cookies from "js-cookie";


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
    return (
        <>
            <Header />
            User Id from Cookies: <span>{currentUserId}</span>
            <br/>
            User is logged in (context): {userIsLoggedIn ? "yes" : "no"}
            <br/>
            User data: {JSON.stringify(loggedInUserData)}
            <MainLayout />
        </>
    );
};

export default PageCarcass;
