import React, { useContext } from 'react';
import { useRouter } from 'next/navigation';
import { frontend } from '@/app/routes/routes.ts';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button.tsx';
import { GlobalContext } from '@/app/context/GlobalContext.tsx';
import Cookies from "js-cookie";
import * as cookies from "@/constants/cookies.ts"
import {UserQuery} from "@/types/user/user.types.ts";

export default function ProfileButton() {
    const router = useRouter();

    const {
        userIsLoggedIn,
        loggedInUserData ,
        setUserIsLoggedIn,
        setLoggedInUserData
    } = useContext(GlobalContext);

    return ( userIsLoggedIn &&
        <>
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <div
                        className="profileImage"
                    ></div>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                        onClick={() => {
                            router.push(
                                loggedInUserData.accountType === 'ADMIN'
                                    ? frontend.adminProfilePage
                                    : frontend.profilePage,
                            );
                        }}
                    >
                        Profile
                    </DropdownMenuItem>
                    <DropdownMenuItem
                        onClick={() => {
                            console.log('Logging out...');
                            Cookies.remove(cookies.currentUserId);
                            setUserIsLoggedIn(false);
                            setLoggedInUserData({} as UserQuery);
                            router.refresh();
                        }}
                    >
                        Log Out
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    );
}
