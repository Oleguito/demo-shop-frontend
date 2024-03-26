"use client"

import {Logo} from "@/app/components/Logo";
import {SearchBar} from "@/app/components/SearchBar";
import {LoginButton} from "@/app/components/LoginButton";
import React, {useContext, useEffect, useState} from "react";
import ProfileButton from "@/app/components/ProfileButton";
import {GlobalContext} from "@/app/context/GlobalContext";
import {useRouter} from "next/navigation";

// type Props = {
//     buttonToTheRight: React.ReactNode;
// }

export function Header() {

    const {userIsLoggedIn} = useContext(GlobalContext);

    const [isClient, setIsClient] = useState(false)
    useEffect(() => {
        setIsClient(true)
    }, [])

    return (
        <header className="flex justify-between mx-[15%]">
            <Logo/>
            <SearchBar/>
            {isClient && userIsLoggedIn ? <ProfileButton /> : <LoginButton /> }
        </header>
    );
}
