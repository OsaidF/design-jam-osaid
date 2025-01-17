'use client'
import React, { useState } from 'react'
import filterImg from '@/public/allproducts/filter.png'
import arrowDown from '@/public/allproducts/arrowdown.png'
import Image from 'next/image'
import Products from '@/app/data/products'
import Link from 'next/link'
import { headers } from "next/headers";

const index = () => {
  const [filter, setFilter ] = useState('');
  const [genderFilter, setGenderFilter] = useState('');
  const [showFilters, setShowFilters ] = useState(true)

  const checkBoxGenderValues = {
    unisex: "unisex",
    men: "men",
    women: "women",
    all: '',
  }

  const checkBoxAgeValues = {

  }

  const filteredProducts = Products.filter((product) =>
    product.category.toLowerCase().includes(filter.toLowerCase()) &&
    (genderFilter === '' || product.gender.toLowerCase().includes(genderFilter.toLowerCase()))
  );
  return (
    <div className='flex justify-center min-h-[100vh] w-full'>
      <div className='flex flex-col  w-full max-w-[1440px] relative'>
        <div className='flex h-[50px] sticky top-0 left-0 w-full justify-between items-center 
        pl-[48px] pr-[48px] mt-10 bg-white drop-shadow-sm z-10 sm:pl-3 sm:pr-3'>
          <h1 className='font-medium text-2xl'>New ({filteredProducts.length})</h1>
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

        
        <div className='flex w-full justify-center relative md:w-[100vw]'>
          {/* SIDEBAR */}
        <div className='h-[1000px] w-1/5 sticky overflow-scroll top-0 left-0 right-0 pl-[48px] pr-[48px] scrollbar
        sm:w-[0px] sm:hidden sm:overflow-hidden sm:p-[0px] md:w-[0px] md:p-[0px] md:overflow-hidden'
        style={{display: showFilters ? "block" : "none"}}>
            <div className='flex flex-col mt-12'>
                <ul className='flex flex-col gap-[14px] text-sm font-medium'>
                  <li className='cursor-pointer hover:underline' onClick={() => setFilter('')}>All Items</li>
                  <li className='cursor-pointer hover:underline' onClick={() => setFilter('shoes')}>Shoes</li>
                  <li className='cursor-pointer hover:underline' onClick={() => setFilter('bra')}>Sports Bras</li>
                  <li className='cursor-pointer hover:underline' onClick={() => setFilter('tops')}>Tops & T-Shirts</li>
                  <li className='cursor-pointer hover:underline' onClick={() => setFilter('tops')}>Hoodies & Sweatshirts</li>
                  <li className='cursor-pointer hover:underline' onClick={() => setFilter('jacket')}>Jackets</li>
                  <li className='cursor-pointer hover:underline' onClick={() => setFilter('jacket')}>Trousers & Tights</li>
                  <li className='cursor-pointer hover:underline' onClick={() => setFilter('shorts')}>Shorts</li>
                  <li className='cursor-pointer hover:underline' onClick={() => setFilter('shorts')}>Tracksuits</li>
                  <li className='cursor-pointer hover:underline' onClick={() => setFilter('shorts')}>Jumpsuits & Rompers</li>
                  <li className='cursor-pointer hover:underline' onClick={() => setFilter('shorts')}>Skirts & Dresses</li>
                  <li className='cursor-pointer hover:underline' onClick={() => setFilter('shorts')}>Socks</li>
                  <li className='cursor-pointer hover:underline' onClick={() => setFilter('shorts')}>Accessories & Equipment</li>
                </ul>
            </div>
            <div>
              <div className='pt-[30px]'>
                <div className='flex justify-between items-center'>
                <h1 className='font-medium'>Gender</h1>
                <Image src={arrowDown} alt='arrow down' className='h-[14px] w-[14px]' />
                </div>
                <div className='flex items-center gap-3 pt-1'>
                  <input type='checkbox' value={checkBoxGenderValues.all}
                  checked={genderFilter === checkBoxGenderValues.all}
                  onChange={({ target }) => setGenderFilter((target as HTMLInputElement).value)}
                  /> 
                  <label className='font-normal text-sm'>All</label>
                </div>
                <div className='flex items-center gap-3 pt-1'>
                  <input type='checkbox' value={checkBoxGenderValues.men}
                  checked={genderFilter === checkBoxGenderValues.men}
                  onChange={({ target }) => setGenderFilter((target as HTMLInputElement).value)}
                  /> 
                  <label className='font-normal text-sm'>Men</label>
                </div>
                <div className='flex items-center gap-3 pt-1'>
                  <input type='checkbox' value={checkBoxGenderValues.women}
                  checked={genderFilter === checkBoxGenderValues.women}
                  onChange={({ target }) => setGenderFilter((target as HTMLInputElement).value)}
                  /> <label className='font-normal text-sm'>Women</label>
                </div>
                <div className='flex items-center gap-3 pt-1'>
                  <input type='checkbox' value={checkBoxGenderValues.unisex}
                  
                  onChange={({ target }) => setGenderFilter((target as HTMLInputElement).value)}
                  /> <label className='font-normal text-sm'>Unisex</label>
                </div>
              </div>

              <div className='pt-[30px]'>
                <div className='flex justify-between items-center'>
                <h1 className='font-medium'>Kids'</h1>
                <Image src={arrowDown} alt='arrow down' className='h-[14px] w-[14px]' />
                </div>
                <div className='flex items-center gap-3 pt-1'>
                  <input type='checkbox' /> <label className='font-normal text-sm'>Boys</label>
                </div>
                <div className='flex items-center gap-3 pt-1'>
                  <input type='checkbox' /> <label className='font-normal text-sm'>Girls</label>
                </div>
              </div>

              <div className='pt-[30px]'>
                <div className='flex justify-between items-center'>
                <h1 className='font-medium'>Shop By Price</h1>
                <Image src={arrowDown} alt='arrow down' className='h-[14px] w-[14px]' />
                </div>
                <div className='flex items-center gap-3 pt-1'>
                  <input type='checkbox' /> <label className='font-normal text-sm'>Under ₹&nbsp;2500</label>
                </div>
                <div className='flex items-center gap-3 pt-1'>
                  <input type='checkbox' /> <label className='font-normal text-sm'>₹&nbsp;2500 - ₹&nbsp;max</label>
                </div>
              </div>

            </div>
        </div>

        {/* PRODUCTS */}
        <div className='flex w-4/5 flex-wrap gap-3 pt-[25px] sm:w-[95vw] sm:justify-center md:w-[95vw] md:justify-center'>
        {filteredProducts.map((i) => (
          <Link href={`/product/${i.id}`} className='flex w-[32%] sm:w-[95vw]' key={i.id}>
          <div className='flex flex-col max-w-[350px] max-h-[500px] h-min hover:bg-gray-100 pb-3 
          rounded-md product sm:max-w-[95vw] sm:max-h-fit'>
            <Image src={i.img} alt='Product Image' />
            <div className='pl-3'>
              <h3 className='font-medium text-orange-700'>{i.promo}</h3>
              <h3 className='font-medium productTitle'>{i.name}</h3>
              <h3 className='font-medium text-gray-500'>{i.subTitle}</h3>
              <h3 className='font-medium text-gray-500'>{i.colours}</h3>
              <h3 className='font-medium pt-3'>MRP: ₹&nbsp;{i.price}</h3>
            </div>
          </div>
          </Link>
        ))}
          
        </div>
        </div>
        
      </div>
    </div>
  )
}

export default index