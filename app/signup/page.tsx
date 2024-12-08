import React from 'react'
import Image from 'next/image'
import logo from '@/public/navbar/Frame.png'


const Page = () => {
  return (
    <div>
        <div className='flex justify-center items-center h-[100vh] min-h-[800px] w-full'>
        <div className='flex flex-col items-center h-[490px] w-[380px] relative top-[-160px]'>
            <Image src={logo} alt='logo' />
            <h1 className='text-center font-bold text-lg'>YOUR ACCOUNT<br /> FOR EVERYTHING <br />NIKE</h1>
            <input type='text' placeholder='Email Address' className='w-[300px] p-2 mt-3 border-2 border-slate-300' />
            <input type='text' placeholder='Password' className='w-[300px] p-2 mt-3 border-2 border-slate-300' />
            <input type='text' placeholder='First Name' className='w-[300px] p-2 mt-3 border-2 border-slate-300' />
            <input type='text' placeholder='Last Name' className='w-[300px] p-2 mt-3 border-2 border-slate-300' />
            <input type='text' placeholder='Date of Birth' className='w-[300px] p-2 mt-3 border-2 border-slate-300' />
            <p className='text-xs text-gray-500 pt-2'>Get a Nike Member Reward every year on your birthday</p>
            <input type='text' placeholder='India' className='w-[300px] p-2 mt-3 border-2 border-slate-300' />
            <div className='flex gap-3'>
                <button className='w-[145px] p-2 mt-3 border-2 border-slate-300 text-gray-500'>Male</button>
                <button className='w-[145px] p-2 mt-3 border-2 border-slate-300 text-gray-500'>Female</button>
            </div>
            <div className='flex gap-2 pt-2'>
                <input type='checkbox' className='border-slate-300 h-6' />
                <p className='text-xs text-gray-500 '>Sign up for emails to get updates from Nike on <br/>products, offers and your Member benefits</p>
            </div>
            <p className='text-xs text-gray-500 text-center pt-5'>By creating and account, you agree to Nike's <span className='underline cursor-pointer'>Privacy Policy</span><br/> and
                <span className='underline cursor-pointer'>Terms of Use</span>
            </p>
            <button className='text-xs bg-black text-white w-[300px] p-3 mt-5'>SIGN IN</button>
            <p className='text-xs text-gray-500 pt-2'>Not a Member? <span className='underline text-black'>Join Us</span></p>
        </div>
    </div>
    </div>
  )
}

export default Page