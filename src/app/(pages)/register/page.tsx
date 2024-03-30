"use client"

import React, {useContext, useEffect} from 'react';
import RegistrationForm from './RegistrationForm';
import {GlobalContext} from "@/app/context/GlobalContext.tsx";

const RegistrationPage = () => {

    const {setLoginOverlayVisible} = useContext(GlobalContext);

    useEffect(() => {
        setLoginOverlayVisible(false);
    }, []);

    return (
        <div className="authorizationFormContainer">
            <RegistrationForm />
        </div>
    );
};

export default RegistrationPage;
