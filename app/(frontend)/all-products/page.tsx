import React from 'react'
import { defineQuery } from 'next-sanity'
import { sanityFetch } from '@/sanity/lib/live'
import ProductList from '../../components/ui/productsList/ProductList'


const PRODUCTS_QUERY = defineQuery(`*[
  _type == "product" ]  
  { _id, productName, category, colors, price, reviews, gender, inventory, image, status }`)

export default async function index(){
  const {data: products} = await sanityFetch({query: PRODUCTS_QUERY})

  return (
    <div className='flex justify-center min-h-[100vh] w-full'>
      <div className='flex flex-col w-full max-w-[1440px] relative'>
        {/* PRODUCTS */}
        <ProductList products={products} />
      </div>
    </div>
  )
}