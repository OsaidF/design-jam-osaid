import React, { Suspense } from 'react'
import { defineQuery } from 'next-sanity'
import { sanityFetch } from '@/sanity/lib/live'
import ProductList from '@/app/components/ui/productList/productList'


const PRODUCTS_QUERY = defineQuery(`*[
  _type == "product" ]  
  { _id, productName, category, colors, price, reviews, gender, inventory, image, status }`)

export default async function index(){
  const {data: products} = await sanityFetch({query: PRODUCTS_QUERY})

  return (
    <div className='flex justify-center min-h-[100vh] w-full'>
      <div className='flex flex-col w-full max-w-[1440px] relative'>
        {/* PRODUCTS */}
        <Suspense fallback={<Loading />}>
        <ProductList products={products} />
        </Suspense>
      </div>
    </div>
  )
}

function Loading() {
  return (
    <div className="flex items-center justify-center w-[100vw] h-[50vw]">
        <div className="h-10 w-10">
      <svg
        className="h-10 w-10 animate-spin text-black motion-reduce:hidden"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
      </div>
    </div>
  );
}