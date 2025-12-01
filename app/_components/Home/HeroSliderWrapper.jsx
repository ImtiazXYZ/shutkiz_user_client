import getHomeSlider from "../../_lib/home/getHomeSlider";
import HeroSlider from "./HeroSlider";

export default async function HeroSliderWrapper() {
  const sliders = await getHomeSlider();
  return <HeroSlider sliders={sliders} />;
}
