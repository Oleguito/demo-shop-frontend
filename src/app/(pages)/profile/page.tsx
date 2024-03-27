"use client"

import React from 'react'
import {Header} from "@/app/components/Header";
import DebugComponent from "@/app/components/DebugComponent";
import { GlobalContextProvider } from '@/app/context/GlobalContext';

const ProfilePage = () => {
    return (
        <>
            <div>ProfilePage</div>
            <DebugComponent />
        </>
    );
}
export default ProfilePage