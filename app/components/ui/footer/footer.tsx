import Image from 'next/image'
import React from 'react'
import twitter from '@/public/footer/twitter.svg'
import facebook from '@/public/footer/facebook.svg'
import youtube from '@/public/footer/youtube.svg'
import instagram from '@/public/footer/instagram.svg'
import location from '@/public/footer/location.png'

const Footer = () => {
  return (
    <div className='flex flex-col w-full h-[330px] justify-center bg-black sm:h-auto md:w-full'>
        <div className='flex w-full max-w-[1440px] sm:block'>
            <div className='flex w-3/5 pl-[34px] pt-10 sm:block'>
                <div className='w-[250px] h-auto'>
                    <ul className='flex flex-col gap-[20px] text-white font-normal text-xs'>
                        <li className='hover:text-gray-500 cursor-pointer'>FIND A STORE</li>
                        <li className='hover:text-gray-500 cursor-pointer'>BECOME A MEMBER</li>
                        <li className='hover:text-gray-500 cursor-pointer'>SIGN UP FOR EMAIL</li>
                        <li className='hover:text-gray-500 cursor-pointer'>SEND US FEEDBACK</li>
                        <li className='hover:text-gray-500 cursor-pointer'>STUDENT DISCOUNTS</li>
                    </ul>
                </div>

                <div className='w-[250px] h-auto'>
                    <ul className='flex flex-col gap-[17px] text-white text-xs'>
                        <li className='text-white font-normal'>GET HELP</li>
                        <li className='hover:text-gray-500 cursor-pointer'>Order Status</li>
                        <li className='hover:text-gray-500 cursor-pointer'>Delivery</li>
                        <li className='hover:text-gray-500 cursor-pointer'>Returns</li>
                        <li className='hover:text-gray-500 cursor-pointer'>Payment Options</li>
                        <li className='hover:text-gray-500 cursor-pointer'>Contact Us On Nike.com Inquiries</li>
                        <li className='hover:text-gray-500 cursor-pointer'>Contact Us On All Other Inquiries</li>
                    </ul>
                </div>

                <div className='w-[250px] h-auto'>
                    <ul className='flex flex-col gap-[17px] text-whitetext-xs'>
                        <li className='text-white font-normal'>ABOUT NIKE</li>
                        <li className='text-white hover:text-gray-500 cursor-pointer'>News</li>
                        <li className='text-white hover:text-gray-500 cursor-pointer'>Careers</li>
                        <li className='text-white hover:text-gray-500 cursor-pointer'>Investors</li>
                        <li className='text-white hover:text-gray-500 cursor-pointer'>Sustinability</li>
                    </ul>
                </div>
            </div>
            <div className='flex w-2/5 h-[200px] pr-[34px] pt-10 justify-end sm:block sm:w-[95vw] sm:pl-[34px]'>
                <div className='flex gap-4 h-[30px]'>
                    <div className='w-[30px] h-[30px] rounded-full cursor-pointer twitter'>
                        <Image src={twitter} alt='Twitter' />
                    </div>
                    <div className='w-[30px] h-[30px] rounded-full cursor-pointer facebook'>
                    <Image src={facebook} alt='Twitter' />
                    </div>
                    <div className='w-[30px] h-[30px] rounded-full cursor-pointer youtube'>
                    <Image src={youtube} alt='Twitter' />
                    </div>
                    <div className='w-[30px] h-[30px] rounded-full cursor-pointer instagram'>
                    <Image src={instagram} alt='Twitter' />
                    </div>
                </div>
            </div>
            
        </div>
        <div className='flex justify-between h-[50px] w-full max-w-[1440px] pl-[34px] pr-[34px] mt-[25px] sm:block'>
            <div className='flex gap-3 items-center h-[14px]'>
            <Image src={location} alt='location pin' />
            <h1 className='text-white text-xs'>India</h1>
            <h2 className='text-gray-500 text-xs pl-3'>© 2023 Nike, Inc. All Rights Reserved</h2>
            </div>

            <div>
                <ul className='flex items-center gap-3 text-white text-xs pl-3 sm:pt-3'>
                    <li className='cursor-pointer hover:text-gray-500'>Guides</li>
                    <li className='cursor-pointer hover:text-gray-500'>Terms of Sale</li>
                    <li className='cursor-pointer hover:text-gray-500'>Terms of Use</li>
                    <li className='cursor-pointer hover:text-gray-500'>Nike Privacy Policy</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer