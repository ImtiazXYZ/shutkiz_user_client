import Image from "next/image";
import Link from "next/link";

function Product({ img, name, price, category, url }) {
  const BASEURL = process.env.NEXT_PUBLIC_BASE_URL;
  return (
    // <main className="group cursor-pointer relative">
    //   <Link href={`${url}`}>
    //     <div className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] group-hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] duration-200 rounded-lg h-[350px] md:h-[350px] ">
    //       <div className="image relative">
    //         <Image
    //           src={`${BASEURL}/${img}?v=${Date.now()}`}
    //           width={190}
    //           height={290}
    //           alt={name}
    //           className="group-hover:scale-110 duration-300 w-full"
    //         />
    //       </div>
    //       <div className="text pt-3 pb-3 space-y-1 px-3">
    //         <p className="text-[16px] text-black cursor-pointer">{name}</p>
    //         <p className="font-semibold cursor-pointer pt-1">৳ {price}</p>
    //       </div>
    //       <div className="px-3 absolute bottom-4">
    //         <Link href={`${url}`}>
    //           <button className="bg-[#19A8E1] hover:bg-[#1ebfff] duration-200 px-4 py-2 text-white rounded-lg text-sm">
    //             Buy Now
    //           </button>
    //         </Link>
    //       </div>
    //     </div>
    //   </Link>
    // </main>
    <main className="group cursor-pointer">
      <Link href={url} className="block">
        <div className="flex flex-col justify-between bg-white rounded-xl overflow-hidden shadow-[0_3px_10px_rgb(0,0,0,0.1)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300">
          <div className="relative w-full aspect-square overflow-hidden bg-gray-100">
            <Image
              src={`${BASEURL}/${img}?v=${Date.now()}`}
              alt={name}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            />
          </div>

          <div className="flex flex-col justify-between px-4 py-3 h-full">
            <div>
              <p className="text-[16px] md:text-[18px] font-medium text-gray-800 line-clamp-2">
                {name}
              </p>
              <p className="text-lg font-semibold text-black mt-1">৳ {price}</p>
            </div>

            <div className="mt-4">
              <Link href={url}>
                <button className="w-full bg-[#19A8E1] hover:bg-[#1ebfff] transition-colors duration-200 text-white font-medium px-4 py-2 rounded-lg text-sm md:text-base">
                  Buy Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </Link>
    </main>
  );
}

export default Product;
