import Image from "next/image";
import React from "react";
import deliver from "@/public/deliver.png";
import data from '@/app/data/products'
import { getUserByEmail } from "@/sanity/lib/client";

async function Page() {
  return (
    <div className="w-full">
      <div className="flex justify-center max-w-[1440px]">
        <div className="flex w-[880px] sm:flex-col sm:items-center md:flex-col md:items-center">
          <div className="w-1/2 sm:w-[95vw]">
            <h1 className="font-medium ">
              How would you like to get your order?
            </h1>
            <p className="pt-3">
              Customs regulation for India require a copy of the recipient's
              KYC. The address on the KYC needs to match the shipping address.
              Our courier will contact you via SMS/email to obtain a copy of
              your KYC. The KYC will be stored securely and used solely for the
              purpose of clearing customs (including sharing it with customs
              officials) for all orders and returns. If your KYC does not match
              your shipping address, please click the link for more information.
              Learn More
            </p>
            <div className="flex items-center border-2 border-black h-24 w-50 rounded-[30px] mt-5 mb-5 pl-10">
              <Image
                src={deliver}
                alt="checkout"
                className="h-[24px] w-[22px]"
              />
              <h1 className="pl-5">Deliver It</h1>
            </div>

            <h1 className="font-medium pt-3 pb-3">
              Enter Your Name And Address:
            </h1>
            <input
              className="p-3 border-2 border-slate-300 w-full mt-3 mb-3 text-black"
              type="text"
              placeholder="First Name"
            />
            <input
              className="p-3 border-2 border-slate-300 w-full mt-3 mb-3"
              type="text"
              placeholder="Last Name"
            />
            <input
              className="p-3 border-2 border-slate-300 w-full mt-3 mb-3"
              type="text"
              placeholder="Address Line 1"
            />
            <input
              className="p-3 border-2 border-slate-300 w-full mt-3 mb-3"
              type="text"
              placeholder="Address Line 2"
            />
            <input
              className="p-3 border-2 border-slate-300 w-full mt-3 mb-3"
              type="text"
              placeholder="Address Line 3"
            />
            <div>
              <input
                className="p-3 border-2 border-slate-300 w-1/2 mt-3 mb-3"
                type="text"
                placeholder="Postal Code"
              />
              <input
                className="p-3 border-2 border-slate-300 w-1/2 mt-3 mb-3"
                type="text"
                placeholder="Locality"
              />
            </div>
            <div>
              <input
                className="p-3 border-2 border-slate-300 w-1/2 mt-3 mb-3"
                type="text"
                placeholder="State / Territory"
              />
              <input
                className="p-3 border-2 border-slate-300 w-1/2 mt-3 mb-3"
                type="text"
                placeholder="India"
              />
            </div>
            <h1 className="font-medium pt-3 pb-3">
              Whats your contact information?
            </h1>
            <input
              className="p-3 border-2 border-slate-300 w-full mt-3 mb-3"
              type="text"
              placeholder="Email"
            />
            <input
              className="p-3 border-2 border-slate-300 w-full mt-3 mb-3"
              type="text"
              placeholder="Phone Number"
            />

            <h1 className="font-medium pt-3 pb-3">What is your PAN?</h1>
            <input
              className="p-3 border-2 border-slate-300 w-full mt-3 mb-3"
              type="text"
              placeholder="PAN"
            />
            <h3 className="text-sm text-gray-500">
              Enter your PAN to enable payment with UPI, Net Banking or local
              card methods{" "}
            </h3>

            <input type="checkbox" />
            <label className="text-sm text-gray-500 pl-3">
              Save PAN details to Nike Profile{" "}
            </label>
            <br/>
            <input type="checkbox" />
            <label className="text-sm text-gray-500 pl-3">
              I have read and consent to eShopWorld processing my information in
              accordance with the Privacy Statement and Cookie Policy.
              eShopWorld is a trusted Nike partner.
            </label>
            <br />
            <button className="text-gray-500 w-full p-5 mt-3 mb-3 border-2 border-gray-300">Continue</button>

            <h4 className="w-full font-medium pt-5 pb-5">Delivery</h4>
            <h4 className="w-full font-medium pt-5 pb-5">Shipping</h4>
            <h4 className="w-full font-medium pt-5 pb-5">Billing</h4>
            <h4 className="w-full font-medium pt-5 pb-20">Payment</h4>
          </div>
          <div className="w-1/2 ml-[30px] sm:w-[95vw] sm:ml-0">
                <h1 className="font-medium text-2xl">Order Summary</h1>
                <div className="flex justify-between w-full">
                    <h3 className="pt-2 pb-2 text-gray-500">Subtotal</h3>
                    <h3 className="pt-2 pb-2 text-gray-500">₹&nbsp;20,000</h3>
                </div>
                <div className="flex justify-between w-full">
                    <h3 className="pt-2 pb-2 text-gray-500">Delivery/ Shipping</h3>
                    <h3 className="pt-2 pb-2 text-gray-500">Free</h3>
                </div>
                <div className="flex justify-between w-full border-2 border-gray-200">
                    <h3 className="pt-2 pb-2 font-medium">Total</h3>
                    <h3 className="pt-2 pb-2 font-medium">₹&nbsp;20,000</h3>
                </div>
                <h3 className="font-medium text-sm text-center">(The total reflects the price of your order, including all duties and taxes)</h3>

                <h1 className="font-medium text-lg pt-3 pb-3">Arrives Mon 27, Mar - Wed 12, April</h1>
                <div className="flex items-center">
                    <Image src={data[5].img} alt="image" className="w-[200px] h-auto" />
                    <div >
                        <h2>{data[5].name}</h2><br/>
                        <h2 className="text-gray-500">{data[5].subTitle}</h2>
                        <h2 className="text-gray-500">₹&nbsp;{data[5].price}</h2>

                    </div>
                </div>
                <div className="flex items-center">
                    <Image src={data[6].img} alt="image" className="w-[200px] h-auto" />
                    <div>
                        <h2>{data[6].name}</h2><br/>
                        <h2 className="text-gray-500">{data[6].subTitle}</h2>
                        <h2 className="text-gray-500">₹&nbsp;{data[6].price}</h2>
                    </div>
                </div>
                
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
