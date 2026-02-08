import React from 'react'
import Image from 'next/image'
import ContactImage from "../../../public/contactusWebBanner.png"
import Link from 'next/link'
function page() {
  return (
    <main>
        <div>
        <h2 className='text-center text-[26px] font-semibold pb-10'>Contact Us</h2>
        <Image src={ContactImage} alt='img'/>
        </div>
        <div className='py-14'>
            <div>
            <div class="max-w-xl mx-auto p-6 bg-white shadow-md rounded-lg">
                <h2 class="text-2xl font-semibold mb-4">Contact Us</h2>
                <form action="#" method="POST">
                    <div class="mb-6">
                        <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
                        <input type="text" id="name" name="name" required class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" placeholder="Your Name"/>
                    </div>

                    <div class="mb-6">
                        <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                        <input type="email" id="email" name="email" required class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 f" placeholder="Your Email"/>
                    </div>

                    <div class="mb-6">
                        <label for="subject" class="block text-sm font-medium text-gray-700">Subject</label>
                        <input type="text" id="subject" name="subject" required class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 " placeholder="Subject"/>
                    </div>

                    <div class="mb-6">
                        <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
                        <textarea id="message" name="message" required rows="4" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 " placeholder="Your Message"></textarea>
                    </div>

                    <div className="flex gap-x-5 lg:gap-x-10 items-center">
                    <Link href="/">
                    <button class="w-[150px] bg-white text-black border border-black  py-2 rounded-md focus:outline-none focus:ring focus:ring-blue-300 text-sm sm:text-base">Back To Shopping</button>
                    </Link>
                    <button type="submit" class="w-[150px] bg-black text-white  py-2 rounded-md focus:outline-none focus:ring focus:ring-blue-300 text-sm sm:text-base">Send Message</button>
                    </div>
                </form>
            </div>
            </div>
        </div>
    </main>
  )
}

export default page
