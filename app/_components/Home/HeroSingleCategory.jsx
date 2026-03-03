import Image from "next/image";
import Link from "next/link";

function HeroSingleCategory({ img, name, url }) {
  return (
    <main>
      <Link href={`${url}`}>
        <div className="single-category  flex justify-center items-center cursor-pointer">
          <div className="group">
            <div className="bg-gray-100 w-[70px] md:w-[90px] lg:w-[120px] h-[70px] md:h-[90px] lg:h-[120px] rounded-full flex justify-center items-center group-hover:ring-2 ring-black duration-100 ease-in-out">
              <Image
                src={img}
                alt={`${name} category image`}
                width={192}
                height={192}
                sizes="(max-width: 768px) 56px, (max-width: 1024px) 72px, 96px"
                className="rounded-full"
              />
            </div>

            <div className="pt-2 text-center group-hover:underline text-[13px] sm:text-[15px] ">
              {name}
            </div>
          </div>
        </div>
      </Link>
    </main>
  );
}

export default HeroSingleCategory;
