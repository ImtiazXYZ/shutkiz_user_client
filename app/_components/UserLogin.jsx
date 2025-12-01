"use client";
import React, { useState, useEffect } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input } from "@nextui-org/react";
import { AiOutlineUser } from "react-icons/ai";
import { useTranslations } from "next-intl";
import handleLogin from "../_lib/auth/login";
import {toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import Link from "next/link";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
import handleLogout from "../_lib/auth/logout";
import { useCartStore } from "../store/cartStore";
import useUserStore from "../store/userStore";

const successMsg=(msg)=>{
  toast.success(msg, {
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
}
const errorMsg=(msg)=>{
  toast.error(msg, {
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
}

export default function UserLogin() {
  const { triggerCartUpdate } = useCartStore();
  const t = useTranslations("Login");
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { push } = useRouter();
  const { isLoggedIn, checkLoginStatus, logout } = useUserStore();
  
  useEffect(() => {
    if (isOpen) {
      checkLoginStatus();
    }
  }, [isOpen]);

  const onSubmit = async (e) => {
    e.preventDefault();
    const type = "user";
    const result = await handleLogin({ email, password, type });

    if (result.success) {
      setEmail("");
      setPassword("");
      onOpenChange(false);
      successMsg("Login Successfull");
      checkLoginStatus();
      push("/profile");
    } else {
      errorMsg("Login Failed");
    }
  };

  const handleLogoutForm = async() => {
    const result = await handleLogout();
    if(result.success){
      triggerCartUpdate();
      successMsg("Logout Successfull")
      logout();
      push('/');
    }else{
      errorMsg("Logout Failed");
    }
  }

  const handleReg=()=>{
    onOpenChange(false);
    push("/signup");
  }
  

  return (
    <>
      <div className="user cursor-pointer">
        {!isLoggedIn ? (
          <div className="flex flex-col items-center">
            <AiOutlineUser className="text-[24px]" onClick={onOpen} />
            <span className="text-xs text-black block md:hidden">Login</span>
          </div>
        ) : (
          <Dropdown>
            <DropdownTrigger>
              <div className="flex flex-col items-center">
                <AiOutlineUser className="text-2xl" />
                <span className="text-xs text-black block md:hidden">Profile</span>
              </div>
            </DropdownTrigger>
            <DropdownMenu aria-label="Example with disabled actions">
              <DropdownItem key="new"><Link href="/profile">Profile</Link></DropdownItem>
              <DropdownItem key="copy" onClick={handleLogoutForm}>Logout</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        )}
      </div>

      {/* Login Modal */}
      <Modal className="z-[9999] w-full h-full sm:w-[500px] md:w-[500px] md:h-[300px]" isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">{t("title")}</ModalHeader>
              <form onSubmit={onSubmit}>
                <ModalBody>
                  <Input
                    autoFocus
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    label={t("Email.title")}
                    placeholder={t("Email.description")}
                    variant="bordered"
                  />
                  <Input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    label={t("Password.title")}
                    placeholder={t("Password.description")}
                    type="password"
                    variant="bordered"
                  />
                </ModalBody>
                <ModalFooter className="flex justify-between items-center">
                  <div>
                    <p className="text-sm cursor-pointer" onClick={handleReg}>Create Account</p>
                  </div>
                  <Button className="bg-black text-white" type="submit">
                    {t("button")}
                  </Button>
                </ModalFooter>
              </form>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

