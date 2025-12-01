"use client";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Bounce, toast as customToast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ApplyCoupon from "../../_components/Checkout/ApplyCoupon";
import CartProducts from "../../_components/Checkout/CartProducts";
import CheckoutForm from "../../_components/Checkout/CheckoutForm";
import PaymentMethod from "../../_components/Checkout/PaymentMethod";
import Summary from "../../_components/Checkout/Summary";
import getCart from "../../_lib/cart/getCart";
import updateCart from "../../_lib/cart/updateCart";
import applyCoupon from "../../_lib/coupon/applyCoupon";
import { initiateCheckout, orderData } from "../../_lib/facebookPixel/pixel";
import checkFreeDelivery from "../../_lib/free-delivery/checkFreeDelivery";
import orderConfirm from "../../_lib/order/orderConfirm";
import OrderConfirmBkash from "../../_lib/order/OrderConfirmBkash";
import checkThreshold from "../../_lib/threshold/checkThreshold";
import { useCartStore } from "../../store/cartStore";
import useModalCartStore from "../../store/modalCartStore";
function Checkout() {
  const { push } = useRouter();
  const [selectedArea, setSelectedArea] = useState(null);
  const [carts, setCarts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [couponData, setCouponData] = useState([]);
  const [isCouponApply, setIsCouponApply] = useState(false);
  const [isValidCoupon, setIsValidCoupon] = useState(1);
  const { triggerCartUpdate } = useCartStore();
  const { cartUpdated, resetCartUpdate } = useModalCartStore();
  const [isThreshold, setIsThreshold] = useState(false);
  const [isFreeShipping, setIsFreeShipping] = useState(false);
  const [isGift, setIsGift] = useState(false);
  const [isCustomGift, setIsCustomGift] = useState(false);
  const [gift, setGift] = useState();
  const [paymentType, setPaymentType] = useState("cod");
  const [shippingCost, setShippingCost] = useState(0);

  //state for unauthenticate user

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    division: "",
    address: "",
  });

  const handleFormChange = (field, value) => {
    setFormData((pre) => ({ ...pre, [field]: value }));
  };

  //Checking user is authenticate or not
  const token = Cookies.get("access_token");

  const handleSelection = (area) => {
    setSelectedArea(area);
  };

  useEffect(() => {
    let cost = 0;
    const division = Number(formData.division);

    if (!isFreeShipping) {
      cost += [3, 4, 5, 6, 7, 8].includes(division)
        ? 120
        : [1, 2].includes(division)
        ? 80
        : 0;
    }
    setShippingCost(cost);
  }, [isFreeShipping, formData.division]);

  const checkFreeShipping = async () => {
    const result = await checkFreeDelivery();
    if (result.success && result.data) {
      setIsFreeShipping(result.data?.free_shipping);
    }
  };
  useEffect(() => {
    if (cartUpdated || isCouponApply || isValidCoupon) {
      fetchCartData();
      resetCartUpdate();
      checkFreeShipping();
      checkIsThreshold();
    }
  }, [cartUpdated, isCouponApply, isValidCoupon, resetCartUpdate]);

  const fetchCartData = async () => {
    try {
      const result = await getCart();
      if (
        result.data &&
        Object.keys(result.data).length === 0 &&
        result.data.constructor === Object
      ) {
        push("/");
      }
      setCouponData(result.data);
      setCarts(result.data.products || []);
      setIsLoading(false);

      //facebook pixel
      const products = result.data.products;
      initiateCheckout(products);

      if (result.data.products.length < 1) {
        push("/");
      }
    } catch (error) {
      console.error("Error fetching cart:", error);
      setCarts([]);
      setIsLoading(false);
    }
  };

  const handleUpdateCart = async (operation, productId, stockId) => {
    try {
      const result = await updateCart(operation, productId, stockId);
      if (result.data.opcode == 1) {
        toast.success("Product Removed");
      }
      if (result.data.opcode == 2) {
        toast.success("Product Updated");
      }
      if (result.data.opcode == 3) {
        toast.success("Product Updated");
      }
      fetchCartData();
      checkFreeShipping();
      checkIsThreshold();
      triggerCartUpdate();
    } catch (error) {
      console.error("Error updating cart:", error);
    }
  };

  const subTotal = () => {
    return carts.reduce((total, cart) => {
      const price = cart.additional_stock_data.is_discount
        ? cart.additional_stock_data.discount_price
        : cart.additional_stock_data.regular_price;
      return total + price * cart.pivot.quantity;
    }, 0);
  };

  // const grandTotal = () => {
  //   if (isFreeShipping) {
  //     shippingCost = 0;
  //   } else {
  //     shippingCost = shippingCost;
  //   }
  //   let total = subTotal() + shippingCost;
  //   if (couponData.is_coupon) {
  //     total = total - couponData.coupon_amount;
  //   }
  //   return total;
  // };

  const grandTotal = () => {
    let cost = isFreeShipping ? 0 : shippingCost;
    let total = subTotal() + cost;
    if (couponData?.is_coupon) {
      total -= couponData.coupon_amount || 0;
    }

    return total;
  };

  const confirmOrder = async () => {
    if (
      formData.name != "" &&
      formData.email != "" &&
      formData.mobile != "" &&
      formData.division != "" &&
      formData.address != "" &&
      paymentType != ""
    ) {
      if (paymentType == "cod") {
        const result = await orderConfirm(formData);
        if (result.success) {
          customToast.success("Order successfully placed", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
          triggerCartUpdate();

          //facebook pixel
          orderData(result);

          localStorage.setItem(
            "categorySlug",
            JSON.stringify(result.data.slug)
          );
          push("/checkout/order-confirm");
          console.log(result);
        } else {
          toast.error("Something went wrong");
        }
      }
      if (paymentType == "bkash") {
        const result = await OrderConfirmBkash(formData);
        if (result.data.bkashURL) {
          localStorage.setItem(
            "categorySlug",
            JSON.stringify(result.data.slug)
          );
          window.location.href = result.data.bkashURL;
        }
      }
    } else {
      toast.error("Please fill all the field of shipping address");
    }
  };

  const applyCouponCode = async (code) => {
    const result = await applyCoupon(code);
    setIsCouponApply(true);
    if (result.success && result.data.opcode == 1) {
      toast.success("Coupon Applied Successfully");
      setIsValidCoupon(2);
    }
    if (result.data.opcode == 3) {
      toast.error("Coupon has Expired");
      setIsValidCoupon(3);
    }
    if (result.data.opcode == 4) {
      toast.error("Invalid Coupon");
      setIsValidCoupon(4);
    }
  };

  //Threshold

  const checkIsThreshold = async () => {
    const result = await checkThreshold();
    //console.log(result);
    if (result.success) {
      if (result.data.data) {
        if (result.data.opcode == 1) {
          setIsThreshold(true);
        } else {
          setIsThreshold(false);
        }

        if (result.data.data.is_free_shipping) {
          setIsFreeShipping(true);
          setIsGift(false);
        } else {
          setIsFreeShipping(false);
          setIsGift(true);
          if (result.data.data.gift.is_custom) {
            setIsCustomGift(true);
            setGift(result.data.data.gift);
          } else {
            setIsCustomGift(false);
            setGift(result.data.data.gift.product);
          }
        }
      } else {
        setIsFreeShipping(false);
        setIsGift(false);
        setIsCustomGift(false);
        setIsThreshold(false);
      }
    }
  };

  // const testOrder=async()=>{
  //   const response = await OrderConfirmBkash(formData);
  //   console.log(response);
  //   if(response.data.bkashURL){
  //     window.location.href = response.data.bkashURL;
  //   }
  // }

  return (
    <div>
      <main className="grid grid-cols-12 pt-5 gap-y-10 lg:gap-y-0 lg:gap-x-10">
        <section
          id="product-details"
          className="col-span-12 lg:col-span-7 px-2 lg:px-10"
        >
          <div>
            <CartProducts
              carts={carts}
              handleUpdateCart={handleUpdateCart}
              isLoading={isLoading}
            />
          </div>
        </section>
        <section
          id="checkout-details"
          className="col-span-12 lg:col-span-5 px-2 lg:px-0"
        >
          {/* <div className="shipping-charge">
          <ShippingArea selectedArea={selectedArea} handleSelection={handleSelection}/>
        </div> */}
          <div>
            <CheckoutForm formData={formData} onFormChange={handleFormChange} />
          </div>

          <div>
            <PaymentMethod setPaymentType={setPaymentType} />
          </div>

          <div className="order-summary pt-10">
            <Summary
              shippingCost={shippingCost}
              subTotal={subTotal()}
              grandTotal={grandTotal()}
              confirmOrder={confirmOrder}
              coupon={couponData}
              isFreeShipping={isFreeShipping}
              isThreshold={isThreshold}
              isGift={isGift}
              gift={gift}
              isCustomGift={isCustomGift}
            />
            <ApplyCoupon
              applyCouponCode={applyCouponCode}
              validCoupon={isValidCoupon}
            />
          </div>
        </section>
      </main>
    </div>
  );
}

export default Checkout;
