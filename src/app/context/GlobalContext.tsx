import { createContext, ReactNode, useContext, useState } from "react";

interface GlobalContextData {
    loginOverlayVisible: boolean;
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
};

export const GlobalContext = createContext<GlobalContextData>(defaultValue);
