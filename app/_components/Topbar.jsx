"use client"
import React, { useEffect, useState } from 'react';
import { IoMdClose } from "react-icons/io";
import getTopbarMessage from "../_lib/setting/getTopbarMessage"
function Topbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [isTopbar,setIsTopbar] = useState(false);
  const [topbarMessage, setTopbarMessage] = useState("");

  useEffect(() => {
    fetchTopbar();
  }, []);

  const fetchTopbar = () => {
    getTopbarMessage()
      .then((result) => {
        if (result && result.is_topbar === 1) {
          setIsTopbar(true);
          setTopbarMessage(result.topbar_message);
        } else {
          setIsTopbar(false);
        }
      })
      .catch((error) => {
        console.error("Error fetching topbar message:", error);
      });
  };
  const hideTopbar = () => {
    setIsVisible(false);
  };

  return (
    isTopbar && isVisible && (
      <main className="bg-[#00B0EA] w-full flex items-center justify-between px-2 md:px-4 transition-opacity duration-500 ease-in-out ">
        <div className="flex items-center justify-center w-full">
          <p className="text-white text-center py-1 text-sm md:text-base">
            {topbarMessage}
          </p>
        </div>
        <IoMdClose className="text-white font-bold text-xl ml-2 cursor-pointer"
          onClick={hideTopbar}/>
      </main>
    )
  );
}

export default Topbar;
