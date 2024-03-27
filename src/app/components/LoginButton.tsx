import React, { useContext } from 'react';
import { GlobalContext } from '@/app/context/GlobalContext';
import LoginOverlay from "@/app/components/LoginOverlay.tsx";

export function LoginButton() {
    const { loginOverlayVisible, setLoginOverlayVisible } =
        useContext(GlobalContext);

    return (
        <>
            <button
                type="submit"
                className="loginImage"
                onClick={() => {
                    setLoginOverlayVisible(true);
                    console.log('Logging in...');
                }}
            ></button>
            <LoginOverlay />
        </>
    );
}
