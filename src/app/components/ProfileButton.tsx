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

export default function ProfileButton() {
    const router = useRouter();

    const { loggedInUserData } = useContext(GlobalContext);

    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <Button
                        type="submit"
                        className="profileImage"

                    ></Button>
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
                        }}
                    >
                        Log Out
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    );
}
