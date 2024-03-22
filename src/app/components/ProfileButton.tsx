import React from "react";

export default function ProfileButton() {
    return <button
        type="submit"
        className="profileImage"
        onClick={() => {
            console.log("this is a profile button")
        }}
    ></button>;
}