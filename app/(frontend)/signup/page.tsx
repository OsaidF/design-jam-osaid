"use client";
import React, { useState, useEffect, FormEvent } from "react";
import Image from "next/image";
import logo from "@/public/navbar/Frame.png";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import axios, { AxiosError } from "axios";
import { Eye, EyeClosed } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const Page = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [gender, setGender] = useState("male");
  const { data: session } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (session?.user) {
      router.push("/");
    }
  }, [session, router]);

  const passwordValidation = new RegExp(
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/
  );

  const signupSchema = z.object({
    email: z.string().min(1, { message: 'Email is required!' }).email({message: 'A valid email is required'}),
    password: z.string().min(6, {message: 'Password is required!'}).regex(passwordValidation, {message: 'Password must contain 1 small letter, 1 capital letter and 1 number!'}),
    firstName: z.string().min(3, {message: 'First name is required!'}),
    lastName: z.string().min(3, {message: 'Last name is required!'}),
    country: z.string().min(3, {message: 'Country required!'}),
    dateOfBirth: z.coerce.date().min(new Date('1930-01-01'), {message: 'Too old lol'}).max(new Date('2018-01-01'), {message: 'Too Young!'}),
  })

    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm( {
      resolver: zodResolver(signupSchema),
    });

  const onSubmit = async (data: any) => {
    setLoading(true);
    try {
      console.log(data)
      const signupResponse = await axios
        .post(`${process.env.NEXT_PUBLIC_APP_URL}/api/auth/signup`, {
          email: data.email,
          password: data.password,
          firstName: data.firstName,
          lastName: data.lastName,
          gender: gender,
          country: data.country,
          dateOfBirth: data.dateOfBirth,
        })
        .then(async function (response) {
          if (response.status == 201) {
            const res = await signIn("credentials", {
              email: response.data.email,
              password: data.password,
              redirect: false,
              revalidate: 0,
            });
            if (res?.error) {
              setLoading(false);
              setError(res.error as string);
            }
            if (res?.ok) {
              setLoading(false);
              return router.push("/");
            }
          }
        });
    } catch (error) {
      console.log(error);
      setLoading(false)
      if (error instanceof AxiosError) {
        const errorMessage = error.response?.data.message;
        setError(errorMessage);
      }
    }
  };
  return (
    <div>
      <div className="flex justify-center items-center h-[100vh] min-h-[800px] w-full">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-center h-[490px] w-[380px] relative top-[-160px]"
        >
          <Image src={logo} alt="logo" />
          <h1 className="text-center font-bold text-lg">
            YOUR ACCOUNT
            <br /> FOR EVERYTHING <br />
            NIKE
          </h1>
          {error && <div className="text-red-500 text-center">{error}</div>}
          <input
            {...register('email')}
            type="text"
            placeholder="Email Address"
            className="w-[300px] p-2 mt-3 border-2 border-slate-300"
          />
          {errors.email?.message && <span className="text-red-500 text-sm w-[300px]">{`${errors.email?.message}`}</span>}
          <div className="flex">
            <input
              {...register('password')}
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-[250px] p-2 mt-3 border-2 border-slate-300"
            />
            
            <span
              className="flex items-center justify-center mt-3 w-[50px] border-2 border-l-0 border-slate-300"
              onClick={() => {
                setShowPassword((e) => !e);
              }}
            >
              {showPassword ? (
                <Eye className="text-black" />
              ) : (
                <EyeClosed className="text-black" />
              )}
            </span>
          </div>
          {errors.password?.message && <span className="text-red-500 text-sm w-[300px]">{`${errors.password?.message}`}</span>}
          <input
           {...register('firstName')}
            name="firstName"
            type="text"
            placeholder="First Name"
            className="w-[300px] p-2 mt-3 border-2 border-slate-300"
          />
          {errors.firstName?.message && <span className="text-red-500 text-sm w-[300px]">{`${errors.firstName?.message}`}</span>}
          <input
           {...register('lastName')}
            name="lastName"
            type="text"
            placeholder="Last Name"
            className="w-[300px] p-2 mt-3 border-2 border-slate-300"
          />
          {errors.lastName?.message && <span className="text-red-500 text-sm w-[300px]">{`${errors.lastName?.message}`}</span>}
          <input
           {...register('dateOfBirth')}
            name="dateOfBirth"
            type="date"
            placeholder="Date of Birth"
            className="w-[300px] p-[20px] text-lg  mt-3 border-2 border-slate-300"
          />
          {errors.dateOfBirth?.message && <span className="text-red-500 text-sm w-[300px]">{`${errors.dateOfBirth?.message}`}</span>}
          <p className="text-xs text-gray-500 pt-2">
            Get a Nike Member Reward every year on your birthday
          </p>
          <input
           {...register('country')}
            name="country"
            type="text"
            placeholder="India"
            className="w-[300px] p-2 mt-3 border-2 border-slate-300"
          />
          {errors.country?.message && <span className="text-red-500 text-sm w-[300px]">{`${errors.country?.message}`}</span>}
          <div className="flex gap-3">
            <span
              className="flex items-center justify-center w-[145px] p-2 mt-3 border-2 border-slate-300 text-gray-500"
              style={{
                backgroundColor: gender == "male" ? "black" : "white",
                color: gender == "male" ? "white" : "#6b7280",
              }}
              onClick={() => setGender("male")}
            >
              Male
            </span>
            <span
              className="flex items-center justify-center w-[145px] p-2 mt-3 border-2 border-slate-300 text-gray-500"
              style={{
                backgroundColor: gender == "female" ? "black" : "white",
                color: gender == "female" ? "white" : "#6b7280",
              }}
              onClick={() => setGender("female")}
            >
              Female
            </span>
          </div>
          <div className="flex gap-2 pt-2">
            <input type="checkbox" className="border-slate-300 h-6" />
            <p className="text-xs text-gray-500 ">
              Sign up for emails to get updates from Nike on <br />
              products, offers and your Member benefits
            </p>
          </div>
          <p className="text-xs text-gray-500 text-center pt-5">
            By creating and account, you agree to Nike's{" "}
            <span className="underline cursor-pointer">Privacy Policy</span>
            <br /> and
            <span className="underline cursor-pointer">Terms of Use</span>
          </p>
          <button
            type="submit"
            className="flex items-center justify-center text-xs bg-black text-white w-[300px] p-3 mt-5 disabled:opacity-75"
            disabled={loading}
          >
            {loading ? (
              <svg
                className="h-5 w-5 animate-spin text-white motion-reduce:hidden"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            ) : (
              "SIGN IN"
            )}
          </button>
          <p className="text-xs text-gray-500 pt-2">
            Not a Member? <span className="underline text-black">Join Us</span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Page;
