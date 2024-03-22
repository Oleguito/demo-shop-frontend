import {Logo} from "@/app/components/Logo";
import {SearchBar} from "@/app/components/SearchBar";
import {LoginButton} from "@/app/components/LoginButton";
import React, {useContext} from "react";
import ProfileButton from "@/app/components/ProfileButton";
import {GlobalContext} from "@/app/context/GlobalContext";

type Props = {
    buttonToTheRight: React.ReactNode;
}

export function Header() {

    const {userIsLoggedIn} = useContext(GlobalContext);

    return (
        <header className="flex justify-between mx-[15%]">
            <Logo/>
            <SearchBar/>
            {userIsLoggedIn ?<ProfileButton /> : <LoginButton /> }
        </header>
    );
}