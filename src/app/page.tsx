"use client";

import React, { useContext, useState } from "react";
import LoginOverlay from "./components/LoginOverlay";
import PageCarcass from "./components/PageCarcass";
import { GlobalContext } from "./context/GlobalContext";

export default function Home() {
    const cont = useContext(GlobalContext);
    const [context, setContext] = useState(cont);

    return (
        <main>
            <GlobalContext.Provider value={context}>
                <PageCarcass />
                <LoginOverlay />
            </GlobalContext.Provider>
        </main>
    );
}
