import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";

interface Props {}

const PageCarcass: React.FC = (props: Props) => {
    //@ts-ignore
    const { context, setContext } = useContext(GlobalContext);

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
                <h1>Products by categories</h1>
                <h2>Category 1</h2>
                <div className="productInCategoryContainer">
                    <div className="productInCategory"></div>
                    <div className="productInCategory"></div>
                    <div className="productInCategory"></div>
                    <div className="productInCategory"></div>
                </div>
                <h2>Category 2</h2>
                <div className="productInCategoryContainer">
                    <div className="productInCategory"></div>
                    <div className="productInCategory"></div>
                    <div className="productInCategory"></div>
                    <div className="productInCategory"></div>
                    <div className="productInCategory"></div>
                    <div className="productInCategory"></div>
                    <div className="productInCategory"></div>
                    <div className="productInCategory"></div>
                </div>
                <h2>Category 3</h2>
                <div className="productInCategoryContainer">
                    <div className="productInCategory"></div>
                    <div className="productInCategory"></div>
                    <div className="productInCategory"></div>
                </div>
                <br />
                {"context: " + context.loginOverlayVisible}
            </section>
        </>
    );
};

export default PageCarcass;
