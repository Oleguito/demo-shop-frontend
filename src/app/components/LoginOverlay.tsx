"use client";

import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalContext";

const LoginOverlay: React.FC = () => {
    // const cont = React.useContext(GlobalContext);
    const { context, setContext } = useContext(GlobalContext);
    // const [context, setContext] = React.useState(cont);
    useEffect(() => {
        console.log("Oleg" + context.loginOverlayVisible);
    }, [context.loginOverlayVisible]);

    return (
        context.loginOverlayVisible && (
            <div className="overlay">
                <div className="overlay-content">
                    <form>
                        <label htmlFor="login">Login:</label>
                        <input
                            type="text"
                            id="login"
                            placeholder="Enter your login here"
                        />
                        <br />
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter your password here"
                        />
                        <br />
                        <button
                            type="submit"
                            className="submitButton"
                            onClick={() => {
                                setContext({ loginOverlayVisible: false });
                            }}
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        )
    );
};

export default LoginOverlay;
