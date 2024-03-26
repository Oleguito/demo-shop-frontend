import React, {useContext, useEffect, useState} from 'react';
import {GlobalContext} from '../context/GlobalContext';
import {MainLayout} from '@/app/components/MainLayout';
import Cookies from "js-cookie";
import {Header} from "@/app/components/Header";
import * as cookies from "@/constants/cookies";
import DebugComponent from "@/app/components/DebugComponent";


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
