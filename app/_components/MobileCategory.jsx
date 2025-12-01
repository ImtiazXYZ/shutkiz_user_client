"use client";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { BiCategory } from "react-icons/bi";
export default function MobileCategory({ categories }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const t = useTranslations("HomePage");
  const local = useLocale();
  const BASEURL = process.env.NEXT_PUBLIC_BASE_URL;

  return (
    <>
      <div
        onClick={onOpen}
        className="flex flex-col items-center text-gray-600 "
      >
        <BiCategory className="h-6 w-6" />
        <span className="text-xs text-black">Category</span>
      </div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {t("Categories.title")}
              </ModalHeader>
              <ModalBody>
                <div className="grid grid-cols-2 gap-3">
                  {categories &&
                    categories.map((category) => (
                      <Link
                        key={category?.id}
                        href={`/category/${category?.slug}`}
                        className="block group"
                      >
                        <div className="flex items-center justify-between bg-white border border-gray-200 rounded-xl p-3 shadow-sm hover:shadow-md transition-all duration-200 hover:border-gray-300">
                          <div>
                            <h3 className="text-gray-800 font-medium text-sm group-hover:text-green-600 transition-colors">
                              {local === "bn" && category?.bn_name
                                ? category.bn_name
                                : category?.name}
                            </h3>
                          </div>
                          {category?.thumbnail && (
                            <Image
                              src={`${BASEURL}/${
                                category?.thumbnail
                              }?v=${Date.now()}`}
                              width={100}
                              height={100}
                              alt={category?.name || "Category"}
                              className="w-10 h-10 object-contain"
                            />
                          )}
                        </div>
                      </Link>
                    ))}

                  {/* <Link href="/category/raw-fish">
                    <div className="border-2 border-gray-150 rounded-lg px-3 py-1">
                      <span className="text-black text-[15px]">
                        {t("Categories.cat2")}
                      </span>
                      <div className="flex justify-end">
                        <Image
                          src={Category2}
                          alt="Clearance Sale"
                          className="w-[50px] "
                        />
                      </div>
                    </div>
                  </Link>
                  <Link href="/category/balachao">
                    <div className="border-2 border-gray-150 rounded-lg px-3 py-1">
                      <span className="text-black text-[15px]">
                        {t("Categories.cat3")}
                      </span>
                      <div className="flex justify-end">
                        <Image
                          src={Category3}
                          alt="Clearance Sale"
                          className="w-[50px] "
                        />
                      </div>
                    </div>
                  </Link>
                  <Link href="/category/fish-chips">
                    <div className="border-2 border-gray-150 rounded-lg px-3 py-1">
                      <span className="text-black text-[15px]">
                        {t("Categories.cat4")}
                      </span>
                      <div className="flex justify-end">
                        <Image
                          src={Category4}
                          alt="Clearance Sale"
                          className="w-[50px] "
                        />
                      </div>
                    </div>
                  </Link>
                  <Link href="/category/recipe-book">
                    <div className="border-2 border-gray-150 rounded-lg px-3 py-1">
                      <span className="text-black text-[15px]">
                        {t("Categories.cat5")}
                      </span>
                      <div className="flex justify-end">
                        <Image
                          src={Category5}
                          alt="Clearance Sale"
                          className="w-[50px] "
                        />
                      </div>
                    </div>
                  </Link>
                  <Link href="/category/combo-package">
                    <div className="border-2 border-gray-150 rounded-lg px-3 py-1">
                      <span className="text-black text-[15px]">
                        {t("Categories.cat6")}
                      </span>
                      <div className="flex justify-end">
                        <Image
                          src={Category6}
                          alt="Clearance Sale"
                          className="w-[50px] "
                        />
                      </div>
                    </div>
                  </Link>
                  <Link href="/category/dry-fish-gift-box">
                    <div className="border-2 border-gray-150 rounded-lg px-3 py-1">
                      <span className="text-black text-[15px]">
                        {t("Categories.cat7")}
                      </span>
                      <div className="flex justify-end">
                        <Image
                          src={Category7}
                          alt="Clearance Sale"
                          className="w-[50px] "
                        />
                      </div>
                    </div>
                  </Link> */}
                </div>
              </ModalBody>
              <ModalFooter></ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
