import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { GoHome } from "react-icons/go";
import { getNavbarCategories } from "../_lib/home/product";
import Cart from "./Cart";
import MobileCategory from "./MobileCategory";
import UserLogin from "./UserLogin";

async function MobileNavbar() {
  const categories = await getNavbarCategories();
  return (
    <main className="">
      <div className="fixed bottom-0 h-[70px] left-0 right-0 bg-white shadow-lg border-t border-gray-200 z-50">
        <div className="flex justify-around items-center h-full">
          <Link href="/">
            <div className="flex flex-col items-center text-[--primaryColor] ">
              <GoHome className="h-6 w-6" />
              <span className="text-xs text-[--primaryColor]">Home</span>
            </div>
          </Link>
          <div>
            <MobileCategory categories={categories} />
          </div>
          <div>
            <div className="relative">
              <div className="flex flex-col items-center text-white  bg-black w-[50px] h-[50px] rounded-full justify-center ">
                {/* <RiShoppingCartLine className="h-6 w-6" /> */}
                <Cart />
              </div>
              {/* <div className='absolute top-0 right-0 bg-red-500 rounded-full h-[22px] w-[22px] text-white  flex items-center justify-center text-xs'>0</div> */}
            </div>
          </div>
          <div>
            <a
              href="https://wa.me/8801324536626"
              className="flex flex-col items-center text-gray-600 "
            >
              <FaWhatsapp className="h-6 w-6" />
              <span className="text-xs text-black">Whatsapp</span>
            </a>
          </div>
          <div>
            <UserLogin />
          </div>
        </div>
      </div>
    </main>
  );
}

export default MobileNavbar;
