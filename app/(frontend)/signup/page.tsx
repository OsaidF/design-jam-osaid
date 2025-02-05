"use client"
import React, { useState, useEffect, FormEvent } from 'react'
import Image from 'next/image'
import logo from '@/public/navbar/Frame.png'
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from "next/navigation";
import axios, { AxiosError } from 'axios';
import { getUserByEmail } from '@/sanity/lib/client';

const Page = () => {
  const [error, setError] = useState("");
  const [gender, setGender ] = useState('male')
    const { data: session } = useSession();
    const router = useRouter()
      useEffect(() => {
        if (session?.user) {
          router.push("/");
        }
      }, [session, router]);

      const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
          const formData = new FormData(event.currentTarget);
          const signupResponse = await axios.post(`${process.env.NEXT_PUBLIC_APP_URL}/api/auth/signup`, {
            email: formData.get("email"),
            password: formData.get("password"),
            firstName: formData.get("firstName"),
            lastName: formData.get("lastName"),
            gender: gender,
            country: formData.get("country"),
            dateOfBirth: formData.get("dateOfBirth")
          }).then( async function (response)
          {
            if(response.status == 201) {
                const res = await signIn("credentials", {
                  email: response.data.email,
                  password: formData.get("password"),
                  redirect: false,
                  revalidate: 0,
                });
                if (res?.error) {
                  setError(res.error as string);
                }
                if (res?.ok) return router.push("/");
              }
            }
          )
          

        } catch (error) {
          console.log(error);
          if (error instanceof AxiosError) {
            const errorMessage = error.response?.data.message;
            setError(errorMessage);
          }
        }
      }
  return (
    <div>
        <div className='flex justify-center items-center h-[100vh] min-h-[800px] w-full'>
        <form onSubmit={handleSubmit} className='flex flex-col items-center h-[490px] w-[380px] relative top-[-160px]'>
            <Image src={logo} alt='logo' />
            <h1 className='text-center font-bold text-lg'>YOUR ACCOUNT<br /> FOR EVERYTHING <br />NIKE</h1>
            {error && <div className="text-red-500 text-center">{error}</div>}
            <input name='email' type='text' placeholder='Email Address' className='w-[300px] p-2 mt-3 border-2 border-slate-300' />
            <input name='password' type='password' placeholder='Password' className='w-[300px] p-2 mt-3 border-2 border-slate-300' />
            <input name='firstName' type='text' placeholder='First Name' className='w-[300px] p-2 mt-3 border-2 border-slate-300' />
            <input name='lastName' type='text' placeholder='Last Name' className='w-[300px] p-2 mt-3 border-2 border-slate-300' />
            <input name='dateOfBirth' type='text' placeholder='Date of Birth' className='w-[300px] p-2 mt-3 border-2 border-slate-300' />
            <p className='text-xs text-gray-500 pt-2'>Get a Nike Member Reward every year on your birthday</p>
            <input name='country' type='text' placeholder='India' className='w-[300px] p-2 mt-3 border-2 border-slate-300' />
            <div className='flex gap-3'>
                <span className='w-[145px] p-2 mt-3 border-2 border-slate-300 text-gray-500'
                style={{backgroundColor: gender == 'male' ? 'black' : 'white', color: gender == 'male' ? 'white' : '#6b7280'}}
                onClick={() => setGender('male')}
                >Male</span>
                <span className='w-[145px] p-2 mt-3 border-2 border-slate-300 text-gray-500'
                style={{backgroundColor: gender == 'female' ? 'black' : 'white', color: gender == 'female' ? 'white' : '#6b7280'}}
                onClick={() => setGender('female')}
                >Female</span>
            </div>
            <div className='flex gap-2 pt-2'>
                <input type='checkbox' className='border-slate-300 h-6' />
                <p className='text-xs text-gray-500 '>Sign up for emails to get updates from Nike on <br/>products, offers and your Member benefits</p>
            </div>
            <p className='text-xs text-gray-500 text-center pt-5'>By creating and account, you agree to Nike's <span className='underline cursor-pointer'>Privacy Policy</span><br/> and
                <span className='underline cursor-pointer'>Terms of Use</span>
            </p>
            <button type='submit' className='text-xs bg-black text-white w-[300px] p-3 mt-5'>SIGN IN</button>
            <p className='text-xs text-gray-500 pt-2'>Not a Member? <span className='underline text-black'>Join Us</span></p>
        </form>
    </div>
    </div>
  )
}

export default Page