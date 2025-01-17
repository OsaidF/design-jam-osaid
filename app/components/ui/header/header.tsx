import React from 'react'
import header from '@/public/header/header.jpg';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <div>
        <div className="flex h-16 bg-slate-100 w-full justify-center">
          <div className="flex flex-col justify-center items-center">
            <h1 className="font-medium">Hello Nike App</h1>
            <h3 className="text-xs">Download the app to access everything Nike. <span className="underline font-medium">Get Your Great</span></h3>
          </div>
          
      </div>
      <div className='pt-2 flex w-full justify-center'>
            <div className="max-w-[1344px] ml-12 mr-12 bg-slate-200 w-[calc(100vw-96px)] sm:ml-3 sm:mr-3 sm:w-[95vw]">
              <Image src={header} alt='header image' priority />
            </div>
          </div>
          <div className='flex flex-col pt-12 items-center sm:pt-6'>
                <h3 className='font-medium'>First Look</h3>
                <h1 className='text-6xl font-medium pt-1 sm:text-center'>NIKE AIR MAX PULSE</h1>
                <p className='pt-[24px] font-normal text-center sm:pl-4 sm:pr-4'>Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse <br />
                —designed to push you past your limits and help you go to the max.</p>
                <div className='flex gap-2 pt-6'>
                  <Link href={'/all-products'}>
                    <button className='bg-black text-white p-2 rounded-[30px] w-[110px]'>Notify Me</button>
                  </Link>
                  <Link href={'/all-products'}>
                    <button className='bg-black text-white p-2 rounded-[30px] w-[140px]'>Shop Air Max</button>
                  </Link>
                </div>
          </div>
    </div>
  )
}

export default Header