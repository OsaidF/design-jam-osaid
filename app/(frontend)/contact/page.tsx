import Image from "next/image";
import Link from "next/link";
import React from "react";
import thumbdown from '@/public/help/thumbdown.png'
import thumbup from '@/public/help/thumbup.png'
import phone from '@/public/help/phone.png'
import chat from '@/public/help/chat.png'
import email from '@/public/help/mail.png'
import locator from '@/public/help/storelocator.png'

const Page = () => {
  return (
    <div className="flex w-full justify-center">
      <div className="max-w-[1440px] w-full h-auto">
        <div className="flex flex-col items-center justify-center pt-5">
          <h1 className="font-medium text-3xl">GET HELP</h1>
          <input
            type="text"
            className="w-[450px] p-3 mt-3 border-2 border-slate-300 sm:w-[95vw]"
            placeholder="What can we help you with?"
          />
        </div>

        <div className="flex mt-10 sm:flex-col sm:items-center">
          <div className="flex flex-col w-2/3 ml-[60px] sm:w-[95vw] sm:ml-0">
            <h1 className="text-2xl font-medium">
              WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?
            </h1>
            <p>
              We want to make buying your favourite Nike shoes and gear online
              fast and easy, and we accept the following payment options:
            </p>
            <blockquote className="pl-10 pt-5 pb-5">
              Visa, Mastercard, Diners Club, Discover, American Express, Visa
              Electron, Maestro If you enter your PAN information at checkout,
              you'll be able to pay for your order with PayTM or a local credit
              or debit card. Apple Pay
            </blockquote>
            <p>
              Nike Members can store multiple debit or credit cards in their
              profile for faster checkout. If you're not already a Member, join
              us today.
            </p>
            <div className="flex gap-3 pt-4 sm:justify-center">
              <Link href={"/signup"}>
                <button className="bg-black text-white p-2 rounded-[30px] pl-4 pr-4">
                  Join Us
                </button>
              </Link>
              <Link href={"/all-products"}>
                <button className="bg-black text-white p-2 rounded-[30px] pl-4 pr-4">
                  Shop Nike
                </button>
              </Link>
            </div>
            <h1 className="text-2xl font-medium pt-5">FAQs</h1>
            <h3 className="font-medium pt-5">
              Does my card need international purchases enabled?
            </h3>
            <h3 className="pt-2">
              Yes, we recommend asking your bank to enable international
              purchases on your card. You will be notified at checkout if
              international purchases need to be enabled.
            </h3>

            <h3 className="font-medium pt-3">
              Can I pay for my order with multiple methods?
            </h3>
            <h3 className="pt-2">
              No, payment for Nike orders can't be split between multiple
              payment methods.
            </h3>

            <h3 className="font-medium pt-3">
              What payment method is accepted for SNKRS orders?
            </h3>
            <h3 className="pt-2">
              You can use any accepted credit card to pay for your SNKRS order.
            </h3>

            <h3 className="font-medium pt-3">
              Why don't I see Apple Pay as an option?
            </h3>
            <h3 className="pt-2">
              To see Apple Pay as an option in the Nike App or on Nike.com,
              you'll need to use a compatible Apple device running the latest
              OS, be signed in to your iCloud account and have a supported card
              in your Wallet. Additionally, you'll need to use Safari to use
              Apple Pay on Nike.com.
            </h3>

            <div className="sm:flex sm:flex-col sm:items-center sm:pt-5 sm:pb-5">
              <h3 className="pt-3 pb-3 font-medium">Was this answer helpful?</h3>
              <div className="flex gap-3 pl-3">
                <Image src={thumbdown} alt="thumb down" />
                <Image src={thumbup} alt="thumb down" />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center w-1/3  mr-[60px] sm:w-[95vw] sm:mr-0 sm:pb-5">
            <h1 className="text-2xl">CONTACT US</h1>
            <Image src={phone} alt="Phone" className="pt-10" />
            <ul className="text-center w-[200px] text-gray-500 pt-7">
              <li>000 800 919 0566</li>
              <li>Products & Orders: 24 hours a day, 7 days a week</li>
              <li>Company Info & Enquiries: 07:30 - 16:30, Monday - Friday</li>
            </ul>

            <Image src={chat} alt="Phone" className="pt-10" />
            <ul className="text-center w-[200px] text-gray-500 pt-7">
              <li>24 hours a day</li>
              <li>7 days a week</li>
            </ul>
            <Image src={email} alt="Phone" className="pt-10" />
            <ul className="text-center w-[200px] text-gray-500 pt-7">
              <li>We'll reply within</li>
              <li>five business days</li>
            </ul>

            <Image src={locator} alt="Phone" className="pt-10" />
            <ul className="text-center w-[200px] text-gray-500 pt-7">
              <li>STORE LOCATOR</li>
              <li>Find Nike retail stores near you</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
