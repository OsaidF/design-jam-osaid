import Products from '@/app/data/products';
import Image from 'next/image';
import React, { useState } from 'react'
import arrowDown from '@/public/allproducts/arrowdown.png'

const Sidebar = () => {
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
    <>
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
    </>
  )
}

export default Sidebar