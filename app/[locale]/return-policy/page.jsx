import Image from 'next/image'
import React from 'react'
import ReturnImage from "../../../public/ReturnPolicyWebBanner.png"
function page() {
  return (
    <main>
      <div>
      <h2 className='text-center text-[26px] font-semibold pb-10'>Return & Refund Policy</h2>
      <Image src={ReturnImage}/>
      </div>
      <div className="all-item py-14 flex flex-col gap-y-10">
        <div className="single-item">
            <h2 className='text-lg font-semibold pb-2'>OUR RETURN POLICY</h2>
            <p>At shutkiz.com, we have a priority motive  to amplify the experience of our valuable customers. We Shutkiz, guarantee the rights of our customers and keep them aware of every instant by offering advice through shutkiz.com, social media, and catalog. The below-mentioned policy is for the same services and applicable to all the placed orders within the our country, on our online stores.</p>
        </div>
        <div className="single-item">
            <h2 className='text-lg font-semibold pb-2'>ITEMS THAT CAN BE RETURNED</h2>
            <p>shutkiz.com is giving the facility of return service in case of receiving product or not in accordance with our customers specifications. If the customer is not satisfied with what he or she ordered and what is received than the customer has a right to return it easily within the provided time limit and:</p>
            <ul className='pt-5 list-disc list-inside pl-5 flex flex-col gap-y-5'>
                <li>The product that is being returned by the customer must be complete and intact.There should not be the utilization of received product which is being returned.Item packaging should be unblemished and intact.</li>
                <li>Delivered Product is damaged (physically destroyed or broken) / defective (dead on arrival)Delivered Product is incorrect (presentation different on the website) / incomplete (missing parts)</li>
                <li>Delivered Product is “No longer needed” (you no longer have a use for the product / you have changed your mind about the purchase / you do not like the product after opening the package).</li>
            </ul>
        </div>
        <div className="single-item">
            <h2 className='text-lg font-semibold pb-2'>ITEMS THAT CANNOT BE RETURNED</h2>
            <ul className='list-disc list-inside pl-5 flex flex-col gap-y-3'>
            <li>All Products are final sale, returns & exchanges are NOT possible on any Products.</li>
            <li>If the product is not complete or if even a single item is missing.</li>
            <li>If the product is customized according to size, style, and fabric.</li>
            <li>If the product gets stained and got damaged even a bit.</li>
            <li>The discounted sale merchandise cannot be returned.</li>
            </ul>
        </div>
        <div className="single-item">
            <h2 className='text-lg font-semibold pb-2'>PROCEDURE FOR RETURN & EXCHANGE</h2>
            <p>For exchanging or returning any of your purchased items please email at info@shutkiz.com, our customer care representative will get back to you within next 24-48hours on working days (Saturday to Thursday).</p>
            <p>You can return the item to our provided address, please note the courier cost of returning the item will be borne by the customer.</p>
            <p>In case the item is damaged or not according to customer wish, Shutkiz will cover the return shipment charges by picking the goods up from your given address throcoursurier and in case if you have to pay the return fee than you will get the refund or the amount will be adjusted in the next order. Please note that we do not accept the returns for those products that are not purchased through shutkiz.com</p>
        </div>
        <div className="single-item">
            <h2 className='text-lg font-semibold pb-2'>PROCEDURE OF RETURN</h2>
            <p>Shutkiz is providing the facility of return on our website shutkiz.com or Facebook Page WITH ORIGINAL RECEIPT</p>
            <p>You can return the deficient item (if any), within 3 days of purchase; the original purchase receipt will be required for returning the item with a full paid price.</p>
        </div>
        <div className="single-item">
            <h2 className='text-lg font-semibold pb-2'>WITHOUT ORIGINAL RECEIPT</h2>
            <p>You can also return the defective item (if any) without the original receipt but the product will then be refunded as per the current selling price of that time, and the customer will be offered exchange service with the same or high value.</p>
        </div>
        <div className="single-item">
            <h2 className='text-lg font-semibold pb-2'>TIME LIMIT</h2>
            <p>You will be facilitated with return service during the course of 10 working days after the delivery of the product. The original receipt of the product will be required for your ease and our convenience.</p>
        </div>
        <div className="single-item">
            <h2 className='text-lg font-semibold pb-2'>RETURN ADDRESS</h2>
            <p>Dear Customer, please use the mentioned below address for returning or exchanging of products, or follow the instruction of our Customer Care Representative; you will have the adjustment of shipping fee in the next order.</p>
        </div>
        <div className="single-item">
            <p>Shutkiz</p>
            <p>বাকলিয়া এক্সেস রোড, কালামিয়া বাজার চট্রগ্রাম।</p>
        </div>
      </div>
    </main>
  )
}

export default page
