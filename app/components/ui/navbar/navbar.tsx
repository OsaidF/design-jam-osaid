import Image from 'next/image'
import React from 'react'
import logo1 from '@/public/navbar/person.png'
import logo2 from '@/public/navbar/Frame.png'
import search from '@/public/navbar/search.png'
import favourite from '@/public/navbar/favourite.png'
import cart from '@/public/navbar/cart.png'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='container flex justify-center max-w-full flex-col items-center'>
        <div className='flex w-full bg-slate-100  justify-center'>
        <div className='flex justify-between w-[1400px] max-w-screen-xl h-9 items-center sm:w-[95vw]'>
            <div className='pl-12 sm:pl-1'>
                <Image src={logo1} alt='Nike Logo' className='w-6 h-6' />
            </div>
            <div>
                <ul className='flex gap-4 pr-9 pl-9 cursor-pointer font-medium sm:gap:1 sm:pr-1'>
                    <li className='list text-xs '>
                        Find a Store
                    </li>
                    <Link href={'/contact'}>
                    <li className='list text-xs'>
                        Help
                    </li>
                    </Link>
                    <Link href={'/signup'}>
                    <li className='list text-xs'>
                        Join Us
                    </li>
                    </Link>
                    <Link href={'/signin'}>
                    <li className='list text-xs'>
                        Sign In
                    </li>
                    </Link>
                </ul>
            </div>
        </div>
        </div>
        <div className='h-16 flex justify-between  w-full max-w-screen-xl items-center sm:w-[95vw] sm:overflow-hidden'>
            <div className='pl-12 sm:pl-1'>
                <Link href={"/"}>
                <Image src={logo2} alt='Nike Logo' />
                </Link>
            </div>
            <div>
                <ul className='flex gap-4 pr-9 cursor-pointer text-base font-medium pl-40 sm:hidden sm:pr-3'>
                    <Link href={'/all-products'}>
                    <li>
                        New & Featured
                    </li>
                    </Link>
                    <Link href={'/all-products'}>
                    <li>
                        Men
                    </li>
                    </Link>
                    <Link href={'/all-products'}>
                    <li>
                        Women
                    </li>
                    </Link>
                    <Link href={'/all-products'}>
                    <li>
                        Kids
                    </li>
                    </Link>
                    <Link href={'/all-products'}>
                    <li>
                        Sale
                    </li>
                    </Link>
                    <Link href={'/all-products'}>
                    <li>
                        SNKRS
                    </li>
                    </Link>
                </ul>
            </div>
            <div>
                <div className='flex items-center'>
                <Image src={search} alt='Search' className='h-4 w-4 left-7 relative' />
                    <input type='text' className='bg-slate-100 text-base h-10 w-[180px] rounded-2xl p-2 pl-10' placeholder='Search'>
                    </input>
                <div className='flex gap-3 p-2 pr-[38px] sm:pr-3'>
                <div className='flex justify-center items-center h-10 w-10 rounded-full hover:bg-gray-200'>
                <Image src={favourite} alt='Search' className='h-4 w-4' />
                </div>
                <Link href={'/cart'}>
                    <div className='flex justify-center items-center h-10 w-10 rounded-full hover:bg-gray-200'>
                    <Image src={cart} alt='Search' className='h-4 w-4' />
                    </div>
                </Link>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar