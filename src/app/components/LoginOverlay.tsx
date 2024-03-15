"use client"

import React from "react";

// interface Props {
//     visible: boolean;
//     setVisibleTo: (visibleFlag: boolean) => void;
// }

const LoginOverlay = () => {
    const [visible, setVisibleTo] = React.useState(true);
    console.log(visible);
    
    return (visible &&
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
                        () => {setVisibleTo(false);}
                    }>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default LoginOverlay;
