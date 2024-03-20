import { createContext, ReactNode, useContext, useState } from "react";

interface GlobalContextData {
    loginOverlayVisible: boolean;
    setLoginOverlayVisible: (setLoginOverlayVisible: boolean) => void;
}

let loggedInUserIDd;
if (typeof localStorage !== "undefined") {
    loggedInUserIDd = localStorage.getItem("loggedInUserId");
}
let showOrNot = false;
if (loggedInUserIDd) {
    showOrNot = false;
} else {
    showOrNot = true;
}

const defaultValue = {
    loginOverlayVisible: showOrNot,
    setLoginOverlayVisible: (setLoginOverlayVisible: boolean) => {},
};

interface GlobalContextProviderProps {
    children: ReactNode;
}

export const GlobalContext = createContext<GlobalContextData>(defaultValue);

export const GlobalContextProvider = ({children}:GlobalContextProviderProps) => {
    const [loginOverlayVisible, setLoginOverlayVisible] = useState(showOrNot);
    return (
        <GlobalContext.Provider value={{loginOverlayVisible, setLoginOverlayVisible}}>
            {children}
        </GlobalContext.Provider>
    );
}