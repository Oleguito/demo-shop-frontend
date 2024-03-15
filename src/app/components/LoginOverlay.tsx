"use client"

import React, {useContext} from "react";
import { GlobalContext } from "../context/GlobalContext";

const LoginOverlay: React.FC = () => {
    const context = React.useContext(GlobalContext);
    
    return (context.loginOverlayVisible &&
        <div className="overlay">
            <div className="overlay-content">
                <form>
                    <label htmlFor="login">Login:</label>
                    <input type="text" id="login" placeholder="Enter your login here" />
                    <br />
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" placeholder="Enter your password here" />
                    <br />
                    <button type="submit" className="submitButton" onClick={
                        () => {context.loginOverlayVisible = false}
                    }>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default LoginOverlay;
