"use client"

import {
    createContext,
    Dispatch,
    ReactNode,
    SetStateAction,
    useContext,
    useEffect,
    useState
} from "react";
import {Utils} from "@/lib/utils";
import {UserQuery} from "@/types/UserQuery";
import * as constants from "@/constants/constants";
import * as cookies from "@/constants/cookies";
import Cookies from "js-cookie";
import {} from "@/api/Authorize"

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

    const currentUserFromCookies
        = Cookies.get("currentUserId")

    const [ loginOverlayVisible,
            setLoginOverlayVisible]
        = useState<boolean>(false);
    const [ userIsLoggedIn,
            setUserIsLoggedIn]
        = useState<boolean>(false);
    const [ loggedInUserData,
            setLoggedInUserData]
        = useState<UserQuery>({} as UserQuery);

    const [isClient, setIsClient] = useState(false)
    useEffect(() => {
        setIsClient(true);
        setUserIsLoggedIn(typeof currentUserFromCookies == "string");
    }, [currentUserFromCookies])

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