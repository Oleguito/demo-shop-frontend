import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";

interface Props {}

const PageCarcass: React.FC = (props: Props) => {
    const {context, setContext} = useContext(GlobalContext);
    // const [context, setContext] = React.useState(cont);

    return (
        <>
            <header className="flex justify-between mx-[15%]">
                <div className="logo"></div>
                <input
                    type="text"
                    className="searchBar"
                    placeholder=" enter search criteria"
                />
                <button
                    type="submit"
                    className="loginImage"
                    onClick={() => {
                        console.log(context.loginOverlayVisible);
                        setContext({ loginOverlayVisible: true });
                    }}
                ></button>
            </header>
            <section className="h-[100vh] mx-[15%]">
                MainArea <br />
                <br />
                <br />
                {/* {"cont: " + cont.loginOverlayVisible} */}
                <br />
                {"context: " + context.loginOverlayVisible}
            </section>
        </>
    );
};

export default PageCarcass;
