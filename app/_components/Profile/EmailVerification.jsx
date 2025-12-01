"use client"
import React, { useState } from 'react'
import varifyEmail from "../../_lib/auth/varifyEmail"
function EmailVerification() {
    const [isSending,setIsSending] = useState(false);
    const [isSent,setIsSent] = useState(false);
    const [email,setEmail] = useState("");
    const [error,setError] = useState(false);
    const makeVarifyEmail=async()=>{
        setIsSending(true);
        setError(false);
        const result = await varifyEmail();
        if(result.success){
            setIsSending(false);
            setIsSent(true);
            setEmail(result.email);
        }else{
            setIsSending(false);
            setIsSent(false);
            setError(true);
        }
    }
  return (
    <div className=" flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg pt-8 pb-14 max-w-lg w-full px-5">
          <div className="text-center">
            <h2 className="text-xl font-semibold text-red-500 mb-4">
              Your email is not verified
            </h2>
            <p className="text-gray-600 mb-6">
              To access all the features of your profile, please verify your email address.
            </p>
            <button
              onClick={makeVarifyEmail}
              className="px-6 py-3 bg-black text-white font-semibold rounded-md"
            >
              {isSending?"Processing...":"Verify Email"}
            </button>
            {
                isSent?<p className='pt-4 text-sm text-green-500'>A verification email sent to {email}</p>:""
            }
            {
                error?<p className='pt-4 text-sm text-red-500'>Something went wrong. Please try again</p>:""
            }
          </div>
      </div>
    </div>
  )
}

export default EmailVerification
