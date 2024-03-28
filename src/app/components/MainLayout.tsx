import React from "react";

export function MainLayout() {
    return <section className="h-[100vh] mx-[15%] mainLayoutSection">
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
        <br/>
    </section>;
}