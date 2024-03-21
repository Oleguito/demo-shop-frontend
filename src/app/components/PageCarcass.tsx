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

    const currentUserId = Cookies.get("currentUserId");
    const userIsLoggedIn = currentUserId !== undefined;
    return (
        <>
            <Header />
            User Id: {currentUserId ? currentUserId : "N/A"}
            <br/>
            User is logged in: {userIsLoggedIn ? "yes" : "no"}
            <br/>
            User data: {JSON.stringify(loggedInUserData)}
            <MainLayout />
        </>
    );
};

export default PageCarcass;
