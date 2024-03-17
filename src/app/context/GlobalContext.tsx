import { createContext, ReactNode, useContext, useState } from "react";

interface GlobalContextData {
    loginOverlayVisible: boolean;
}

const defaultValue = {
    loginOverlayVisible: false,
};

export const GlobalContext = createContext<GlobalContextData>(defaultValue);