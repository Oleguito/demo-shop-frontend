'use client';

import React from 'react';
import { Header } from '@/app/components/Header';
import DebugComponent from '@/app/components/DebugComponent';
import { GlobalContextProvider } from '@/app/context/GlobalContext';
import LoginOverlay from '@/app/components/LoginOverlay.tsx';

const ProfilePage = () => {
    return (
        <>
            <div>ProfilePage</div>
            <DebugComponent />
        </>
    );
};
export default ProfilePage;
