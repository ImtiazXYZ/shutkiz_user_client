"use client";
import {Input} from "@nextui-org/input";
import React, { useState } from 'react'
import {toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import handleRegistration from "../../_lib/auth/registration";
import Logo from "../../../public/Shutkiz-logo-crop.png"
import Image from 'next/image'
import Link from "next/link";
import { useRouter } from "next/navigation";
import useUserStore from "../../store/userStore";

function SignupForm() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { push } = useRouter();
  const { checkLoginStatus } = useUserStore();

  // Validation states for registration
  const [isRegNameInvalid, setIsRegNameInvalid] = useState(false);
  const [isRegMobileInvalid, setIsRegMobileInvalid] = useState(false);
  const [isRegEmailInvalid, setIsRegEmailInvalid] = useState(false);
  const [isRegPasswordInvalid, setIsRegPasswordInvalid] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();

    let valid = true;

    setIsRegNameInvalid(false);
    setIsRegMobileInvalid(false);
    setIsRegEmailInvalid(false);
    setIsRegPasswordInvalid(false);

    if (!name) {
      setIsRegNameInvalid(true);
      valid = false;
    }

    if (mobile.length<11 || !mobile) {
      setIsRegMobileInvalid(true);
      valid = false;
    }

    if (!email.includes('@') || !email) {
      setIsRegEmailInvalid(true);
      valid = false;
    }

    if (password.length < 6 || !password) {
      setIsRegPasswordInvalid(true);
      valid = false;
    }

    if(valid){
        const type = "user";
        const result = await handleRegistration({ name,mobile,email, password, type });
        console.log(result);
        if (result.success) {
        setEmail("");
        setPassword("");
        toast.success("Sign Up Successful", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
        checkLoginStatus();
        push("/profile");
        } else {
        toast.error("Sign Up Failed", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
        console.log(result.message);
        }
    }
  };
  return (
    <main className="pt-5">
        <div className='lg:max-w-[500px] mx-auto px-10 pb-14 shadow-lg pt-5 rounded-lg'>
        <div className='pb-5'>
            <h2 className='pb-2 text-lg text-center '>Create your shutkiz account</h2>
            <Image src={Logo} className='w-[100px] -ml-2' alt='Shutkiz Logo'/>
        </div>
        <div className="">
        <form onSubmit={onSubmit} className='flex flex-col gap-y-5'>
        <Input
            type="text"
            label="Full Name" 
            value={name} 
            onChange={(e) => setName(e.target.value)}
            isInvalid={isRegNameInvalid}
            errorMessage="Name is required"
        />
        <Input 
            type="text" 
            label="Mobile" 
            value={mobile} 
            onChange={(e) => setMobile(e.target.value)}
            isInvalid={isRegMobileInvalid}
            errorMessage="Please enter a valid mobile number"
        />
        <Input 
            type="email" 
            label="Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
            isInvalid={isRegEmailInvalid}
            errorMessage="Please enter a valid email"
            />
        <Input 
            type="password" 
            label="Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
            isInvalid={isRegPasswordInvalid}
            errorMessage="Password must be at least 6 characters"
            />
        <button type="submit" className='bg-black text-white rounded-lg w-full py-3 mt-5'>Sign Up</button>
        </form>
        <div className="flex gap-x-1 pt-5 justify-center text-[15px]">
        <p>Already have an account?</p>
        <Link href="/login">
        <span className="underline">Sign in</span>
        </Link>
        </div>
    </div>
      </div>
    </main>
  )
}

export default SignupForm
