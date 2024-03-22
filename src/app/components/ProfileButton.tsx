import React from "react";
import {useRouter} from "next/navigation";

export default function ProfileButton() {

    const router = useRouter();

    return <button
        type="submit"
        className="profileImage"
        onClick={() => {
            console.log("this is a profile button");
            router.push("/pages/profile");
        }}
    ></button>;
}