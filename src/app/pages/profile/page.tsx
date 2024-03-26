"use client"

import React from 'react'
import {Header} from "@/app/components/Header";
import DebugComponent from "@/app/components/DebugComponent";
import { GlobalContextProvider } from '@/app/context/GlobalContext';

const ProfilePage = () => {
    return (
        <>
            <GlobalContextProvider>
                <Header />
                <div>ProfilePage</div>
                <DebugComponent />
            </GlobalContextProvider>
        </>
    );
}
export default ProfilePage
