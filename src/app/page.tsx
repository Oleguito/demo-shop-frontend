"use client"

import React, { useContext, useState } from "react";
import LoginOverlay from "./components/LoginOverlay";
import PageCarcass from "./components/PageCarcass";
import {GlobalContext, GlobalContextProvider} from "./context/GlobalContext";
import {LoginButton} from "@/app/components/LoginButton";
import ProfileButton from "@/app/components/ProfileButton";
import DebugComponent from "@/app/components/DebugComponent.tsx";

export default function Home() {

    const {userIsLoggedIn} = useContext(GlobalContext);

    return (
        <main>
            <DebugComponent />
            <PageCarcass  />
            <LoginOverlay />
        </main>
    );
}
