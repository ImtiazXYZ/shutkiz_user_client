import React from 'react'
import ProtectedCheckout from "../../_components/Checkout/ProtectCheckout"
import Checkout from '../../_components/Checkout/Checkout'
function page() {
  return (
    <div>
      {/* <ProtectedCheckout/> */} 
      {/* Uncomment this above protectedcheckout component and comment below checkout component for allowing to access the checkout page authenticate user only  */}
      <Checkout/>
    </div>
  )
}

export default page
