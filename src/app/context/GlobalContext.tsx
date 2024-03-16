import { createContext, ReactNode, useContext, useState } from "react";

interface GlobalContextData {
    loginOverlayVisible: boolean;
}

const defaultValue = {
    loginOverlayVisible: true,
};

export const GlobalContext = createContext<GlobalContextData>(defaultValue);