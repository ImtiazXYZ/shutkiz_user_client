import { useTranslations } from 'next-intl'
import React from 'react'

function Bottom() {
  const t = useTranslations("Bottom");
  return (
    <div>
      <div className='bg-[#F7F7F7] py-10 px-6 rounded-lg space-y-10'>
        <div>
            <h2 className='font-semibold text-xl md:text-[22px]'>{t("Section1.title")}</h2>
            <p className='text-[15px] pt-3'>{t("Section1.description")}</p>
        </div>
        <div>
            <h2 className='font-semibold text-xl md:text-[22px]'>{t("Section2.title")}</h2>
            <p className='text-[15px] pt-3'>{t("Section2.description")}</p>
        </div>
        <div>
            <h2 className='font-semibold text-xl md:text-[22px]'>{t("Section3.title")}</h2>
            <p className='text-[15px] pt-3'>{t("Section3.description")}</p>
        </div>
      </div>
    </div>
  )
}

export default Bottom
