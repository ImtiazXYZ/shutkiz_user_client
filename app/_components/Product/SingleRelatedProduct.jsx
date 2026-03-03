import Image from "next/image";
import React from "react";
import Link from "next/link";

function SingleRelatedProduct({ img, name, price, category, url }) {
  const BASEURL = process.env.NEXT_PUBLIC_BASE_URL;

  return (
    <div className="p-2 md:p-3">
      <Link href={url}>
        <div className="group cursor-pointer flex flex-col justify-between h-full bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
          
          {/* Image Section */}
          <div className="relative w-full aspect-square bg-gray-50 flex items-center justify-center p-4">
            <Image
              src={`${BASEURL}/${img}`}
              alt={name}
              fill
              className="object-contain group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Text Section */}
          <div className="px-4 py-3 flex flex-col flex-grow">
            {category && (
              <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">
                {category}
              </p>
            )}

            <h3 className="text-sm md:text-base font-medium text-gray-800 line-clamp-2">
              {name}
            </h3>

            <p className="mt-2 font-semibold text-lg text-gray-900">
              ৳ {price}
            </p>

            {/* Button pushed to bottom */}
            <div className="mt-auto pt-4">
              <button className="w-full bg-sky-600 hover:bg-sky-500 text-white text-base md:text-lg font-semibold py-2 rounded-lg transition-colors duration-300">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default SingleRelatedProduct;