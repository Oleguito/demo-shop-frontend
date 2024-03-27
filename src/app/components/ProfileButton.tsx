import React from "react";
import {useRouter} from "next/navigation";
import {frontend} from "@/app/routes/routes.ts";

export default function ProfileButton() {

    const router = useRouter();

    return <button
        type="submit"
        className="profileImage"
        onClick={() => {
            console.log("this is a profile button");
            router.push(frontend.profilePage);
        }}
    ></button>;
}