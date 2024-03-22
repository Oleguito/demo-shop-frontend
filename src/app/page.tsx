"use client"

import React, { useContext, useState } from "react";
import LoginOverlay from "./components/LoginOverlay";
import PageCarcass from "./components/PageCarcass";
import { GlobalContextProvider } from "./context/GlobalContext";

export default function Home() {
    return (
        <main>
            <GlobalContextProvider>
                <PageCarcass />
                <LoginOverlay />
            </GlobalContextProvider>
        </main>
    );
}
