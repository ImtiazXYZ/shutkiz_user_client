"use client";
import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Checkbox, Input, Link} from "@nextui-org/react";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineLogin } from "react-icons/ai";
import { useTranslations } from "next-intl";
export default function MobileUserLogin() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const t = useTranslations("Login");

  return (
    <>
      <div className="flex flex-col items-center text-gray-600 " onClick={onOpen}>
            <AiOutlineLogin className="h-6 w-6" />
            <span className="text-xs text-black">{t("title")}</span>
          </div>
      <Modal 
       size="full"
        isOpen={isOpen} 
        onOpenChange={onOpenChange}
        placement="top-center"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Log in</ModalHeader>
              <ModalBody>
                <Input
                  autoFocus
                  
                  label={t("Email.title")}
                  placeholder={t("Email.description")}
                  variant="bordered"
                />
                <Input
                  
                  label={t("Password.title")}
                  placeholder={t("Password.description")}
                  type="password"
                  variant="bordered"
                />
                <div className="flex py-2 px-1 justify-between">
                  <Checkbox
                    classNames={{
                      label: "text-small",
                    }}
                  >
                    {t("remember")}
                  </Checkbox>
                  {/* <Link color="primary" href="#" size="sm">
                    Forgot password?
                  </Link> */}
                </div>
                <Button className="bg-black text-white"  onPress={onClose}>
                {t("button")}
                </Button>
              </ModalBody>
              <ModalFooter>
                
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
