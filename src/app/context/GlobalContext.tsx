import { createContext, useState } from "react";

type GlobalContextType = {
    loginOverlayVisible: boolean;
};

export const GlobalContext = createContext<GlobalContextType>({
    loginOverlayVisible: false,
});