import Image from 'next/image'
import React from 'react'
import product from '@/app/data/products'
import heart from '@/public/cart/heart.png'
import bin from '@/public/cart/bin.png'
import Link from 'next/link'

const Page = () => {
  return (
    <div className='flex justify-center h-[100vh] min-h-[800px] w-full'>
        <div className='flex max-w-[1000px] w-full gap-2 sm:flex-col sm:items-center md:flex-col md:items-center'>
            <div className='w-3/4 sm:w-[95vw] md:w-[95vw]  md:pl-[2.5vw] md:pr-[2.5vw]'>
                <h1 className='font-medium pl-6'>Free Delivery</h1>
                <h3 className='font-medium pl-6'>Applies to order of ₹ 14,000 or more <span className='underline pl-3'>Read More</span></h3>
                <h1 className='text-2xl font-medium pt-5'>Bag</h1>
                <div className='flex flex-col sm:items-center sm:w-full md:w-full'>
                    <div className='flex'>
                        <div className='flex w-1/4 pt-5 sm:w-1/3'>
                            <Image src={product[0].img} alt='image' />
                        </div>
                        <div className='flex flex-col w-3/4 pt-5'>
                        <div className='flex justify-between pl-4 pr-4'>
                            <h1 className='text-lg font-medium text-base'>{product[0].name}</h1>
                            <h1 className='font-medium'>₹&nbsp;{product[0].price}</h1>
                        </div>
                        <h1 className='font-medium pl-4 text-gray-500'>{product[0].subTitle}</h1>
                        <div className='flex gap-3 pl-4 pt-16'>
                            <Image src={heart} alt='heart' />
                            <Image src={bin} alt='bin' />
                        </div>
                        </div>
                        
                    </div>

                    <div className='flex'>
                        <div className='flex w-1/4 pt-5 sm:w-1/3'>
                            <Image src={product[1].img} alt='image' />
                        </div>
                        <div className='flex flex-col w-3/4 pt-5'>
                        <div className='flex justify-between pl-4 pr-4'>
                            <h1 className='text-lg font-medium text-base'>{product[1].name}</h1>
                            <h1 className='font-medium'>₹&nbsp;{product[1].price}</h1>
                        </div>
                        <h1 className='font-medium pl-4 text-gray-500'>{product[1].subTitle}</h1>
                        <div className='flex gap-3 pl-4 pt-16'>
                            <Image src={heart} alt='heart' />
                            <Image src={bin} alt='bin' />
                        </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className='flex flex-col w-1/4 p-1 sm:w-[95vw] md:w-[95vw] md:pl-[2.5vw] md:pr-[2.5vw]'>
                <h1 className='font-medium text-2xl'>Summary</h1>
                <div className='flex justify-between'>
                    <h3 className='pt-6 font-medium'>Subtotal</h3>
                    <h3 className='pt-6 font-medium'>₹ 23,000</h3>
                </div>
                <div className='flex justify-between'>
                    <h3 className='pt-3 font-medium'>Estimated Delivery & Handling</h3>
                    <h3 className='pt-3 font-medium'>Free</h3>
                </div>
                <div className='flex justify-between'>
                    <h3 className='pt-6 font-medium'>Total</h3>
                    <h3 className='pt-6 font-medium'>₹ 23,000</h3>
                </div>
                <Link href={'/checkout'} className='w-full'>
                    <button className='bg-black text-white rounded-[30px] p-2 mt-6'>Member Checkout</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Page