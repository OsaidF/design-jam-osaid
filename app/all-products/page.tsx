import React from 'react'
import filterImg from '@/public/allproducts/filter.png'
import arrowDown from '@/public/allproducts/arrowdown.png'
import Image from 'next/image'
import { defineQuery } from 'next-sanity'
import { sanityFetch } from '@/sanity/lib/live'
import Product from '../components/ui/productCard/ProductCard'


const PRODUCTS_QUERY = defineQuery(`*[
  _type == "product"]{
  _id, productName, category, colors, price, inventory, image, description, status
  }`)

export default async function index(){
  const {data: products} = await sanityFetch({query: PRODUCTS_QUERY})

  return (
    <div className='flex justify-center min-h-[100vh] w-full'>
      <div className='flex flex-col  w-full max-w-[1440px] relative'>
        <div className='flex h-[50px] sticky top-0 left-0 w-full justify-between items-center 
        pl-[48px] pr-[48px] mt-10 bg-white drop-shadow-sm z-10 sm:pl-3 sm:pr-3'>
          <h1 className='font-medium text-2xl'>New</h1>
          <div className='flex gap-4'>
          {/* <div className='flex gap-3 p-1 rounded-md cursor-pointer hover:bg-gray-200 sm:hidden md:hidden' onClick={() => setShowFilters(!showFilters)}>
            <h1 className='font-medium' >Hide Filters</h1>
            <Image src={filterImg} alt='filter' />
          </div> */}
          
          <div className='flex gap-3 items-center p-1 rounded-md cursor-pointer hover:bg-gray-200'>
          <h1 className='font-medium'>Sort By</h1>
            <Image src={arrowDown} height={4} className='w-[14px] h-[14px]' alt='filter' />
          </div>
        </div>
        </div>

        
        <div className='flex w-full justify-center relative md:w-[100vw]'>
          

        {/* PRODUCTS */}
        <div className='flex w-4/5 flex-wrap gap-3 pt-[25px] sm:w-[95vw] sm:justify-center md:w-[95vw] md:justify-center'>
           {
            products.map((i: any) => (
              <Product product={i} />
            ))
          }
        </div>
        </div>
        
      </div>
    </div>
  )
}