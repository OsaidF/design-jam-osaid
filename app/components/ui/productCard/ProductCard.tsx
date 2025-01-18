import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'
import { urlFor } from '@/sanity/lib/image'

interface Product {
  _id: number,
  productName: string
  category: string,
  price: number,
  inventory: number,
  colors: string[],
  status: string,
  image: string,
}

interface props {
  product: Product
}

const Product: FC<props> = ({ product }) => {
  return (
    <Link href={`/product/${product._id}`} className='flex w-[32%] sm:w-[95vw]' key={product._id}>
          <div className='flex flex-col max-w-[350px] max-h-[500px] h-min hover:bg-gray-100 pb-3 
          rounded-md product sm:max-w-[95vw] sm:max-h-fit'>
             <Image src={urlFor(product.image).width(323).height(323).url()} width={323} height={323} alt='Product Image' />
            <div className='pl-3'>
              <h3 className='font-medium text-orange-700'>{product.status}</h3>
              <h3 className='font-medium productTitle'>{product.productName}</h3>
              <h3 className='font-medium text-gray-500'>{product.category}</h3>
              <h3 className='font-medium text-gray-500'>{product.colors}</h3>
              <h3 className='font-medium pt-3'>MRP: ₹&nbsp;{product.price}</h3>
            </div>
          </div>
          </Link>
  )
}

export default Product