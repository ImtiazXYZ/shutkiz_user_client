import Image from 'next/image';
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io";
import getBlog from '../../../_lib/blog/getBlog';
async function page({params}) {
  const BASEURL = process.env.NEXT_PUBLIC_BASE_URL;
  const {slug} = params;
  const lastSlug = slug.split('/').pop();
  const recipe = await getBlog(lastSlug);
  return (
    <main className='shadow-xl p-10 rounded-xl w-full'>
      <div className="banner">
        <h2 className='font-semibold text-sm text-center pb-3'>Blog</h2>
        <h2 className='text-3xl font-semibold text-center pb-4'>{recipe.title}</h2>
        <div className='w-[100px] h-[2px] bg-black mx-auto'></div>
        <div className='flex justify-center'>
          <div>
          <p className=' pb-2 text-sm font-semibold pt-12'>{recipe.blog_categories.name}</p>
        <p className='text-sm pb-4'>Posted on May 16, 2024</p>
        <Image src={`${BASEURL}/${recipe.banner}?v=${Date.now()}`} width={800} height={500} alt='Recipe Banner' className='rounded-lg'/>
          </div>
        </div>
      </div>
      <div className="description pt-20 lg:px-10">
        <p dangerouslySetInnerHTML={{ __html: recipe.description }}></p>
      </div>
      <div className="share-on-buttons pt-20 pb-10">
        <h2 className='text-base font-semibold pb-5'>Share on</h2>
        <div className='flex gap-x-5'>
        <div className='singleItem group'>
        <div className=" bg-white w-[45px] h-[45px] rounded-full shadow-xl flex justify-center items-center  group-hover:bg-[#1877F2] duration-300 cursor-pointer">
          <FaFacebook className='text-xl group-hover:text-white duration-300'/>
        </div>
        </div>
        <div className='singleItem group'>
        <div className=" bg-white w-[45px] h-[45px] rounded-full shadow-xl flex justify-center items-center  group-hover:bg-[#FCAF45] duration-300 cursor-pointer">
          <RiInstagramFill className='text-xl group-hover:text-white duration-300'/>
        </div>
        </div>
        <div className='singleItem group'>
        <div className=" bg-white w-[45px] h-[45px] rounded-full shadow-xl flex justify-center items-center  group-hover:bg-[#25D366] duration-300 cursor-pointer">
          <IoLogoWhatsapp className='text-xl group-hover:text-white duration-300'/>
        </div>
        </div>
        </div>
      </div>
    </main>
  )
}

export default page
