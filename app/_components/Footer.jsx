import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io";
import { FaRegPaperPlane } from "react-icons/fa6";
import { useTranslations } from 'next-intl';
import Link from 'next/link';
function Footer() {
    const t = useTranslations("Footer");
    const navLinksOne = [
        {
            "name": t('faq'),
            "link" : "/faq"
        },
        {
            "name": t('return'),
            "link" : "/return-policy"
        },
        {
            "name": t('contact'),
            "link" : "/contact-us"
        },
        {
            "name": t('delivery'),
            "link" : "/delivery-policy"
        },
    ];
    const navLinksTwo = [
        {
            "name": t('about'),
            "link" : "/about-us"
        },
        {
            "name": t('privacy'),
            "link" : "/privacy-policy"
        },
        {
            "name": t('terms'),
            "link" : "/terms-conditions"
        },
        {
            "name": t('career'),
            "link" : "/career"
        },
    ];
  return (
    <main>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-5 bg-[#F7F7F7] py-8 px-6 rounded-lg'>
        <div className="item-1 md:order-3 lg:order-1">
            <div>
                <div className='py-3 px-5 border border-gray-300 rounded-md text-center'>+008 01324536626</div>
            </div>
            <div className='py-3 px-5 bg-gray-200 rounded-md mt-4 flex justify-evenly'>
                <a href="https://www.facebook.com/shutkizbd?mibextid=ZbWKwL">
                <FaFacebookSquare className='text-xl hover:text-[--primaryColor] duration-200 cursor-pointer'/>
                </a>
                <a href="https://www.instagram.com/shutkizbd?igsh=czh2MHl5eGw2bmN3">
                <FaInstagramSquare className='text-xl hover:text-[--primaryColor] duration-200 cursor-pointer'/>
                </a>
                <a href="https://www.youtube.com/@shutkizbd">
                <IoLogoYoutube className='text-xl hover:text-[--primaryColor] duration-200 cursor-pointer'/>
                </a>
            </div>
        </div>
        <div className='combine flex justify-between py-4 md:hidden'>
        <div className="item-2">
            <ul className='text-[15px] leading-7'>
                {
                    navLinksOne.map((nav,index)=>(
                        <Link href={nav.link} key={index}>
                            <li><span className='hover:text-[--primaryColor] cursor-pointer duration-200'>{nav.name}</span></li>
                        </Link>
                    ))
                }
            </ul>
        </div>
        <div className="item-3">
            <ul className='text-[15px] leading-7'>
                {
                    navLinksTwo.map((nav,index)=>(
                        <Link href={nav.link} key={index}>
                            <li><span className='hover:text-[--primaryColor] cursor-pointer duration-200'>{nav.name}</span></li>
                        </Link>
                    ))
                }
            </ul>
        </div>
        </div>
        <div className="item-2 hidden md:block md:order-1 lg:order-2">
        <ul className='text-[15px] leading-7'>
                {
                    navLinksOne.map((nav,index)=>(
                        <Link href={nav.link} key={index}>
                            <li><span className='hover:text-[--primaryColor] cursor-pointer duration-200'>{nav.name}</span></li>
                        </Link>
                    ))
                }
            </ul>
        </div>
        <div className="item-3 hidden md:block md:order-2">
        <ul className='text-[15px] leading-7'>
                {
                    navLinksTwo.map((nav,index)=>(
                        <Link href={nav.link} key={index}>
                            <li><span className='hover:text-[--primaryColor] cursor-pointer duration-200'>{nav.name}</span></li>
                        </Link>
                    ))
                }
            </ul>
        </div>
        <div className="item-4 md:order-4 lg:order-4">
            <p className='font-semibold text-[15px] text-center sm:text-left'>{t("newsletter")}</p>
            <div className='pt-3'>
                <div className='relative w-full sm::w-[240px]'>
                <input type="text" className='border border-gray-300 text-sm px-3 w-full rounded-md h-[50px] ' placeholder={t("mail")} />
                <div className='absolute top-1 right-1 bg-[--primaryColor] p-2 w-[50px] rounded-md flex justify-center items-center h-[40px] cursor-pointer'>
                    <FaRegPaperPlane className='text-white texxt-xl'/>
                </div>
                </div>
            </div>
        </div>
      </div>
      <div class="bg-[#F7F7F7] text-gray-600 text-center pt-4 pb-6">
        <p class="text-sm">
            &copy; <span id="currentYear">2025</span> Shutkiz. All rights reserved.
        </p>
        <p class="text-sm">
            Developed by <span class="font-bold">Authentic Four Technology</span>
        </p>
    </div>
    </main>
  )
}

export default Footer
