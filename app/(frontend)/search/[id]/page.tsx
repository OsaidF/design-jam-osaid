import React from 'react'
import { defineQuery } from 'next-sanity'
import ProductList from '@/app/components/ui/productList/productList'
import { client } from '@/sanity/lib/client'
import type { Metadata } from "next";

const PRODUCT_QUERY = defineQuery(`*[
    _type == "product" && productName match $queryString]{
    _id, productName, category, colors, price, gender, inventory, image, description, status
    }`)

type paramsType =  Promise<{id: string}>
type metadataProps = {
  params:  Promise<{id: string}>
}

async function getSearch(params: paramsType) {
  let decode = decodeURI((await params).id)
  const data = await client.fetch(PRODUCT_QUERY, {
    queryString: decode,
  });
  return data
}

export async function generateMetadata(
  { params }: metadataProps
): Promise<Metadata> { 
    // USING FETCH FUNCTION TO GENERATE METADATA
    const product = await getSearch(params)
     let length = product.length
  return {
    title: `(${length})` + " Nike Search: " + decodeURI((await params).id), 
    description: 'Nike Search for products'
  }
}

export default async function Page(props: { params: paramsType}){
  const data = await getSearch(props.params)
  return (
    <div className='flex justify-center min-h-[100vh] w-full'>
      <div className='flex flex-col  w-full max-w-[1440px] relative'>
        {/* PRODUCTS */}
        {data && <ProductList products={data} />}
        {!data && <h1>LOADING</h1>}
      </div>
    </div>
  )
}