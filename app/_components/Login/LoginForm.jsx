"use client";
import {Input} from "@nextui-org/input";
import React, { useState } from 'react'
import {toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import handleLogin from "../../_lib/auth/login";
import { useRouter } from "next/navigation";
import Logo from "../../../public/Shutkiz-logo-crop.png"
import Image from 'next/image'
import Link from "next/link";
import useUserStore from "../../store/userStore";
function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { push } = useRouter();
  const { checkLoginStatus } = useUserStore();

  const onSubmit = async (e) => {
      e.preventDefault();
    const type = "user";
    const result = await handleLogin({ email, password, type });
    console.log(result);
    if (result.success) {
      setEmail("");
      setPassword("");
      toast.success("Login Successful", {
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
      toast.error("Login Failed", {
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
  };
  return (
    <main className="pt-5">
        <div className='lg:max-w-[500px] mx-auto px-10 pb-14 shadow-lg pt-5 rounded-lg'>
        <div className='pb-5'>
            <h2 className='pb-2 text-lg text-center '>Login your shutkiz account</h2>
            <Image src={Logo} className='w-[100px] -ml-2' alt='Shutkiz Logo'/>
        </div>
        <div className="">
        <form onSubmit={onSubmit} className='flex flex-col gap-y-5'>
        <Input type="email" label="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <Input type="password" label="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit" className='bg-black text-white rounded-lg w-full py-3 mt-5'>Login</button>
        </form>
        <div className="flex gap-x-1 pt-5 justify-center text-[15px]">
        <p>Dont have an account?</p>
        <Link href="/signup">
        <span className="underline">Sign up</span>
        </Link>
        </div>
    </div>
      </div>
    </main>
  )
}

export default LoginForm
