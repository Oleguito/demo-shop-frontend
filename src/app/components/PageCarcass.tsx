import React from "react";

interface Props {
    
}

const PageCarcass: React.FC = (props: Props) => {
    // const [a, b] = React.useState();
    return (
        <>
            <header className="flex justify-between mx-[15%]">
                <div className="logo"></div>
                <input
                    type="text"
                    className="searchBar"
                    placeholder=" enter search criteria"
                />
                <button className="loginImage"></button>
            </header>
            <section className="h-[100vh] mx-[15%]">MainArea</section>
        </>
    );
};

export default PageCarcass;
