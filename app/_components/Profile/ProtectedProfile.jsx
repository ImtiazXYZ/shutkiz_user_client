"use client";
import React, { useEffect, useState } from 'react';
import UserProfile from "../../_components/Profile/UserProfile";
import isVarifiedEmail from "../../_lib/auth/isVarifiedEmail";
import EmailVerification from '../../_components/Profile/EmailVerification';
import { Skeleton } from 'antd';
function ProtectedProfile() {
    const [isEmailVerified, setEmailVerified] = useState(false);
    const [isLoading,setIsLoading] = useState(true);

    useEffect(() => {
        checkIsEmailVerified();
    }, []);

    const checkIsEmailVerified = async () => {
        try {
            const result = await isVarifiedEmail();
            if (result.isVerified === 1) {
                setEmailVerified(true);
                setIsLoading(false);
            } else if (result.isVerified === 0) {
                setEmailVerified(false);
                setIsLoading(false);
            }
        } catch (error) {
            console.error("Error checking email verification:", error);
            setEmailVerified(false);
            setIsLoading(false);
        }
    };

    return (
        <div>
            {
                isLoading?<Skeleton/>:
                <div>
                    {
                        isEmailVerified?
                        <UserProfile/>:
                        <EmailVerification/>
                    }
                </div>
            }
        </div>
    );
}

export default ProtectedProfile;
