import Image from "next/image";

function Summary({
  shippingCost,
  subTotal,
  grandTotal,
  confirmOrder,
  coupon,
  isFreeShipping,
  isThreshold,
  isGift,
  gift,
  isCustomGift,
}) {
  const BASEURL = process.env.NEXT_PUBLIC_BASE_URL;
  return (
    <main>
      <div className="bg-[#FFFAF5] border-1.5 rounded-lg border-[#ecd9c2] p-5">
        <h2 className="text-center font-semibold pt-1 text-xl pb-5">
          Order Summary
        </h2>
        <div className="flex flex-col gap-y-2">
          <div className="flex justify-between items-center text-[15px]">
            <div>
              <p className="text-gray-600">Delivery charge</p>
              {isFreeShipping && (
                <p className="text-green-600 text-sm">Free shipping applied</p>
              )}
            </div>

            <div>
              {isFreeShipping ? (
                <div className="flex flex-col items-end">
                  <del className="font-semibold text-gray-500">
                    ৳ {shippingCost}
                  </del>
                  <span className="text-green-600 font-semibold">৳ 0</span>
                </div>
              ) : (
                <p className="font-semibold">৳ {shippingCost}</p>
              )}
            </div>
          </div>

          <div className="flex justify-between text-[15px]">
            <p className="text-gray-600">Sub Total</p>
            <p className="font-semibold">৳ {subTotal}</p>
          </div>
          <div className="flex justify-between text-[15px]">
            <p className="text-gray-600">Discount (Coupon)</p>
            <p className="font-semibold">
              ৳ {coupon.is_coupon ? coupon.coupon_amount : "0"}
            </p>
          </div>
        </div>
        <div className="w-full h-[2px] my-2 bg-[#ecd9c2]"></div>
        <div className="flex justify-between text-[15px]">
          <p className="text-gray-600">Grand Total</p>
          <p className="font-semibold">৳ {grandTotal}</p>
        </div>
        <div className="py-4">
          <button
            onClick={confirmOrder}
            className="bg-black text-white w-full py-3 rounded-lg uppercase font-semibold text-sm"
          >
            Place Order
          </button>
        </div>
      </div>
      {isThreshold ? (
        isFreeShipping ? (
          <div className="bg-[#FFFAF5] border-1.5 rounded-lg border-[#ecd9c2] p-5 my-4">
            <p>
              Great news! Your order qualifies for free shipping as youve met
              the minimum order amount. Enjoy your savings!
            </p>
          </div>
        ) : (
          <div className="bg-[#FFFAF5] border-1.5 rounded-lg border-[#ecd9c2] p-5 my-4">
            <p>
              Congratulations! Youve earned a special gift: {gift.name} ! Thank
              you for meeting the minimum order amount. We hope you enjoy your
              reward!
            </p>
            <div className="pt-3">
              {isCustomGift ? (
                <Image
                  src={`${BASEURL}/${gift.image}`}
                  width={100}
                  height={100}
                />
              ) : (
                <Image
                  src={`${BASEURL}/${gift.thumbnail}`}
                  width={100}
                  height={100}
                />
              )}
            </div>
          </div>
        )
      ) : (
        ""
      )}
    </main>
  );
}

export default Summary;
