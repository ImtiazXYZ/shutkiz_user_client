"use client"

import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import BannerImage from "../../public/seafood-challenge.jpg";
import CelebrationImage from "../../public/gif/celebration.gif";
import Image from "next/image";
import Link from "next/link";

export default function WelcomePopup() {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const hasPopupShown = Cookies.get("welcomePopupShown");
    if (!hasPopupShown) {
      setIsOpen(true);
    }else{
        setIsOpen(false);
    }
  }, []);

  const closeModal = () => {
    setIsOpen(false);
    Cookies.set("welcomePopupShown", "true", { expires: 0.25 });
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
        <div className="bg-white mx-4 w-full max-w-2xl rounded-xl shadow-2xl relative overflow-hidden">
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 w-[40px] h-[40px] flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-full text-gray-700 hover:text-black transition"
            onClick={closeModal}
          >
            ✖
          </button>
  
          {/* Modal Header */}
          <div className="bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300 px-4 py-2 sm:py-0 flex flex-col items-center">
            <div className="flex justify-center items-center">
            <Image
              src={CelebrationImage}
              width={100}
              height={50}
              className="hidden sm:block"
              alt="Celebration Icon"
            />
            <div>
            <h2 className="text-lg sm:text-xl font-bold text-white mt-2">
              Special Event: Seafood Chefs Challenge
            </h2>
            <p className="text-sm text-white mt-1">
              Dont miss out! Join us for an exciting culinary showdown.
            </p>
            </div>
            <Image
              src={CelebrationImage}
              width={100}
              height={50}
              className="hidden sm:block"
              alt="Celebration Icon"
            />
            </div>
            
          </div>
  
          {/* Modal Content */}
          <Link href="/events/seafood-chefs-challenge">
            <div className="block">
              <Image
                src={BannerImage}
                width={500}
                height={500}
                className="rounded-b-xl w-full"
                alt="Seafood Chefs Challenge Banner"
              />
            </div>
          </Link>
  
          {/* Call-to-Action Button */}
          <div className="absolute bottom-4 right-4">
            <Link href="/events/seafood-chefs-challenge">
              <button className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold px-5 py-3 rounded-full shadow-lg transition transform hover:scale-105">
                Check it Out!
              </button>
            </Link>
          </div>
        </div>
      </div>
      )}
    </>
  );
}
