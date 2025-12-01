import React from 'react'
import Logo from "../../../public/Shutkiz-logo-crop.png"
import LoginForm from "../../_components/Login/LoginForm"
import Image from 'next/image';
function Login() {
  return (
    <main>
      <div className='lg:max-w-[500px] mx-auto px-10 pt-2 pb-5'>
        <div className='pb-5'>
            <h2 className='pb-2 text-lg'>Login to</h2>
            <Image src={Logo} className='w-[100px] -ml-2' alt='Shutkiz Logo'/>
        </div>
        <LoginForm/>
      
      </div>
    </main>
  )
}

export default Login
