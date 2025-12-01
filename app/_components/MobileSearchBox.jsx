"use client";
import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import { GoSearch } from "react-icons/go";
import {Input} from "@nextui-org/react";
import { useTranslations } from "next-intl";
import SearchBox from "./SearchBox";
export default function MobileSearchBox() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [size, setSize] = React.useState('full');
  const t = useTranslations("Navigation");
  const t2 = useTranslations("HomePage");
  return (
    <>
      <div className="text-[22px]" onClick={onOpen}>
        <div className="bg-gray-100 w-[35px] h-[35px] rounded-full flex justify-center items-center">
        <GoSearch />
        </div>
      </div>
      <Modal className="h-[200px] absolute top-0"
      size={size} 
        backdrop="opaque" 
        isOpen={isOpen} 
        onOpenChange={onOpenChange}
        motionProps={{
          variants: {
            enter: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.3,
                ease: "easeOut",
              },
            },
            exit: {
              y: -20,
              opacity: 0,
              transition: {
                duration: 0.2,
                ease: "easeIn",
              },
            },
          }
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1"></ModalHeader>
              <ModalBody>
                <div>
                {/* <input type="text" placeholder={t("search")} className="border border-orange-300 w-full h-[50px] rounded-lg px-3" /> */}
                <SearchBox/>
                </div>

                {/* <div>
                  <p className="text-gray-600 text-xs">{t("suggestion")}</p>
                  <div className="flex flex-wrap gap-3 py-4">
                    <div className="bg-gray-100 px-3 py-1 flex justify-center text-black rounded-md border border-gray-300">
                      <span className="text-sm">{t2("Categories.cat1")}</span>
                    </div>
                    <div className="bg-gray-100 px-3 py-1 flex justify-center text-black rounded-md border border-gray-300">
                      <span className="text-sm">{t2("Categories.cat2")}</span>
                    </div>
                    <div className="bg-gray-100 px-3 py-1 flex justify-center text-black rounded-md border border-gray-300">
                      <span className="text-sm">{t2("Categories.cat3")}</span>
                    </div>
                    <div className="bg-gray-100 px-3 py-1 flex justify-center text-black rounded-md border border-gray-300">
                      <span className="text-sm">{t2("Categories.cat4")}</span>
                    </div>
                    <div className="bg-gray-100 px-3 py-1 flex justify-center text-black rounded-md border border-gray-300">
                      <span className="text-sm">{t2("Categories.cat5")}</span>
                    </div>
                  </div>
                </div> */}
                
              </ModalBody>
              <ModalFooter>
                {/* <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button> */}
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
