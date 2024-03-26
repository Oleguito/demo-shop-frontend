"use client"

import React from 'react'
import {Header} from "@/app/components/Header";
import DebugComponent from "@/app/components/DebugComponent";
import { GlobalContextProvider } from '@/app/context/GlobalContext';

const AdminProfilePage = () => {
    return (
        <>
            <div>AdminProfilePage</div>
            <DebugComponent />
        </>
    );
}
export default AdminProfilePage
