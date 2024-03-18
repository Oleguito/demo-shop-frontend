"use client";

import { Checkbox } from "@/components/ui/checkbox";
import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalContext";
import axios from "axios";
import { routes } from "../routes/routes";
import Link from "next/link";
import { authorizeUser } from "@/api/Authorize";

const LoginOverlay: React.FC = () => {
    //@ts-ignore
    const { context, setContext } = useContext(GlobalContext);

    const [login, setLogin] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [rememberMe, setRememberMe] = React.useState(false);

    useEffect(() => {}, [context.loginOverlayVisible]);

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
                            onChange={(e) => setLogin(e.target.value)}
                        />
                        <br />
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter your password here"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <div className="loginFormRemeberMe">
                            <div className="flex items-center space-x-2">
                                <Checkbox
                                    id="terms"
                                    onClick={() => {
                                        setRememberMe(!rememberMe);
                                    }}
                                />
                                <label
                                    htmlFor="terms"
                                    className="text-base font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    Remember me
                                </label>
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="submitButton"
                            onClick={() => {
                                console.log(login, password);
                                authorizeUser(
                                    {
                                        login: login,
                                        password: password,
                                    },
                                    rememberMe
                                );
                                setContext({ loginOverlayVisible: false });
                            }}
                        >
                            Submit
                        </button>
                        <div className="loginFormNotRegisteredMessage">
                            <p>
                                Not a user yet?{" "}
                                <Link className="link" href="/authorization">
                                    Register
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        )
    );
};

export default LoginOverlay;
