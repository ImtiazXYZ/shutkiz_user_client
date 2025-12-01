import { useTranslations } from "next-intl";
import BannerBottomCard from "../_components/Home/BannerBottomCard";
import BestSellingProduct from "../_components/Home/BestSellingProduct";
import ComboPackageProduct from "../_components/Home/ComboPackageProduct";
import DryFishProductSlider from "../_components/Home/DryFishProductSlider";
import HeroCategory from "../_components/Home/HeroCategory";
import HeroSliderWrapper from "../_components/Home/HeroSliderWrapper";
import MediaSlider from "../_components/Home/MediaSlider";
import RawFishProductSlider from "../_components/Home/RawFishProductSlider";
import RecipeBanner from "../_components/Home/RecipeBanner";
import RecipeVideoSlider from "../_components/Home/RecipeVideoSlider";
import Tagline from "../_components/Home/Tagline";
import TestimonialSlider from "../_components/Home/TestimonialSlider";

export default function Home() {
  const t = useTranslations("HomePage");
  return (
    <main>
      {/* <WelcomePopup/> */}
      <section id="hero-slider">
        <HeroSliderWrapper />
      </section>
      <section id="tagline" className="pt-10 md:pt-14 md:pb-5">
        <Tagline />
      </section>
      <section id="hero-banner-bottom-card" className="py-10 lg:py-14">
        <BannerBottomCard />
      </section>
      <section id="hero-categories" className="py-10 lg:py-14">
        <HeroCategory />
      </section>
      <section id="special-combo-packages" className="py-10">
        <ComboPackageProduct
          title={t("Slider.section8")}
          url="/category/combo-package"
        />
      </section>
      <section id="best-selling" className="py-10">
        <BestSellingProduct
          title={t("Slider.section1")}
          url="/category/premium-dry-fish"
        />
      </section>
      {/* <section id="new-arrival" className="py-10">
        <NewArrivalProducts
          title={t("Slider.section9")}
          url="/category/premium-dry-fish"
        />
      </section> */}
      <section id="new-arrival" className="py-10">
        <DryFishProductSlider
          title={t("Slider.section2")}
          url="/category/premium-dry-fish"
        />
      </section>
      <section id="top-search" className="py-10">
        <RawFishProductSlider
          title={t("Slider.section3")}
          url="/category/raw-fish"
        />
      </section>
      {/* <section id='recipe' className='py-10'>
        <RecipeSlider title={t("Slider.section4")}/>
      </section> */}
      <section id="recipe-video" className="py-10">
        <RecipeVideoSlider title={t("Slider.section5")} />
      </section>
      <section id="recipeBanner" className="py-14">
        <RecipeBanner title={t("Slider.section4")} />
      </section>
      <section id="testimonial" className="py-10">
        <TestimonialSlider title={t("Slider.section6")} />
      </section>
      <section id="media" className="py-10">
        <MediaSlider title={t("Slider.section7")} />
      </section>
    </main>
  );
}
