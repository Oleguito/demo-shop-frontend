"use client";

import {createContext, Dispatch, ReactNode, SetStateAction, useContext, useState} from "react";
import {Utils} from "@/lib/utils";
import {UserQuery} from "@/types/UserQuery";
import * as constants from "@/constants/constants";
import {cookies} from "next/headers";
import Cookies from "js-cookie";

interface GlobalContextData {
    loginOverlayVisible: boolean;
    setLoginOverlayVisible: (value: boolean) => void;
    userIsLoggedIn: boolean;
    setUserIsLoggedIn: Dispatch<SetStateAction<boolean>>;
    loggedInUserData: UserQuery;
    setLoggedInUserData: Dispatch<SetStateAction<UserQuery>>;
}

interface GlobalContextProviderProps {
    children: ReactNode;
}

export const GlobalContext
        = createContext<GlobalContextData>({
    loginOverlayVisible: false,
    setLoginOverlayVisible: (value: boolean) => {},
    // @ts-ignore
    userIsLoggedIn: Cookies.get("currentUserId") !== undefined,
    setUserIsLoggedIn: () => {},
    loggedInUserData: {} as UserQuery,
    setLoggedInUserData: () => {},
});

export const GlobalContextProvider = ({children}:GlobalContextProviderProps) => {
    const [ loginOverlayVisible,
            setLoginOverlayVisible]
        = useState<boolean>(false);
    const [ userIsLoggedIn,
            setUserIsLoggedIn]
        = useState<boolean>(false);
    const [ loggedInUserData,
            setLoggedInUserData]
        = useState<UserQuery>({} as UserQuery);

    return (
        <GlobalContext.Provider value={{
            loginOverlayVisible,
            setLoginOverlayVisible,
            userIsLoggedIn,
            setUserIsLoggedIn,
            loggedInUserData,
            setLoggedInUserData,
        }}>
            {children}
        </GlobalContext.Provider>
    );
}