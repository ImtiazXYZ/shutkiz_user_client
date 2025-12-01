import React from 'react'
import Head from 'next/head';
import Image from 'next/image';
import PlaceHolderImage from "../../../../public/placeholder.jpg";
import BannerImage from "../../../../public/seafood-challenge.jpg";
import Judge1 from "../../../../public/events/Shaheen Afroz.png";
import Judge2 from "../../../../public/events/Hasina Anser.png";
import Judge3 from "../../../../public/events/Rubena Ruby.png";
import Judge4 from "../../../../public/events/Linus Rozario.png";
import Judge5 from "../../../../public/events/Savina Sirajee Any.png";
import Judge6 from "../../../../public/events/Jobaida Ashraf.png";
import Judge7 from "../../../../public/events/Rowshan Ara Begum.png";
import Judge8 from "../../../../public/events/Kawsary Sultana.png";
import Judge9 from "../../../../public/events/Erfan Hossain.png";
import Sponsor1 from "../../../../public/events/monno.jpeg";
import Sponsor2 from "../../../../public/events/rfl.jpeg";
import Sponsor3 from "../../../../public/events/perfect.jpeg";
import Sponsor4 from "../../../../public/events/fresh.jpeg";
import Sponsor5 from "../../../../public/events/confident.jpeg";
function page() {
  return (
    <>
      <Head>
        <title>Seafood Chefs Challenge</title>
        <meta name="description" content="Super Fresh Fortified Soyabean Oil Seafood Chefs Challenge" />
      </Head>
      <main className="">
          <div className='px-6 md:px-10 lg:px-14'>
            <Image
            src={BannerImage}
            width={500}
            height={500}
            className='w-full rounded'
            />
          </div>
        <section className="px-6 py-2 md:px-10 lg:px-14 lg:py-14">
          <h1 className="text-3xl font-bold text-center mb-6">Super Fresh Fortified Soyabean Oil Seafood Chefs Challenge</h1>
          <p className="mb-4">
          হূনি রাধনত গুণী হন সিজন-১ এবং সিজন-২ সফলভাবে সমাপ্ত করার পর এবার আমরা আরো বড় পরিসরে আরো জাকজমকভাবে আয়োজন করতে যাচ্ছি <span className='font-bold'>“সুপার ফ্রেশ ফর্টিফাইড সয়াবিন অয়েল সী ফুড সেফস চ্যালেঞ্জ”</span>। এবারের প্রতিযোগিতা শুধুমাত্র শুঁটকি রান্নার মধ্যে সীমাবদ্ধ না রেখে আমরা পুরো সী ফুড ইন্ডাস্ট্রি নিয় করতে যাচ্ছি।
          </p>
          <p className="mb-4">
          গবেষণা বলে যে আগামী দিনের খাদ্য এবং পুষ্টির প্রধান উৎস হতে যাচ্ছে সমুদ্র। বিশাল সমুদ্রের অফুরন্ত খাদ্য ভান্ডার আগামীদিনে আমাদের খাদ্য চাহিদার বড় একটা অংশ পুরণ করবে। প্রকৃতির আশীর্বাদে আমাদের রয়েছে বিশাল এক সমুদ্র। এই সমুদ্রে রয়েছে হাজার রকমের পুষ্টিকর খাদ্য। সচেতনতা এবং জ্ঞানের অভাবে আমরা এই খাদ্য ভান্ডারকে ভালোভাবে কাজে লাগাতে পারছিনা। “সী ফুড সেফস চ্যালেঞ্জ” এর মাধ্যমে পুরো দেশে সীফুড সম্পর্কে সচেতনতা বৃদ্ধি করতে পারবো বলে আশা করি।
          </p>
          <h2 className="text-2xl font-bold mb-4 pt-10">উদ্দেশ্য</h2>
          <ul className="list-disc pl-6 mb-4">
            <li>সীফুডের পুষ্টিগুণ সম্পর্কে সবাইকে সচেতন করে তোলা।</li>
            <li>হোম শেফ বা গৃহিনীদের সীফুড রান্নায় আরো পারদর্শী করে তোলা।</li>
            <li>সীফুডের নিত্য নতুন রেসিপি উদ্ভাবন ও সংগ্রহ করা।</li>
          </ul>
          <p className='mb-4'>
          সী ফুড রান্নায় যদি আপনার পারদর্শিতা থাকে এবং নিজের কাজের স্বীকৃতি পেতে চান তাহলে নিচের গুগল ফর্মটি ভালোভাবে পড়ে রেজিস্ট্রেশন করে নিন। আপনার কোন বন্ধু, আত্মীয় বা পরিচিত জন যদি থেকে থাকে তাহলে তাদেরকেও খবর দিন।
          </p>



          <h2 className="text-2xl font-bold mb-4 pt-10">পুরষ্কার</h2>
          <ul className="list-disc pl-6 mb-4 flex flex-col gap-y-4">
            <li>
              <span className="font-bold">চ্যাম্পিয়ন:</span> ১ লক্ষ টাকার প্রাইজ মানি + পারফেক্ট ইলেকট্রনিক্সের সৌজন্যে ৩২” স্মার্ট টিভি + মুন্নু সিরামিকের সৌজন্যে ৩৬ পিছের ডিনার সেট + ট্রফি + সার্টিফিকেট + আরো অনেক উপহার।
            </li>
            <li>
              <span className="font-bold">১ম রানার আপ:</span> পারফেক্ট ইলেকট্রনিক্সের সৌজন্যে ২৪” স্মার্ট টিভি + মুন্নু সিরামিকের সৌজন্যে ৩২ পিছের ডিনার সেট + ক্রেস্ট + সার্টিফিকেট + আরো অনেক উপহার।
            </li>
            <li>
              <span className="font-bold">২য় রানার আপ:</span> পারফেক্ট ইলেকট্রনিক্সের সৌজন্যে ২৪” এলইডি টিভি + মুন্নু সিরামিকের সৌজন্যে ১৫ পিছের টি সেট + ক্রেস্ট + সার্টিফিকেট + আরো অনেক উপহার।
            </li>
            <li>
              <span className="font-bold">৪র্থ - ১০ম:</span> আকর্ষণীয় পুরষ্কার + সার্টিফিকেট।
            </li>
            <li>
              <span className="font-bold">সেমি ফাইনালিষ্ট - ৪০ জনঃ</span> স্পেশাল গিফট বক্স + সার্টিফিকেট
            </li>
          </ul>
          <p className='mb-4'>
          এছাড়াও  “সুপার ফ্রেশ ফর্টিফাইড সয়াবিন অয়েল সী ফুড সেফস চ্যালেঞ্জ” প্রতিযোগিতায় আরো কিছু ক্যাটাগরিতে পুরষ্কার রাখা হয়েছে। যেমনঃ
          </p>
          <ul className="list-disc pl-6 mb-4 flex flex-col gap-y-4">
            <li>ভিউয়ার্স চয়েস এওয়ার্ড - পারফেক্ট ইলেকট্রিনিক্সের সৌজন্যে নগদ ১০ হাজার টাকা।</li>
            <li>বেস্ট প্রেজেন্টেশন উইনার -</li>
            <li>ইয়াং স্টার শেফ এওয়ার্ড - </li>
            <li>বেস্ট হেলদি রেসিপি উইনার -</li>
            <li>বেস্ট ইনোভেটিভ রেসিপি উইনার -</li>
            <li>বেস্ট ট্রেডিশনাল ডিশ উইনার -</li>
          </ul>





          <section class="mb-4">
            <h2 class="text-2xl font-bold mb-4 pt-10">প্রতিযোগিতার সংক্ষিপ্ত নিয়মাবলী</h2>
            <p class="mb-4">“সুপার ফ্রেশ ফর্টিফাইড সয়াবিন অয়েল সী ফুড সেফস চ্যালেঞ্জ” প্রতিযোগিতা মোট ৩ টি ধাপে অনুষ্ঠিত হবে।</p>
            <ol class="list-decimal pl-6 mb-4 space-y-4">
                <li>
                <span class="font-bold">১ম ধাপ - অনলাইন পর্বঃ</span>
                <ul class="list-disc pl-6 space-y-2">
                    <li>রেজিস্টার্ড প্রতিযোগীরা সবাই অনলাইনে নিজেদের রেসিপি প্রদান করবেন। বিজ্ঞ বিচারকগণ সেই রেসিপি যাচাই বাছাই করে নম্বর প্রদান করবেন। সর্বোচ্চ নম্বর প্রাপ্ত ২০ জন চট্টগ্রাম সেমিফাইনালের জন্য এবং ২০ জন ঢাকা সেমিফাইনালের জন্য মনোনীত হবেন।</li>
                    <li>বিচারকগণ মোট চারটি বিষয়ের উপর নম্বর প্রদান করবেন। যেমনঃ
                    <ul class="list-disc pl-6 space-y-2">
                        <li>ইউনিকনেস (নতুনত্ব)</li>
                        <li>প্রেজেন্টেশন</li>
                        <li>বর্ণনা</li>
                        <li>দর্শক এনগেজমেন্ট বা রিচ</li>
                    </ul>
                    </li>
                    <li>প্রতিযোগীদের মোট দুটি ক্যাটাগরিতে রেসিপি জমা দিতে হবে।
                    <ul class="list-disc pl-6 space-y-2">
                        <li>তাজা মাছ বা হালাল প্রাণী</li>
                        <li>শুকনো মাছ বা শুঁটকি</li>
                    </ul>
                    </li>
                    <li>এক বিভাগ থেকে সর্বনিম্ন ১ টি এবং সর্বোচ্চ ২ টি রেসিপি জমা দেয়া যাবে। এর কম বা বেশী হলে সেই প্রতিযোগীকে বাতিল বলে গণ্য করা হবে।</li>
                    <li>প্রতি জোন থেকে সর্বোচ্চ নম্বর প্রাপ্ত ২০ রেসিপিকে সেমিফাইনালের জন্য বিবেচিত করা হবে।</li>
                    <li>একজনের একাধিক রেসিপি সেরা ২০ এর মধ্যে আসলে সর্বোচ্চ নম্বর প্রাপ্ত রেসিপিটিই সেমি ফাইনালের জন্য বিবেচিত হবে।</li>
                </ul>
                </li>
                <li>
                <span class="font-bold">সেমি ফাইনালঃ</span>
                <ul class="list-disc pl-6 space-y-2">
                    <li>ঢাকা জোন এবং চট্টগ্রাম জোন থেকে সেরা ২০ জন করে মোট ৪০ জনকে নিয়ে ২য় পর্ব শুরু হবে।</li>
                    <li>২য় পর্ব অফলাইন কোন ভেন্যুতে অনুষ্ঠিত হবে। ঢাকা ও চট্টগ্রাম উভয় স্থানে আলাদা আলাদাভাবে ২য় পর্ব অনুষ্ঠিত হবে।</li>
                    <li>২য় পর্বে প্রতিযোগীদের নিজের সীফুড রেসিপি বাসা থেকে রান্না করে নিয়ে আসতে হবে। ১ম পর্বে নির্বাচিত সেরা রেসিপি এবং সাথে অন্য আরেকটি রেসিপি রান্না করে নিয়ে আসবেন।</li>
                    <li>উপস্থিত বিচারকেরা সরাসরি রান্না টেস্ট করে রেসিপি মূল্যায়ন করবেন।</li>
                    <li>সম্মানিত বিচারকগণের রায়ে ঢাকা ও চট্টগ্রাম জোন থেকে ৫ জন করে মোট ১০ জন ফাইনালের জন্য নির্বাচিত হবেন।</li>
                </ul>
                </li>
                <li>
                <span class="font-bold">ফাইনালঃ</span>
                <ul class="list-disc pl-6 space-y-2">
                    <li>ফাইনালে সরাসরি রান্না করতে হবে বিচারকদের সামনে।</li>
                    <li>ফাইনাল অনুষ্ঠিত হবে চট্টগ্রামে।</li>
                    <li>ফাইনালে মোট দুটি রাউন্ড অনুষ্ঠিত হবে।</li>
                    <li>প্রতি রাউন্ড শেষে বিজ্ঞ বিচারকগণ প্রত্যেক প্রতিযোগীকে নাম্বার প্রদান করবেন।</li>
                    <li>দুই পর্ব মিলিয়ে সর্বোচ্চ নম্বর প্রাপ্ত প্রতিযোগিকে চ্যাম্পিয়ন ঘোষণা করা হবে।</li>
                    <li>এভাবে ক্রমান্বয়ে ১ম রানার আপ এবং ২য় রানার আপও নির্বাচিত হবেন।</li>
                </ul>
                </li>
            </ol>
          </section>


          <section>
            <h2 class="text-2xl font-bold mb-10 text-center pt-20">আয়োজক কমিটিঃ</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div class="text-center">
                <Image src={PlaceHolderImage} width={500} height={500} alt="তৌহিদুল ইসলাম" class="rounded-full mx-auto mb-4 w-[130px]"/>
                <p class="font-semibold text-lg">তৌহিদুল ইসলাম</p>
                </div>
                <div class="text-center">
                <Image src={PlaceHolderImage} width={500} height={500} alt="সায়মা সুলতানা" class="rounded-full mx-auto mb-4 w-[130px]"/>
                <p class="font-semibold text-lg">সায়মা সুলতানা</p>
                </div>
                <div class="text-center">
                <Image src={PlaceHolderImage} width={500} height={500} alt="নূর আকতার জাহান" class="rounded-full mx-auto mb-4 w-[130px]"/>
                <p class="font-semibold text-lg">নূর আকতার জাহান</p>
                </div>
            </div>
        </section>
          <section>
            <h2 class="text-2xl font-bold mb-10 text-center pt-24">সহ আয়োজকঃ</h2>
            <div class="flex gap-6 justify-center">
                <div class="text-center">
                <Image src={PlaceHolderImage} width={500} height={500} alt="তৌহিদুল ইসলাম" class="rounded-full mx-auto mb-4 w-[150px]"/>
                <p class="font-semibold text-lg">Women Culinary Association of Bangladesh (WCAB)</p>
                </div>
            </div>
        </section>


        <section>
            <h2 class="text-2xl font-bold mb-10 text-center pt-24">বিচারক মন্ডলীঃ </h2>
            <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
                <div class="text-center">
                <Image src={Judge9} width={500} height={500} alt="তৌহিদুল ইসলাম" class="rounded-full mx-auto mb-4 w-[120px] h-[120px] object-cover"/>
                <p class="font-semibold text-lg">ইরফান হোসাইন</p>
                </div>
                <div class="text-center">
                <Image src={Judge1} width={500} height={500} alt="তৌহিদুল ইসলাম" class="rounded-full mx-auto mb-4 w-[120px] h-[120px] object-cover"/>
                <p class="font-semibold text-lg">শাহীন আফরোজ</p>
                </div>
                <div class="text-center">
                <Image src={Judge2} width={500} height={500} alt="সায়মা সুলতানা" class="rounded-full mx-auto mb-4 w-[120px] h-[120px] object-cover"/>
                <p class="font-semibold text-lg">হাসিনা আনসার</p>
                </div>
                <div class="text-center">
                <Image src={Judge3} width={500} height={500} alt="নূর আকতার জাহান" class="rounded-full mx-auto mb-4 w-[120px] h-[120px] object-cover"/>
                <p class="font-semibold text-lg">রুবিনা রুবি</p>
                </div>
                <div class="text-center">
                <Image src={Judge4} width={500} height={500} alt="নূর আকতার জাহান" class="rounded-full mx-auto mb-4 w-[120px] h-[120px] object-cover"/>
                <p class="font-semibold text-lg">লিনাস রোজারিও</p>
                </div>
                <div class="text-center">
                <Image src={Judge5} width={500} height={500} alt="তৌহিদুল ইসলাম" class="rounded-full mx-auto mb-4 w-[120px] h-[120px] object-cover"/>
                <p class="font-semibold text-lg">সাভিনা সিরাজি এনি</p>
                </div>
                <div class="text-center">
                <Image src={Judge6} width={500} height={500} alt="সায়মা সুলতানা" class="rounded-full mx-auto mb-4 w-[120px] h-[120px] object-cover"/>
                <p class="font-semibold text-lg">জোবাইদা আশরাফ</p>
                </div>
                <div class="text-center">
                <Image src={Judge7} width={500} height={500} alt="নূর আকতার জাহান" class="rounded-full mx-auto mb-4 w-[120px] h-[120px] object-cover"/>
                <p class="font-semibold text-lg">রওশন আরা বেগম</p>
                </div>
                <div class="text-center">
                <Image src={Judge8} width={500} height={500} alt="নূর আকতার জাহান" class="rounded-full mx-auto mb-4 w-[120px] h-[120px] object-cover"/>
                <p class="font-semibold text-lg">কাউসারি সুলতানা </p>
                </div>
            </div>
        </section>


        <section>
            <h2 class="text-2xl font-bold mb-10 text-center pt-24">মেন্টরসঃ</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                <div class="text-center">
                <Image src={PlaceHolderImage} width={500} height={500} alt="তৌহিদুল ইসলাম" class="rounded-full mx-auto mb-4 w-[100px]"/>
                <p class="font-semibold text-lg">ফারজানা শরীফ</p>
                </div>
                <div class="text-center">
                <Image src={PlaceHolderImage} width={500} height={500} alt="সায়মা সুলতানা" class="rounded-full mx-auto mb-4 w-[100px]"/>
                <p class="font-semibold text-lg">কোহিনূর জুলিয়া</p>
                </div>
                <div class="text-center">
                <Image src={PlaceHolderImage} width={500} height={500} alt="নূর আকতার জাহান" class="rounded-full mx-auto mb-4 w-[100px]"/>
                <p class="font-semibold text-lg">ফারাহ আকতার</p>
                </div>
                <div class="text-center">
                <Image src={PlaceHolderImage} width={500} height={500} alt="নূর আকতার জাহান" class="rounded-full mx-auto mb-4 w-[100px]"/>
                <p class="font-semibold text-lg">সাথী সুজন</p>
                </div>
                <div class="text-center">
                <Image src={PlaceHolderImage} width={500} height={500} alt="নূর আকতার জাহান" class="rounded-full mx-auto mb-4 w-[100px]"/>
                <p class="font-semibold text-lg">ফাহমিদা চৌধুরী</p>
                </div>
            </div>
        </section>


       
        <section className="pt-24">
      <h2 className="text-3xl font-bold text-center mb-8">স্পন্সরঃ</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Title Sponsor */}
        <div className="bg-gray-50 rounded-lg shadow-lg p-6 flex flex-col items-center cursor-pointer">
          <Image src={Sponsor4} width={130} height={130} alt="Super Fresh Logo" className="mb-4" />
          <p className="text-xl font-bold text-center">Super Fresh Fortified Soyabean Oil</p>
          <p className="text-sm text-gray-500 mt-2">(Title Sponsor)</p>
        </div>
        {/* Powered By */}
        <div className="bg-gray-50 rounded-lg shadow-lg p-6 flex flex-col items-center cursor-pointer">
          <Image src={PlaceHolderImage} width={130} height={130} alt="Powered By Logo" className="mb-4" />
          <p className="text-xl font-bold text-center">[Add Sponsor Name]</p>
          <p className="text-sm text-gray-500 mt-2">(Powered By)</p>
        </div>
        {/* Platinum Sponsor */}
        <div className="bg-gray-50 rounded-lg shadow-lg p-6 flex flex-col items-center cursor-pointer">
          <Image src={Sponsor5} width={130} height={130} alt="Confidence Salat Logo" className="mb-4" />
          <p className="text-xl font-bold text-center">Confidence Salat</p>
          <p className="text-sm text-gray-500 mt-2">(Platinum Sponsor)</p>
        </div>
        {/* Gold Sponsor */}
        <div className="bg-gray-50 rounded-lg shadow-lg p-6 flex flex-col items-center cursor-pointer">
          <Image src={PlaceHolderImage} width={130} height={130} alt="Gold Sponsor Logo" className="mb-4" />
          <p className="text-xl font-bold text-center">[Sponsor Name]</p>
          <p className="text-sm text-gray-500 mt-2">(Gold Sponsor)</p>
        </div>
        {/* Prize Sponsor */}
        <div className="bg-gray-50 rounded-lg shadow-lg p-6 flex flex-col items-center cursor-pointer">
          <Image src={Sponsor1} width={130} height={130} alt="Perfect Electronics Logo" className="mb-4" />
          <p className="text-xl font-bold text-center">Perfect Electronics, Monno Ceramic</p>
          <p className="text-sm text-gray-500 mt-2">(Prize Sponsor)</p>
        </div>
        {/* Gift Sponsor */}
        <div className="bg-gray-50 rounded-lg shadow-lg p-6 flex flex-col items-center cursor-pointer">
          <Image src={Sponsor3} width={130} height={130} alt="Gift Sponsor Logo" className="mb-4" />
          <p className="text-xl font-bold text-center">Perfect Electronics, Monno Ceramic, Rani Food Ind. Ltd.</p>
          <p className="text-sm text-gray-500 mt-2">(Gift Sponsor)</p>
        </div>
        {/* Official Product Sponsor */}
        <div className="bg-gray-50 rounded-lg shadow-lg p-6 flex flex-col items-center cursor-pointer">
          <Image src={Sponsor2} width={130} height={130} alt="RFL Gas Stoves Logo" className="mb-4" />
          <p className="text-xl font-bold text-center">RFL Gas Stoves</p>
          <p className="text-sm text-gray-500 mt-2">(Official Product Sponsor)</p>
        </div>
        {/* Photography & Videography Sponsor */}
        <div className="bg-gray-50 rounded-lg shadow-lg p-6 flex flex-col items-center cursor-pointer">
          <Image src={PlaceHolderImage} width={130} height={130} alt="Photography Sponsor Logo" className="mb-4" />
          <p className="text-xl font-bold text-center">[Sponsor Name]</p>
          <p className="text-sm text-gray-500 mt-2">(Photography & Videography Sponsor)</p>
        </div>
        {/* Category Sponsor */}
        <div className="bg-gray-50 rounded-lg shadow-lg p-6 flex flex-col items-center cursor-pointer">
          <Image src={PlaceHolderImage} width={130} height={130} alt="Category Sponsor Logo" className="mb-4" />
          <p className="text-xl font-bold text-center">[Sponsor Name]</p>
          <p className="text-sm text-gray-500 mt-2">(Category Sponsor)</p>
        </div>
      </div>
    </section>


    <section class="pt-24">
    <h2 class="text-2xl font-semibold text-center mb-4">Register Now via Google Form</h2>
    <p class="text-center mb-6 text-gray-600 text-cente">Please fill out the form below to complete your registration.</p>

    <ul class="mb-6">
        <li class="mb-2 text-gray-700 text-center">Registration Fee: <span class="font-semibold">450/-</span></li>
        {/* <li class="mb-4 text-gray-700 text-center">Link: <a href="https://forms.gle/StJyC4ZD4CYdDCoE9" target="_blank" class="text-blue-500 hover:underline">https://forms.gle/StJyC4ZD4CYdDCoE9</a></li> */}
    </ul>

    <div class="text-center">
        <a href="https://forms.gle/StJyC4ZD4CYdDCoE9" target="_blank" class="bg-[#19A8E1] hover:bg-[#1ebfff] text-white px-6 py-3 rounded-lg text-lg font-medium">Register Now</a>
    </div>
</section>



        </section>
      </main>
    </>
  )
}

export default page
