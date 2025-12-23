import Image from "next/image"
import DryFishIcon from "../../../public/dry-fish-icon.png"
import DryFishIcon3 from "../../../public/dry-fish-icon-3.png"

function Tagline() {
  return (
    <main className="">
      <div className='relative max-w-[600px] mx-auto'>
      <div className="text-center bg-[#00B0EA] py-2 w-full text-white rounded-xl font-semibold">
      <p>শুটকিজ – নিরাপদ শুঁটকি থেকেও বেশী কিছু </p>
      </div>
      <div className="hidden md:block bg-white p-4 absolute left-10 top-1/2 transform -translate-y-1/2 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
        <Image src={DryFishIcon} alt="" className="w-[50px] h-[50px]"/>
      </div>
      <div className="hidden md:block bg-white p-4 absolute right-10 top-1/2 transform -translate-y-1/2 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
        <Image src={DryFishIcon3} alt="" className="w-[50px] h-[50px]"/>
      </div>
      </div>
      
    </main>
  )
}

export default Tagline
