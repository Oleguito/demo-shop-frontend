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
import {UserTypes} from "@/types/user/user.types.ts";
import * as constants from "@/constants/constants";
import * as cookies from "@/constants/cookies";
import Cookies from "js-cookie";
import {getOneUser} from "@/api/Authorize"
import {getUserById} from "@/api/Users";
import { log } from "console";

interface GlobalContextData {
    loginOverlayVisible: boolean;
    setLoginOverlayVisible: (value: boolean) => void;
    userIsLoggedIn: boolean;
    setUserIsLoggedIn: Dispatch<SetStateAction<boolean>>;
    loggedInUserData: UserTypes;
    setLoggedInUserData: Dispatch<SetStateAction<UserTypes>>;
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
    loggedInUserData: {} as UserTypes,
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
        = useState<UserTypes>({} as UserTypes);

    const [isClient, setIsClient] = useState(false)
    useEffect(() => {
        setIsClient(true);
        setUserIsLoggedIn(typeof currentUserFromCookies == "string");

        if(currentUserFromCookies !== undefined) {
            
            getUserById(parseInt(currentUserFromCookies)).then((user) => {
                setLoggedInUserData(user);
            })
        }
    }, [])

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