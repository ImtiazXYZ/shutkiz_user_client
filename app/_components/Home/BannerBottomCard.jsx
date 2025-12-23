import React from 'react'
import Card1 from "../../../public/card-1.jpeg";
import Card2 from "../../../public/card-2.jpeg";
import Card3 from "../../../public/card-3.jpeg";
import Card4 from "../../../public/card-4.jpeg";
import Image from 'next/image';
function BannerBottomCard() {
  return (
    <main className='max-w-5xl mx-auto'>
      <div className='grid grid-cols-2 lg:grid-cols-4 justify-center gap-x-4 gap-y-4'>


      <div className="single-item banner-bottom-card flex justify-center">
        <div className="card">
        <div className='cardImage'>
        <Image src={Card2} alt='img'/>
        </div>
        <div className="card__content p-5">
            {/* <p className="card__title">Card Title</p> */}
            <p className="card__description">
            সাশ্রয়ী ও নিরাপদ শুঁটকি উৎপাদন প্রাকৃতিক পদ্ধতিতে করা হয়, যেখানে কেমিক্যালের ব্যবহার এড়ানো হয়। এতে শুঁটকি পুষ্টিকর ও স্বাস্থ্যসম্মত থাকে, যা দীর্ঘদিন সংরক্ষণ করা যায়।
            </p>
        </div>
        </div>
        </div>


        <div className="single-item banner-bottom-card flex justify-center">
        <div className="card">
        <div className='cardImage'>
        <Image src={Card4} alt='img'/>
        </div>
        <div className="card__content p-5">
            {/* <p className="card__title">Card Title</p> */}
            <p className="card__description">
            সঠিক মূল্য মানে হলো পণ্যের গুণগত মানের সঙ্গে সামঞ্জস্যপূর্ণ দাম নির্ধারণ করা। এতে ভোক্তারা ন্যায্য দামে মানসম্মত পণ্য পায় এবং বিক্রেতাও সঠিকভাবে লাভ করতে পারে।
            </p>
        </div>
        </div>
        </div>



        <div className="single-item banner-bottom-card flex justify-center">
        <div className="card">
        <div className='cardImage'>
        <Image src={Card3} alt='img'/>
        </div>
        <div className="card__content p-5">
            {/* <p className="card__title">Card Title</p> */}
            <p className="card__description">
            উন্নত মানের প্যাকেজিং পণ্যের গুণমান ও সুরক্ষা নিশ্চিত করে, যা দীর্ঘদিন পর্যন্ত তাজা ও নিরাপদ রাখে। এটি পরিবহন ও সংরক্ষণে সুবিধাজনক এবং ভোক্তাদের জন্য আরও আকর্ষণীয় করে তোলে।
            </p>
        </div>
        </div>
        </div>


        <div className="single-item banner-bottom-card flex justify-center">
        <div className="card">
        <div className='cardImage'>
        <Image src={Card1} alt='img'/>
        </div>
        <div className="card__content p-5">
            {/* <p className="card__title">Card Title</p> */}
            <p className="card__description">
            আমাদের ৩ দিনের ক্যাশব্যাক পলিসি অনুযায়ী, আপনি কেনাকাটার ৩ দিনের মধ্যে ক্যাশব্যাকের সুবিধা উপভোগ করতে পারবেন। শর্তাবলী প্রযোজ্য।
            </p>
        </div>
        </div>
        </div>



        


        
      </div>
    </main>
  )
}

export default BannerBottomCard
