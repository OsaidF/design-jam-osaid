"use client";
import Image from "next/image";
import React from "react";
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";
import logo from "@/public/navbar/Frame.png";
import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

function Page() {
  const [error, setError] = useState("");
  const router = useRouter();
  const { data: session } = useSession();

  useEffect(() => {
    if (session?.user) {
      router.push("/");
    }
  }, [session, router]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const res = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      cache: "no-store",
    });

    if (res?.error) {
      setError(res.error as string);
    }

    if (!res?.error) {
      return router.push("/");
    }
  };
  return (
    <div className="flex justify-center items-center h-[100vh] min-h-[800px] w-full">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center h-[490px] w-[380px] relative top-[-60px]"
      >
        <Image src={logo} alt="logo" />
        <h1 className="text-center font-bold text-lg">
          YOUR ACCOUNT
          <br /> FOR EVERYTHING <br />
          NIKE
        </h1>
        {error && <div className="text-red-500 text-center">{error}</div>}
        <input
          type="text"
          placeholder="Email Address"
          name="email"
          className="w-[300px] p-2 mt-3 border-2 border-slate-300"
        />
        <input
          type="text"
          placeholder="Password"
          name="password"
          className="w-[300px] p-2 mt-3 border-2 border-slate-300"
        />
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
          className="text-xs bg-black text-white w-[300px] p-3 mt-5"
        >
          SIGN IN
        </button>
        <p className="text-xs text-gray-500 pt-2">
          Not a Member? <span className="underline text-black">Join Us</span>
        </p>
      </form>
    </div>
  );
}

export default Page;
