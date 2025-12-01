import React from 'react'
import Product from '../../_components/Product'
import Product1 from "../../../public/product-image-1.jpeg";
import Product2 from "../../../public/product-image-2.jpeg";
import Product3 from "../../../public/product-image-3.jpeg";
import Product4 from "../../../public/product-image-4.jpeg";
import Product5 from "../../../public/product-image-5.jpeg";
function CategoryPageMain() {
  return (
    <main>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-5'>
        <Product img={Product1} name="Naga Balachao নাগা বালাচাও" category="Balachao" price="800 - 1900"/>
        <Product img={Product2} name="Naga Balachao নাগা বালাচাও" category="Balachao" price="800 - 1900"/>
        <Product img={Product3} name="Naga Balachao নাগা বালাচাও" category="Balachao" price="800 - 1900"/>
        <Product img={Product4} name="Naga Balachao নাগা বালাচাও" category="Balachao" price="800 - 1900"/>
        <Product img={Product5} name="Naga Balachao নাগা বালাচাও" category="Balachao" price="800 - 1900"/>
      </div>
    </main>
  )
}

export default CategoryPageMain
