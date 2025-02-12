"use client";
import Image from "next/image";
import React from "react";
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";
import logo from "@/public/navbar/Frame.png";
import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeClosed } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

function Page() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const router = useRouter();
  const { data: session } = useSession();

  useEffect(() => {
    if (session?.user) {
      router.push("/");
    }
  }, [session, router]);

  const schema = z.object({
    email: z.string().min(1, { message: 'Email is required!' }).email({message: 'A valid email is required'}),
    password: z.string().min(6, {message: 'Password is required!'}),

  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm( {
    resolver: zodResolver(schema),
  });
 
  const onSubmit = async (data:any) => {

    setLoading(true)
    console.log(data)
    const res = await signIn("credentials", {
      email: data.email,
      password: data.password,
      cache: "no-store",
      redirect: false,
      revalidate: 0,
    });

    if (res?.error) {
      setLoading(false)
      setError(res.error as string);
      return;
    }

    if (!res?.error) {
      setLoading(false)
      return router.push("/");
    }
  };
  return (
    <div className="flex justify-center items-center h-[100vh] min-h-[800px] w-full">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center h-[490px] w-[380px] relative top-[-60px]"
      >
        <Image src={logo} alt="logo" />
        <h1 className="text-center font-bold text-lg">
          YOUR ACCOUNT
          <br /> FOR EVERYTHING <br />
          NIKE
        </h1>
        {error && <div className="text-red-500 text-center text-sm w-[300px]">{error}</div>}
        <input
          type="text"
          placeholder="Email Address"
          className="w-[300px] p-2 mt-3 border-2 border-slate-300"
          {...register('email')}
        />
        {errors.email?.message && <span className="text-red-500 text-sm w-[300px]">{`${errors.email?.message}`}</span>}
        
        <div className="flex">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-[250px] p-2 mt-3 border-2 border-slate-300"
              {...register('password')}
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
          {errors.password?.message && <p className="text-red-500 text-sm w-[300px]">{`${errors.password?.message}`}</p>}
        <div className="flex pt-2 w-[300px] justify-between">
          <div className="flex items-center">
            <input type="checkbox" />
            <label className="text-xs text-gray-500 pl-2">
              {" "}
              Keep Me Signed In
            </label>
          </div>
          <h1 className="text-xs text-gray-500  cursor-pointer hover:underline">
            Forgotten your password?
          </h1>
        </div>
        <p className="text-xs text-gray-500 text-center pt-5">
          By logging in, you agree to Nike's{" "}
          <span className="underline cursor-pointer">Privacy Policy</span>
          <br /> and
          <span className="underline cursor-pointer">Terms of Use</span>
        </p>
        <button
          type="submit"
          className="flex items-center justify-center gap-2 text-xs bg-black text-white w-[300px] p-3 mt-5"
        >
          {loading ? <svg
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
          </svg> :
          "SIGN IN"
          }
        </button>
        <p className="text-xs text-gray-500 pt-2">
          
          Not a Member? <span className="underline text-black">Join Us</span>
        </p>
      </form>
    </div>
  );
}

export default Page;









