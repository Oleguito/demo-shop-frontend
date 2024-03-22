import React, {useContext, useEffect, useState} from 'react';
import {GlobalContext} from '../context/GlobalContext';
import {MainLayout} from '@/app/components/MainLayout';
import Cookies from "js-cookie";
import {Header} from "@/app/components/Header";
import * as cookies from "@/constants/cookies";


const PageCarcass = () => {

    const {loggedInUserData} = useContext(GlobalContext);
    const {userIsLoggedIn} = useContext(GlobalContext);

    const currentUserId = Cookies.get(cookies.currentUserID);
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
