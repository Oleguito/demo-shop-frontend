import React from "react";
import {useRouter} from "next/navigation";
import {routes} from "@/app/routes/routes";

export default function ProfileButton() {

    const router = useRouter();

    return <button
        type="submit"
        className="profileImage"
        onClick={() => {
            console.log("this is a profile button");
            router.push(routes.profilePage);
        }}
    ></button>;
}