import React, { ReactNode, useContext, useEffect, useState } from 'react';
import {GlobalContext} from '@/app/context/GlobalContext';
import {MainLayout} from '@/app/components/MainLayout';
import Cookies from "js-cookie";
import {Header} from "@/app/components/Header";
import * as cookies from "@/constants/cookies";
import {getUserById, getUserByIdNotAsync} from '@/api/backend/Users.ts';

const DEBUG = false;

type Props = {
    children: React.JSX.Element
}


function DebugStuff() {

    const {loginOverlayVisible, loggedInUserData, setLoggedInUserData} = useContext(GlobalContext);
    const {userIsLoggedIn} = useContext(GlobalContext);

    const currentUserId = Cookies.get(cookies.currentUserId);
    // const userIsLoggedInCookies = currentUserId !== undefined;

    const [isClient, setIsClient] = useState(false)
    useEffect(() => {
        setIsClient(true);
    }, [])

    return <div>
        <h1 className="text-2xl">Data from context</h1>
        <p className="ml-10">User is logged in (context): {" "}
            {isClient && userIsLoggedIn ? "yes" : "no"}
        </p>
        <p className="ml-10">User data (context): {" "}
            {isClient && loggedInUserData ? JSON.stringify(loggedInUserData) : "asdf"}
        </p>
        <p className="ml-10">Login overlay
            visible: {isClient && loginOverlayVisible ? "yes" : "no"}</p>
        <h1 className="text-2xl">Other data</h1>
        <p className="ml-10">User Id (Cookies): {" "}
            <span>{isClient && currentUserId ? currentUserId : "N/A" }</span>
        </p>
    </div>;
}

const DebugComponent = () => {
    return (
        <>{ DEBUG ? <DebugStuff /> : null }</>
    );
};

export default DebugComponent;