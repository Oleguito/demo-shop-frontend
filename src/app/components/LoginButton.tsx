import React, {useContext} from "react";
import {GlobalContext} from "@/app/context/GlobalContext";

export function LoginButton() {
    const {loginOverlayVisible, setLoginOverlayVisible} = useContext(GlobalContext);

    return <button
        type="submit"
        className="loginImage"
        onClick={() => {
            setLoginOverlayVisible(true);
        }}
    ></button>;
}