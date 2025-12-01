"use client"
import React, { useEffect, useState } from 'react'
import Checkout from "../../_components/Checkout/Checkout";
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { Skeleton } from 'antd';
import isVarifiedEmail from "../../_lib/auth/isVarifiedEmail";
function ProtectCheckout() {
    const router = useRouter();
    const [isLoading,setIsLoading] = useState(true);

  useEffect(() => {
    isAuth();
  }, [router]);

  const isAuth=async()=>{
    setIsLoading(true);
    const token = Cookies.get('access_token');
    if(token){
      const result = await isVarifiedEmail();
      if(result.isVerified==0){
        router.push('/profile');
      }
    }
    if (!token) {
      router.push('/login');
    }else{
      setIsLoading(false);
    }
  }

  return (
    <div>
      {
        isLoading?<Skeleton/>:
        <Checkout/>
      }
    </div>
  )
}

export default ProtectCheckout
