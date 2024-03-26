import React, {useContext, useEffect, useState} from 'react';
import {GlobalContext} from '@/app/context/GlobalContext';
import {MainLayout} from '@/app/components/MainLayout';
import Cookies from "js-cookie";
import {Header} from "@/app/components/Header";
import * as cookies from "@/constants/cookies";
import { getUserById, getUserByIdNotAsync } from '@/api/Users';


const DebugComponent = () => {

    const {loggedInUserData, setLoggedInUserData} = useContext(GlobalContext);
    const {userIsLoggedIn} = useContext(GlobalContext);

    const currentUserId = Cookies.get(cookies.currentUserId);
    // const userIsLoggedInCookies = currentUserId !== undefined;

    const [isClient, setIsClient] = useState(false)
    useEffect(() => {
        setIsClient(true);
        // setLoggedInUserData(
        //     getUserByIdNotAsync(
        //         currentUserId ? parseInt(currentUserId) : undefined
        //     )
        // );
    }, [])

    return (
        <>
            <div>
                User Id (Cookies): <span>{isClient && currentUserId}</span>
                <br />
                User is logged in (context):{" "}
                {isClient && userIsLoggedIn ? "yes" : "no"}
                <br />
                User data (context):{" "}
                {isClient && loggedInUserData ? JSON.stringify(loggedInUserData) : "asdf"}
            </div>
        </>
    );
};

export default DebugComponent;


