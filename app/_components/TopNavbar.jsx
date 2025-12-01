import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/Shutkiz.png";
import SearchBox from "../_components/SearchBox";
import Cart from "./Cart";
import LangSelect from "./LangSelect";
import MobileSearchBox from "./MobileSearchBox";
import UserLogin from "./UserLogin";
function TopNavbar() {
  const t = useTranslations("Navigation");
  return (
    <main>
      <div className="flex items-center justify-between">
        {/* <div className="logo w-[110px] h-[60px]">
          <Link href="/" className="flex flex-col items-center ml-6 sm:ml-0">
            <Image src={Logo} alt="Logo" className="-ml-2" />
            <span className="text-xs whitespace-nowrap text-center text-gray-700">
              The premium taste of dry fish
            </span>
          </Link>
        </div> */}
        <div className="w-[140px] h-[60px] flex items-center">
          <Link href="/" className="block">
            <Image
              src={Logo}
              alt="Logo"
              className="object-contain w-full h-auto"
              priority
            />
          </Link>
        </div>

        <div className="search-box hidden md:block">
          <SearchBox />
        </div>

        <div className="search-icon  flex md:hidden">
          <MobileSearchBox />
          <LangSelect />
        </div>

        <div className="hidden md:block">
          <div className="user-cart-icons flex items-center gap-x-5">
            <UserLogin />
            <div className="cart relative">
              {/* <RiShoppingCartLine className='text-[24px]'/> */}
              <Cart />
              {/* <div className='absolute -top-3 -right-3 bg-red-500 rounded-full h-[22px] w-[22px] text-white  flex items-center justify-center text-sm'>0</div> */}
            </div>

            <div>
              <LangSelect />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default TopNavbar;
