"use client";

import {createContext, Dispatch, ReactNode, SetStateAction, useContext, useState} from "react";
import {Utils} from "@/lib/utils";
import {UserQuery} from "@/types/UserQuery";
import * as constants from "@/constants/constants";
import {cookies} from "next/headers";
import Cookies from "js-cookie";

interface GlobalContextData {
    loginOverlayVisible: boolean;
    setLoginOverlayVisible: Dispatch<SetStateAction<boolean>>;
    userIsLoggedIn: boolean;
    setUserIsLoggedIn: Dispatch<SetStateAction<boolean>>;
    loggedInUserData: UserQuery;
    setLoggedInUserDate: Dispatch<SetStateAction<boolean>>;
}

interface GlobalContextProviderProps {
    children: ReactNode;
}


const defaultValue: GlobalContextData = {
    loginOverlayVisible: false,
    setLoginOverlayVisible: () => {},
    // @ts-ignore
    userIsLoggedIn: Cookies.get("currentUserId") !== undefined,
    setUserIsLoggedIn: () => { },
    loggedInUserData: {} as UserQuery,
    setLoggedInUserDate: () => {},
};
export const GlobalContext
        = createContext<GlobalContextData>(defaultValue);

export const GlobalContextProvider = ({children}:GlobalContextProviderProps) => {
    const [ loginOverlayVisible,
            setLoginOverlayVisible]
        = useState(false);
    const [ userIsLoggedIn,
            setUserIsLoggedIn]
        = useState(false);
    const [ loggedInUserData,
            setLoggedInUserDate]
        = useState({} as UserQuery);

    return (
        <GlobalContext.Provider value={defaultValue}>
            {children}
        </GlobalContext.Provider>
    );
}