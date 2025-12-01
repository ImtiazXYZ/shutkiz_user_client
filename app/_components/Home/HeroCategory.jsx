import React from 'react'
import Category1 from "../../../public/Premium Dry Fish.png";
import Category2 from "../../../public/Fresh Sea Fish.png";
import Category3 from "../../../public/Balachao.png";
import Category4 from "../../../public/Fish Chips.png";
import Category5 from "../../../public/Dry Fish Recipe Book.png";
import Category6 from "../../../public/Combo Box.png";
import Category7 from "../../../public/Gift Box.png";
import HeroSingleCategory from './HeroSingleCategory';
import { useTranslations } from 'next-intl';

function HeroCategory() {
  const t = useTranslations("HomePage");
  return (
    <main>
      {/* <h2 className='text-black font-semibold text-lg pb-5'>{t("Categories.title")}</h2> */}
      <div className='all-categories grid grid-cols-4 sm:grid-cols-6 md:grid-cols-7 gap-y-10'>
        <HeroSingleCategory img={Category1} name={t("Categories.cat1")} url="/category/premium-dry-fish"/>
        <HeroSingleCategory img={Category2} name={t("Categories.cat2")} url="/category/raw-fish"/>
        <HeroSingleCategory img={Category3} name={t("Categories.cat3")} url="/category/balachao"/>
        <HeroSingleCategory img={Category4} name={t("Categories.cat4")} url="/category/fish-chips"/>
        <HeroSingleCategory img={Category5} name={t("Categories.cat5")} url="/category/recipe-book"/>
        <HeroSingleCategory img={Category6} name={t("Categories.cat6")} url="/category/combo-package"/>
        <HeroSingleCategory img={Category7} name={t("Categories.cat7")} url="/category/dry-fish-gift-box"/>
      </div>
    </main>
  )
}

export default HeroCategory
