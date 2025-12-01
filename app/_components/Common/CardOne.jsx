import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

function Recipe({ img, name, detailsUrl }) {
  const BASEURL = process.env.NEXT_PUBLIC_BASE_URL;
  const t = useTranslations("HomePage");
  return (
    <div className=" cursor-pointer group">
      <Link href={detailsUrl}>
        <div className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg group-hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] duration-200 overflow-hidden lg:h-[280px] xl:h-[350px] 2xl:h-[320px]">
          <div>
            <Image
              src={`${BASEURL}/${img}?v=${Date.now()}`}
              alt="Recipe Image"
              className="rounded-t-lg group-hover:scale-110 duration-300 ease-in-out"
              width={500}
              height={300}
            />

            <div className="py-6 pl-3">
              <h2 className="font-semibold text-[16px] pb-4  px-1">{name}</h2>
              <button className=" bg-black text-white py-2 px-3 text-sm rounded-lg ">
                {t("Buttons.readMore")}
              </button>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Recipe;
