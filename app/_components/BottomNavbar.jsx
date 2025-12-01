"use client";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
function BottomNavbar({ categories }) {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const startDragging = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const stopDragging = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 10; // Adjust scroll speed
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  // Add wheel scrolling support
  useEffect(() => {
    const handleWheel = (e) => {
      if (scrollRef.current) {
        e.preventDefault();
        scrollRef.current.scrollBy({
          left: e.deltaY < 0 ? -100 : 100, // Adjust scroll speed with deltaY
          behavior: "smooth",
        });
      }
    };

    const ref = scrollRef.current;
    if (ref) {
      ref.addEventListener("wheel", handleWheel);
    }
    return () => {
      if (ref) {
        ref.removeEventListener("wheel", handleWheel);
      }
    };
  }, []);

  const t = useTranslations("Navigation");
  const local = useLocale();
  const pathname = usePathname();
  const isActive = (path1, path2) => {
    return pathname === path1 || pathname === path2
      ? "text-white bg-black"
      : "md:hover:bg-gray-200";
  };
  return (
    <main
      ref={scrollRef}
      onMouseDown={startDragging}
      onMouseMove={handleMouseMove}
      onMouseLeave={stopDragging}
      onMouseUp={stopDragging}
      className="overflow-x-scroll hide-scrollbar pt-3 md:pt-0 cursor-pointer"
    >
      <div className="flex md:justify-center pt-2">
        <ul className="flex justify-center items-center gap-x-8 text-[15px] whitespace-nowrap">
          {/* <Link href="/">
            <li className={`bg-[#f6f7f9] select-none duration-100 cursor-pointer px-5 py-1 rounded-full ${isActive("/en","/bn")}`}>{t("home")}</li>
            </Link> */}

          {categories.map((category) => (
            <Link key={category.name} href={`/category/${category?.slug}`}>
              <li
                className={`bg-[#f6f7f9] select-none duration-100 cursor-pointer px-5 py-1 rounded-full ${isActive(
                  `/en/category/${category?.slug}`,
                  `/bn/category/${category?.slug}`
                )}`}
              >
                {local === "bn" && category?.bn_name
                  ? category.bn_name
                  : category?.name}
              </li>
            </Link>
          ))}

          {/* <Link href="/category/premium-dry-fish">
            <li
              className={`bg-[#f6f7f9] select-none duration-100 cursor-pointer px-5 py-1 rounded-full ${isActive(
                "/en/category/premium-dry-fish",
                "/bn/category/premium-dry-fish"
              )}`}
            >
              {t("premiumShutki")}
            </li>
          </Link>

          <Link href="/category/raw-fish">
            <li
              className={`bg-[#f6f7f9] select-none duration-100 cursor-pointer px-5 py-1 rounded-full ${isActive(
                "/en/category/raw-fish",
                "/bn/category/raw-fish"
              )}`}
            >
              {t("rawFish")}
            </li>
          </Link>

          <Link href="/category/balachao">
            <li
              className={`bg-[#f6f7f9] select-none duration-100 cursor-pointer px-5 py-1 rounded-full ${isActive(
                "/en/category/balachao",
                "/bn/category/balachao"
              )}`}
            >
              {t("balachao")}
            </li>
          </Link> */}

          <Link href="/recipe">
            <li
              className={`bg-[#f6f7f9] select-none duration-100 cursor-pointer px-5 py-1 rounded-full ${
                pathname.startsWith("/en/recipe") ||
                pathname.startsWith("/bn/recipe")
                  ? "text-white bg-black "
                  : "md:hover:bg-gray-200"
              }`}
            >
              {t("recipe")}
            </li>
          </Link>

          {/* <Link href="">
            <li className={`bg-[#f6f7f9] select-none duration-100 cursor-pointer px-5 py-1 rounded-full ${isActive("")}`}>{t("delarship")}</li>
            </Link> */}

          {/* <div className='group'>
            <Link href="">
            <li className={`bg-[#f6f7f9] select-none duration-100 cursor-pointer px-5 py-1 rounded-full ${isActive("")}`}>{t("events.parent")}</li>
            </Link>
            <div className='absolute bottom-0 left-0 w-full px-24 top-full  hidden group-hover:block duration-300 '>
              <div className='bg-white w-full h-[250px] -mt-[14px] shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-5 rounded-xl'>
                <ul className='flex flex-wrap gap-x-14 gap-y-5 items-start'>
                <li className=''>
                    <div className='flex gap-x-2 items-center'>
                    <div className='w-[35px] h-[35px]  rounded-full bg-white border-[1.5px] border-gray-500'>
                    <Image src={EventIcon} alt='Project 1' className='p-1.5'/>
                    </div>
                    <span className='text-[15px] font-semibold hover:text-[--primaryColor] hover:underline duration-100'>{t("events.childParent.parent")}</span>
                    </div>
                    <ul className='pl-10 pt-2 flex flex-col gap-y-1'>
                      <li><span className='text-[15px] text-black hover:text-[--primaryColor] hover:underline duration-100'>{t("events.childParent.child1")}</span></li>
                      <li><span className='text-[15px] text-black hover:text-[--primaryColor] hover:underline duration-100'>{t("events.childParent.child2")}</span></li>
                    </ul>
                </li>
                <Link href='/events/seafood-chefs-challenge' className='flex gap-x-2 items-center'>
                    <div className='w-[35px] h-[35px]  rounded-full bg-white border-[1.5px] border-gray-500'>
                    <Image src={EventIcon} alt='Project 1' className='p-1.5'/>
                    </div>
                    <span className='text-[15px] font-semibold hover:text-[--primaryColor] hover:underline duration-100'>{t("events.child1")}</span>
                </Link>
                <li className='flex gap-x-2 items-center'>
                    <div className='w-[35px] h-[35px]  rounded-full bg-white border-[1.5px] border-gray-500'>
                    <Image src={EventIcon} alt='Project 1' className='p-1.5'/>
                    </div>
                    <span className='text-[15px] font-semibold hover:text-[--primaryColor] hover:underline duration-100'>{t("events.child3")}</span>
                </li>
                <li className='flex gap-x-2 items-center'>
                    <div className='w-[35px] h-[35px]  rounded-full bg-white border-[1.5px] border-gray-500'>
                    <Image src={EventIcon} alt='Project 1' className='p-1.5'/>
                    </div>
                    <span className='text-[15px] font-semibold hover:text-[--primaryColor] hover:underline duration-100'>{t("events.child3")}</span>
                </li>
                </ul>
              </div>
            </div>
            </div> */}

          {/* <div className='group'>
            <Link href="/investment">
            <li className={`bg-[#f6f7f9] select-none duration-100 cursor-pointer px-5 py-1 rounded-full ${pathname=="/en/investment" || pathname=="/bn/investment" || pathname=="/en/investment/project-1" || pathname=="/bn/investment/project-1" || pathname=="/en/investment/project-2" || pathname=="/bn/investment/project-2" ? "text-white bg-black" : "md:hover:bg-gray-200"}`}>{t("investment.parent")}</li>
            </Link>
            <div className='absolute bottom-0 left-0 w-full px-24 top-full  hidden group-hover:block duration-300 '>
              <div className='bg-white w-full h-[250px] -mt-[14px] shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-5 rounded-xl'>
                <ul className='flex gap-x-14 gap-y-5'>
                <Link href="/investment/project-1">
                <li className='flex gap-x-2 items-center'>
                    <div className='w-[35px] h-[35px]  rounded-full bg-white border-[1.5px] border-gray-500'>
                    <Image src={ProjectIcon} alt='Project 1' className='p-1'/>
                    </div>
                    <span className='text-[15px] hover:text-[--primaryColor] hover:underline duration-100 font-semibold'>{t("investment.child1")}</span>
                </li>
                </Link>
                <Link href="/investment/project-2">
                <li className='flex gap-x-2 items-center'>
                    <div className='w-[35px] h-[35px]  rounded-full bg-white border-[1.5px] border-gray-500'>
                    <Image src={ProjectIcon} alt='Project 2' className='p-1'/>
                    </div>
                    <span className='text-[15px] hover:text-[--primaryColor] hover:underline duration-100 font-semibold'>{t("investment.child2")}</span>
                </li>
                </Link>
                </ul>
              </div>
            </div>
            </div> */}

          <Link href="/blog">
            <li
              className={`bg-[#f6f7f9] select-none duration-100 cursor-pointer px-5 py-1 rounded-full ${
                pathname.startsWith("/en/blog") ||
                pathname.startsWith("/bn/blog")
                  ? "text-white bg-black "
                  : "md:hover:bg-gray-200"
              }`}
            >
              {t("blog")}
            </li>
          </Link>

          <Link href="/events/our-activities">
            <li
              className={`bg-[#f6f7f9] select-none duration-100 cursor-pointer px-5 py-1 rounded-full ${
                pathname.startsWith("/en/events/our-activities") ||
                pathname.startsWith("/bn/events/our-activities")
                  ? "text-white bg-black "
                  : "md:hover:bg-gray-200"
              }`}
            >
              {t("events.child1")}
            </li>
          </Link>

          {/* <li className='bg-[#f6f7f9] select-none duration-100 cursor-pointer px-5 py-1 rounded-full'>{t("about")}</li>
            <li className='bg-[#f6f7f9] select-none duration-100 cursor-pointer px-5 py-1 rounded-full'>{t("contact")}</li> */}
        </ul>
      </div>
    </main>
  );
}

export default BottomNavbar;
