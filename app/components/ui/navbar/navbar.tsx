"use client";
import Image from "next/image";
import React from "react";
import logo1 from "@/public/navbar/person.png";
import logo2 from "@/public/navbar/Frame.png";
import Link from "next/link";
import Search from "@/app/components/ui/search/search";
import { useCart } from "@/app/components/hooks/cartProvider";
import { signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const { countAllItems } = useCart();
  const cartItems = countAllItems();
  const { status, data: session } = useSession();
  console.log(session);
  const showSession = () => {
    if (status === "authenticated") {
      return (
        <>
          <p className="list font-medium text-xs">
            Logged in as {session.user.firstName}
          </p>
          <button
            className="transition duration-150 ease text-xs hover:text-gray-500"
            onClick={() => {
              signOut();
            }}
          >
            Logout
          </button>
        </>
      );
    } else if (status === "loading") {
      return <span className="text-[#888] text-xs">Loading...</span>;
    } else {
      return (
        <>
          <li className="list text-xs hover:text-gray-500">
            <Link href={"/signup"} prefetch={false}>
              Join Us
            </Link>
          </li>
          <li className="list text-xs hover:text-gray-500">
            <Link href={"/signin"} prefetch={false}>
              Sign In
            </Link>
          </li>
        </>
      );
    }
  };

  return (
    <div className="container flex justify-center max-w-full flex-col items-center">
      {/* TOP BAR */}
      <div className="flex w-full bg-slate-100  justify-center sm:hidden">
        <div className="flex justify-between w-[1400px] max-w-screen-xl h-9 items-center sm:w-[95vw]">
          {/* TOPBAR LOGO */}
          <div className="pl-12 sm:pl-1  ">
            <Image src={logo1} alt="Nike Logo" className="w-6 h-6" />
          </div>
          {/* TOPBAR NAV ITEMS */}
          <div>
            <ul className="flex gap-1 pr-9 pl-9  font-medium sm:gap:1 sm:pr-1">
              <li className="list text-xs cursor-pointer hover:text-gray-500">
                Find a Store
              </li>
              <li className="list text-xs cursor-pointer hover:text-gray-500">
                <Link href={"/contact"}>Help</Link>
              </li>
              {showSession()}
            </ul>
          </div>
        </div>
      </div>
      {/* BOTTOM BAR */}
      <div className="h-16 flex justify-between  w-full max-w-screen-xl items-center sm:w-[95vw] sm:overflow-hidden">
        {/* BOTTOM BAR LOGO */}
        <div className="pl-12 sm:pl-1">
          <Link href={"/"}>
            <Image src={logo2} alt="Nike Logo" />
          </Link>
        </div>
        {/* BOTTOM BAR NAV ITEMS */}
        <div>
          <ul className="flex items-center gap-4 pr-9 cursor-pointer text-base font-medium pl-40 sm:hidden md:hidden sm:pr-3 lg:pl-3">
            <li className="text-center hover:underline decoration-2">
              <Link href={"/all-products"}>New & Featured</Link>
            </li>
            <li className="text-center hover:underline decoration-2">
              <Link href={"/all-products"}>Men</Link>
            </li>
            <li className="text-center hover:underline decoration-2">
              <Link href={"/all-products"}>Women</Link>
            </li>
            <li className="text-center hover:underline decoration-2">
              <Link href={"/all-products"}>Kids</Link>
            </li>
            <li className="text-center hover:underline decoration-2">
              <Link href={"/all-products"}>Sale</Link>
            </li>
            <li className="text-center hover:underline decoration-2">
              <Link href={"/all-products"}>SNKRS</Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="flex items-center">
            {/* SEARCH COMPONENT */}
            <Search />

            {/* FAVOURITE BUTTON */}
            <div className="flex gap-3 p-2 pr-[38px] sm:pr-3">
              <Link href={"/favourites"}>
                <div className="flex justify-center items-center h-10 w-10 rounded-full border-[1px] hover:bg-gray-200">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    viewBox="0 0 23 23"
                    role="img"
                    width="24px"
                    height="24px"
                    fill="none"
                  >
                    <path
                      stroke="currentColor"
                      strokeWidth="1.5"
                      d="M16.794 3.75c1.324 0 2.568.516 3.504 1.451a4.96 4.96 0 010 7.008L12 20.508l-8.299-8.299a4.96 4.96 0 010-7.007A4.923 4.923 0 017.205 3.75c1.324 0 2.568.516 3.504 1.451l.76.76.531.531.53-.531.76-.76a4.926 4.926 0 013.504-1.451"
                    ></path>
                  </svg>
                </div>
              </Link>

              {/* CART BUTTON */}
              <Link href={"/cart"}>
                <div
                  cart-value={cartItems > 0 ? cartItems : " "}
                  className="after:content-[attr(cart-value)] after:absolute after:top-[13px] after:font-medium after:text-xs/[17px] relative border-[1px] flex justify-center items-center h-10 w-10 rounded-full hover:bg-gray-200"
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    viewBox="0 0 23 23"
                    role="img"
                    width="24px"
                    height="24px"
                    fill="none"
                  >
                    <path
                      stroke="currentColor"
                      strokeWidth="1.5"
                      d="M8.25 8.25V6a2.25 2.25 0 012.25-2.25h3a2.25 2.25 0 110 4.5H3.75v8.25a3.75 3.75 0 003.75 3.75h9a3.75 3.75 0 003.75-3.75V8.25H17.5"
                    ></path>
                  </svg>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
