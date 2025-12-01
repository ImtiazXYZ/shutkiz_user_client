import React from 'react'
import InvestmentSlider from "../../../_components/Investment/InvestmentSlider"
import InvestmentBottomSlider from "../../../_components/Investment/InvestmentBottomSlider"
import ProjectSection1 from "../../../_components/Investment/ProjectSection1"
import ProjectSection2 from "../../../_components/Investment/ProjectSection2"
import ProjectSection3 from "../../../_components/Investment/ProjectSection3"
import ProjectSection4 from "../../../_components/Investment/ProjectSection4"
import Contact from "../../../_components/Investment/Contact"
import FAQ from "../../../_components/Investment/FAQ"
import Slider1 from "../../../../public/project-1-slider-1.jpg";
import Slider2 from "../../../../public/project-1-slider-2.jpg";
import Slider6 from "../../../../public/project-1-slider-6.jpg";
function Project() {
  return (
    <div>
      <section id='slider'>
        <InvestmentSlider img={[Slider6,Slider2]}/>
      </section>
      <section id='section-1' className='py-20'>
        <ProjectSection1/>
      </section>
      <section id='section-2' className='pb-20'>
        <ProjectSection2/>
      </section>
      <section id='section-3' className='pb-20'>
        <FAQ/>
      </section>
      <section id='section-4' className='pb-20'>
        <ProjectSection3/>
      </section>
      <section id='section-5' className='pb-20'>
        <ProjectSection4/>
      </section>
      <section id='section-5' className='pb-20'>
        <InvestmentBottomSlider img={[Slider6,Slider2,Slider6,Slider2]}/>
      </section>
      <section id='section-6' className='pb-20'>
        <Contact/>
      </section>
    </div>
  )
}

export default Project
