import Image from "next/image";
import React from "react";
import logo1 from "@/public/navbar/person.png";
import logo2 from "@/public/navbar/Frame.png";
import search from "@/public/navbar/search.png";
import favourite from "@/public/navbar/favourite.png";
import cart from "@/public/navbar/cart.png";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="container flex justify-center max-w-full flex-col items-center">
      <div className="flex w-full bg-slate-100  justify-center sm:hidden">
        <div className="flex justify-between w-[1400px] max-w-screen-xl h-9 items-center sm:w-[95vw]">
          <div className="pl-12 sm:pl-1  ">
            <Image src={logo1} alt="Nike Logo" className="w-6 h-6" />
          </div>
          <div>
            <ul className="flex gap-4 pr-9 pl-9 cursor-pointer font-medium sm:gap:1 sm:pr-1">
              <li className="list text-xs ">Find a Store</li>
              <li className="list text-xs">
                <Link href={"/contact"}>Help</Link>
              </li>
              <li className="list text-xs">
                <Link href={"/signup"}>Join Us</Link>
              </li>
              <li className="list text-xs">
                <Link href={"/signin"}>Sign In</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="h-16 flex justify-between  w-full max-w-screen-xl items-center sm:w-[95vw] sm:overflow-hidden">
        <div className="pl-12 sm:pl-1">
          <Link href={"/"}>
            <Image src={logo2} alt="Nike Logo" />
          </Link>
        </div>
        <div>
          <ul className="flex items-center gap-4 pr-9 cursor-pointer text-base font-medium pl-40 sm:hidden md:hidden sm:pr-3 lg:pl-3">
            <li className="text-center">
              <Link href={"/all-products"}>New & Featured</Link>
            </li >
            <li className="text-center">
              <Link href={"/all-products"}>Men</Link>
            </li>
            <li className="text-center">
              <Link href={"/all-products"}>Women</Link>
            </li>
            <li className="text-center">
              <Link href={"/all-products"}>Kids</Link>
            </li>
            <li className="text-center">
              <Link href={"/all-products"}>Sale</Link>
            </li>
            <li className="text-center">
              <Link href={"/all-products"}>SNKRS</Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="flex items-center">
            <Image
              src={search}
              alt="Search"
              className="h-4 w-4 left-7 relative"
            />
            <input
              type="text"
              className="bg-slate-100 text-base h-10 w-[180px] rounded-2xl p-2 pl-10"
              placeholder="Search"
            ></input>
            <div className="flex gap-3 p-2 pr-[38px] sm:pr-3">
              <div className="flex justify-center items-center h-10 w-10 rounded-full hover:bg-gray-200">
                <Image src={favourite} alt="Search" className="h-[22px] w-[22px]" />
              </div>
              <Link href={"/cart"}>
                <div className="flex justify-center items-center h-10 w-10 rounded-full hover:bg-gray-200">
                  <Image src={cart} alt="Search" className="h-[18px] w-[18px]" />
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
