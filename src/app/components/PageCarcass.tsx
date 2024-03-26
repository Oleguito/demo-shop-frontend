import React, {useContext, useEffect, useState} from 'react';
import {MainLayout} from '@/app/components/MainLayout';
import {Header} from "@/app/components/Header";
import DebugComponent from "@/app/components/DebugComponent";
import {GlobalContext} from '@/app/context/GlobalContext';
import Cookies from "js-cookie";
import * as cookies from "@/constants/cookies";


const PageCarcass = () => {

    // const {loggedInUserData} = useContext(GlobalContext);
    // const {userIsLoggedIn} = useContext(GlobalContext);

    // const [isClient, setIsClient] = useState(false)
    
    // const currentUserId = Cookies.get(cookies.currentUserId);

    // useEffect(() => {
    //     setIsClient(true);
    // }, [])

    return (
        <>
            <Header />
            <DebugComponent />
            <MainLayout />
        </>
    );
};

export default PageCarcass;
