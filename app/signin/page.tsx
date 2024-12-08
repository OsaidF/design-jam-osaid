import Image from 'next/image'
import React from 'react'
import logo from '@/public/navbar/Frame.png'

const Page = () => {
  return (
    <div className='flex justify-center items-center h-[100vh] min-h-[800px] w-full'>
        <div className='flex flex-col items-center h-[490px] w-[380px] relative top-[-60px]'>
            <Image src={logo} alt='logo' />
            <h1 className='text-center font-bold text-lg'>YOUR ACCOUNT<br /> FOR EVERYTHING <br />NIKE</h1>
            <input type='text' placeholder='Email Address' className='w-[300px] p-2 mt-3 border-2 border-slate-300' />
            <input type='text' placeholder='Password' className='w-[300px] p-2 mt-3 border-2 border-slate-300' />
            <div className='flex pt-2 w-[300px] justify-between'>
                <div className='flex items-center'>
                <input type='checkbox' />
                <label className='text-xs text-gray-500 pl-2'> Keep Me Signed In</label>
                </div>
                <h1 className='text-xs text-gray-500  cursor-pointer hover:underline'>Forgotten your password?</h1>    
            </div>
            <p className='text-xs text-gray-500 text-center pt-5'>By logging in, you agree to Nike's <span className='underline cursor-pointer'>Privacy Policy</span><br/> and
                <span className='underline cursor-pointer'>Terms of Use</span>
            </p>
            <button className='text-xs bg-black text-white w-[300px] p-3 mt-5'>SIGN IN</button>
            <p className='text-xs text-gray-500 pt-2'>Not a Member? <span className='underline text-black'>Join Us</span></p>
        </div>
    </div>
  )
}

export default Page