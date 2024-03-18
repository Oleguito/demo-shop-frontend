"use client";

import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalContext";
import axios from "axios";
import { routes } from "../routes/routes";
import Link from "next/link";

const LoginOverlay: React.FC = () => {
    //@ts-ignore
    const { context, setContext } = useContext(GlobalContext);

    const [login, setLogin] = React.useState("");
    const [password, setPassword] = React.useState("");

    useEffect(() => {
        console.log("Oleg " + context.loginOverlayVisible);
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
                        <div className="loginFormRemeberMe">Remember me</div>
                        <button
                            type="submit"
                            className="submitButton"
                            onClick={() => {
                                console.log(login, password);
                                axios.post(
                                    routes.addUser,
                                    JSON.stringify({
                                        login: login,
                                        password: password,
                                        email: null,
                                    })
                                );
                                setContext({ loginOverlayVisible: false });
                            }}
                        >
                            Submit
                        </button>
                        <div className="loginFormNotRegisteredMessage">
                            <p>
                                Not a user yet? <Link className="link" href="/authorization">Register</Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        )
    );
};

export default LoginOverlay;
