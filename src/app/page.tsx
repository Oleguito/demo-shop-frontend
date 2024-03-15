"use client"

import { validateHeaderValue } from "http";
import LoginOverlay from "./components/LoginOverlay";
import PageCarcass from "./components/PageCarcass";
import {GlobalContext } from "./context/GlobalContext";

export default function Home() {
  return (
      <main>
          <GlobalContext.Provider value={{loginOverlayVisible: true}}>
              <PageCarcass />
              <LoginOverlay />
          </GlobalContext.Provider>
      </main>
  );
}
