"use client";
import { product } from "@/app/types/product";
import React, { useState, useEffect } from "react";
import ProductCard from "@/app/components/ui/productCard/ProductCard";
import arrowDown from "@/public/allproducts/arrowdown.png";
import filterImg from '@/public/allproducts/filter.png'
import Image from "next/image";

type ProductListProps = {
  products: product[];
};

const ProductList = ({ products }: ProductListProps) => {
  const [categoryFilter, setCategoryFilter] = useState("");
  const [genderFilter, setGenderFilter] = useState("all");
  const [showFilters, setShowFilters] = useState(true);
  const [priceFilter, setPriceFilter] = useState<string[]>(["0", "99999"])

  const checkBoxGenderValues = {
    unisex: "unisex",
    men: "men",
    women: "women",
    all: "all",
  };

  const priceValues = {
    all: ["0", "999999"],
    one: ["0", "5000"],
    two: ["5000", "10000"],
    three: ["5000", "10000"],
  }

  const filteredProducts = products.filter(
    (product) =>
      product.category.toLowerCase().includes(categoryFilter.toLowerCase())
      &&  (genderFilter === 'all' || product.gender.toLowerCase() === genderFilter.toLowerCase())
      && ( product.price > Number(priceFilter[0]) && product.price < Number(priceFilter[1]))
  );

  return (
    <>
     <div className='flex bg-slate-100 h-[50px] sticky top-0 left-0 w-full justify-between items-center 
        pl-[48px] pr-[48px] mt-10  drop-shadow-sm z-10 sm:pl-3 sm:pr-3 sm:mt-2'>
          <h1 className='font-medium text-2xl'> New ({filteredProducts.length})</h1>
          <div className='flex gap-4'>
           <div className='flex gap-3 p-1 rounded-md cursor-pointer hover:bg-gray-200 sm:hidden md:hidden' onClick={() => setShowFilters(!showFilters)}>
            <h1 className='font-medium' >Hide Filters</h1>
            <Image src={filterImg} alt='filter' />
          </div> 
          
          <div className='flex gap-3 items-center p-1 rounded-md cursor-pointer hover:bg-gray-200'>
          <h1 className='font-medium'>Sort By</h1>
            <Image src={arrowDown} height={4} className='w-[14px] h-[14px]' alt='filter' />
          </div>
        </div>
        </div>
      <div className="flex w-full justify-center relative md:w-[100vw] ">
        {/* SIDEBAR */}
        <div
          className="animate-in slide-in-from-left-96 h-[1000px] w-1/5 sticky overflow-y-scroll top-0 left-0 right-0 pl-[48px] pr-[48px] scrollbar
        sm:w-[0px] sm:hidden sm:overflow-hidden sm:p-[0px] md:w-[0px] md:p-[0px] md:overflow-hidden"
          style={{ display: showFilters ? "block" : "none" }}
        >
          <div className="flex flex-col mt-12">
            <ul className="flex flex-col gap-[14px] text-sm font-medium">
              <li
                className="cursor-pointer hover:underline"
                onClick={() => setCategoryFilter("")}
              >
                All Items
              </li>
              <li
                className="cursor-pointer hover:underline"
                onClick={() => setCategoryFilter("shoes")}
              >
                Shoes
              </li>
              <li
                className="cursor-pointer hover:underline"
                onClick={() => setCategoryFilter("bra")}
              >
                Sports Bras
              </li>
              <li
                className="cursor-pointer hover:underline"
                onClick={() => setCategoryFilter("tops")}
              >
                Tops & T-Shirts
              </li>
              <li
                className="cursor-pointer hover:underline"
                onClick={() => setCategoryFilter("tops")}
              >
                Hoodies & Sweatshirts
              </li>
              <li
                className="cursor-pointer hover:underline"
                onClick={() => setCategoryFilter("jacket")}
              >
                Jackets
              </li>
              <li
                className="cursor-pointer hover:underline"
                onClick={() => setCategoryFilter("jacket")}
              >
                Trousers & Tights
              </li>
              <li
                className="cursor-pointer hover:underline"
                onClick={() => setCategoryFilter("shorts")}
              >
                Shorts
              </li>
              <li
                className="cursor-pointer hover:underline"
                onClick={() => setCategoryFilter("shorts")}
              >
                Tracksuits
              </li>
              <li
                className="cursor-pointer hover:underline"
                onClick={() => setCategoryFilter("shorts")}
              >
                Jumpsuits & Rompers
              </li>
              <li
                className="cursor-pointer hover:underline"
                onClick={() => setCategoryFilter("shorts")}
              >
                Skirts & Dresses
              </li>
              <li
                className="cursor-pointer hover:underline"
                onClick={() => setCategoryFilter("shorts")}
              >
                Socks
              </li>
              <li
                className="cursor-pointer hover:underline"
                onClick={() => setCategoryFilter("shorts")}
              >
                Accessories & Equipment
              </li>
            </ul>
          </div>
          <div>
            <div className="pt-[30px]">
              <div className="flex justify-between items-center">
                <h1 className="font-medium">Gender</h1>
                <Image
                  src={arrowDown}
                  alt="arrow down"
                  className="h-[14px] w-[14px]"
                />
              </div>
              <div className="flex items-center gap-3 pt-1">
                <input
                  type="checkbox"
                  value={checkBoxGenderValues.all}
                  checked={genderFilter === checkBoxGenderValues.all}
                  onChange={({ target }) =>
                    setGenderFilter((target as HTMLInputElement).value)
                  }
                />
                <label className="font-normal text-sm">All</label>
              </div>

              <div className="flex items-center gap-3 pt-1">
                <input
                  type="checkbox"
                  value={checkBoxGenderValues.men}
                  checked={genderFilter === checkBoxGenderValues.men}
                  onChange={({ target }) =>
                    setGenderFilter((target as HTMLInputElement).value)
                  }
                />
                <label className="font-normal text-sm">Men</label>
              </div>
              
              <div className="flex items-center gap-3 pt-1">
                <input
                  type="checkbox"
                  checked={genderFilter === checkBoxGenderValues.unisex}
                  value={checkBoxGenderValues.unisex}
                  onChange={({ target }) =>
                    setGenderFilter((target as HTMLInputElement).value)
                  }
                />
                <label className="font-normal text-sm">Unisex</label>
              </div>

              <div className="flex items-center gap-3 pt-1">
                <input
                  type="checkbox"
                  value={checkBoxGenderValues.women}
                  checked={genderFilter === checkBoxGenderValues.women}
                  onChange={({ target }) =>
                    setGenderFilter((target as HTMLInputElement).value)
                  }
                />
                <label className="font-normal text-sm">Women</label>
              </div>

               
            </div>

            <div className="pt-[30px]">
              <div className="flex justify-between items-center">
                <h1 className="font-medium">Shop By Price</h1>
                <Image
                  src={arrowDown}
                  alt="arrow down"
                  className="h-[14px] w-[14px]"
                />
              </div>

              <div className="flex items-center gap-3 pt-1">
                <input type="checkbox"
                value={priceValues.all}
                checked={JSON.stringify(priceFilter) == JSON.stringify(priceValues.all)}
                onChange={() =>
                  setPriceFilter(priceValues.all)
                }
                />
                <label className="font-normal text-sm">All</label>
              </div>

              <div className="flex items-center gap-3 pt-1">
                <input type="checkbox"
                value={priceValues.one}
                checked={JSON.stringify(priceFilter) == JSON.stringify(priceValues.one)}
                onChange={() =>
                  setPriceFilter(priceValues.one)
                }
                />
                <label className="font-normal text-sm">₹&nbsp;00 to ₹&nbsp;5,000</label>
              </div>

              <div className="flex items-center gap-3 pt-1">
                <input type="checkbox"
                value={priceValues.two}
                checked={JSON.stringify(priceFilter) == JSON.stringify(priceValues.two)}
                onChange={() =>
                  setPriceFilter(priceValues.two)
                }
                />
                <label className="font-normal text-sm">₹&nbsp;5,000 to ₹&nbsp;10,000</label>
              </div>

              <div className="flex items-center gap-3 pt-1">
                <input type="checkbox"
                value={priceValues.three}
                checked={JSON.stringify(priceFilter) == JSON.stringify(priceValues.three)}
                onChange={() =>
                  setPriceFilter(priceValues.three)
                }
                />
                <label className="font-normal text-sm">₹&nbsp;5,000 to ₹&nbsp;10,000</label>
              </div>
            </div>
          </div>
        </div>

        <div className="flex w-4/5 flex-wrap gap-3 pt-[25px] pb-[30px] sm:w-[100vw] sm:justify-center md:w-[95vw] md:justify-center">
          {filteredProducts.map((i: any) => (
            <ProductCard product={i} key={i._id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductList;