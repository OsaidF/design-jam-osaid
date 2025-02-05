"use client";
import Image from "next/image";
import React from "react";
import heart from "@/public/cart/heart.png";
import bin from "@/public/cart/bin.png";
import Link from "next/link";
import { useCart } from "@/app/components/hooks/cartProvider";
import { urlFor } from "@/sanity/lib/image";
import { useCookies } from 'next-client-cookies'

export default function Page(){
  const { items, updateCart, countTotalPrice } = useCart();
  let price = countTotalPrice();
  const cookies = useCookies()

  const products = cookies.get('nike.com')
  if(products){
    console.log("Cookies Value: ", JSON.parse(products))
  }

  return (
    <div className="flex justify-center h-[100vh] min-h-[800px] w-full sm:h-auto">
      <div className="flex p-2 max-w-[1000px] w-full gap-2 sm:flex-col sm:items-center md:flex-col md:items-center">
        <div className="w-4/6 sm:w-[95vw] md:w-[95vw]  md:pl-[2.5vw] md:pr-[2.5vw]">
          <h1 className="font-medium pl-6">Free Delivery</h1>
          <h3 className="font-medium pl-6">
            Applies to order of ₹ 14,000 or more
            <span className="underline pl-3">Read More</span>
          </h3>
          <h1 className="text-2xl font-medium pt-5">Bag</h1>
          <div className="flex flex-col sm:items-center sm:w-full md:w-full overflow-scroll scrollbar">
            {items && (
              <>
                {items.map((i) => (
                  <div className="flex items" key={i.product._id}>
                    <div className="flex w-1/4 pt-5 sm:w-1/3 sm:min-w-[150px]">
                      <Image
                        src={urlFor(i.product.image)
                          .width(592)
                          .height(592)
                          .url()}
                        width={592}
                        height={592}
                        alt="image"
                      />
                    </div>
                    <div className="flex flex-col w-3/4 pt-5">
                      <div className="flex justify-between pl-4 pr-4 sm:flex-col">
                        <h1 className="text-lg font-medium">
                          {i.product.productName}
                        </h1>
                        <h1 className="font-medium">
                          ₹&nbsp;{i.product.price}
                        </h1>
                      </div>
                      <h1 className="font-medium pl-4 text-gray-500 first-letter:capitalize">
                        {i.product.gender === "unisex"
                          ? i.product.gender + " " + i.product.category
                          : i.product.gender + "'s " + i.product.category}
                      </h1>
                      <div className="flex items-center gap-3 pl-4 pt-8 sm:pt-0 md:pt-0">
                        <div className="flex items-center gap-3 border-[1px] rounded-full">
                          <button
                            className="flex items-center justify-center text-xl h-10 w-10 rounded-full hover:bg-gray-200"
                            onClick={() => updateCart(i.product, -1)}
                          >
                            {i.count === 1 ? (
                              <Image
                                src={bin.src}
                                alt="bin"
                                width={17}
                                height={17}
                                className="w-[17x] h-[17px]"
                              />
                            ) : (
                              <svg
                                aria-hidden="true"
                                focusable="false"
                                viewBox="0 0 24 24"
                                role="img"
                                width="24px"
                                height="24px"
                                fill="none"
                              >
                                <path
                                  stroke="currentColor"
                                  strokeMiterlimit="10"
                                  strokeWidth="1.5"
                                  d="M18 12H6"
                                ></path>
                              </svg>
                            )}
                          </button>
                          <h3 className="text-xl">{i.count}</h3>
                          <button
                            className="flex items-center justify-center text-xl h-10 w-10 rounded-full hover:bg-gray-200"
                            onClick={() => updateCart(i.product, 1)}
                          >
                            <svg
                              aria-hidden="true"
                              focusable="false"
                              viewBox="0 0 24 24"
                              role="img"
                              width="24px"
                              height="24px"
                              fill="none"
                            >
                              <path
                                stroke="currentColor"
                                strokeMiterlimit="10"
                                strokeWidth="1.5"
                                d="M18 12H6m6 6V6"
                              ></path>
                            </svg>
                          </button>
                        </div>
                        <button className="flex items-center justify-center h-10 w-10 border-[1px] rounded-full hover:bg-gray-200">
                          <Image
                            src={heart}
                            alt="heart"
                            className="w-[20px] h-[20px] "
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </>
            )}
            {items.length == 0 && (
              <h1 className="w-full text-center pt-10 font-semibold text-xl">
                There are no items in your bag
              </h1>
            )}
          </div>
        </div>
        <div className="flex flex-col w-2/6 p-1 sm:w-[95vw] md:w-[95vw] md:pl-[2.5vw] md:pr-[2.5vw]">
          <h1 className="font-medium text-2xl pt-5">Summary</h1>
          <div className="flex justify-between pt-3">
            <h3 className="font-medium">Subtotal</h3>
            <h3 className="font-medium">₹&nbsp;{price}</h3>
          </div>
          <div className="flex justify-between pb-3">
            <h3 className="pt-3 font-medium">Estimated Delivery & Handling</h3>
            <h3 className="pt-3 font-medium">Free</h3>
          </div>
          <div className="flex items-center justify-between pt-3 pb-3 border-t-[1px] border-b-[1px]">
            <h3 className="font-medium">Total</h3>
            <h3 className="font-medium">₹&nbsp;{price}</h3>
          </div>
          <Link href={"/checkout"} className="w-full">
            <button className="bg-black w-full font-medium text-white rounded-[30px] p-3 mt-6 hover:bg-zinc-800">
              Member Checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};