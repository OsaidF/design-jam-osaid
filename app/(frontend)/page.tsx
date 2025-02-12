import Header from "@/app/components/ui/header/header";
import Image from "next/image";
import featured from "@/public/home/featured.png";
import dontmiss from "@/public/home/dontmiss.png";
import essential1 from "@/public/home/essentials/essential1.png";
import essential2 from "@/public/home/essentials/essential2.png";
import essential3 from "@/public/home/essentials/essential3.png";
import Link from "next/link";
import {
  CarouselAirmax,
  CarouselGender,
} from "../components/ui/carousel/carousel";

export default function Home() {
  return (
    <div className="max-w-[100vw] overflow-hidden">
      <Header />
      <div className="flex w-full flex-col items-center sm:overflow-hidden">
        <CarouselAirmax />

        {/* BANNER 1 */}
        <div className="flex flex-col mt-[84px] max-w-[1440px] w-[calc(100vw-96px)] h-auto sm:w-[95vw]">
          <h3 className="font-medium text-2xl">Featured</h3>
          <Image
            className="w-full pt-[25px]"
            src={featured}
            alt="featured image"
          />
          <div className="flex flex-col pt-[48px] items-center">
            <h1 className="text-5xl font-medium sm:text-center">
              STEP INTO WHAT FEELS GOOD
            </h1>
            <h2 className="text-base pt-6 sm:text-center">
              Cause everyone should know the feeling of running in that perfect
              pair.
            </h2>
            <Link href={"/all-products"}>
              <button className="bg-black text-white h-10 w-[152px] rounded-[30px] mt-[30px]">
                Find Your Shoe
              </button>
            </Link>
          </div>
        </div>

        {/* MEN AND WOMEN SECTION */}
        <h1 className="text-2xl w-full p-3 pt-6 ml-5">Gear Up</h1>
        <CarouselGender />

        {/* BANNER 2 */}
        <div className="flex flex-col mt-[84px] max-w-[1440px] w-[calc(100vw-96px)] h-auto sm:w-[90vw]">
          <h3 className="font-medium text-2xl">Featured</h3>
          <Image
            className="w-full pt-[25px]"
            src={dontmiss}
            alt="featured image"
          />
          <div className="flex flex-col pt-[48px] items-center">
            <h1 className="text-5xl font-medium sm:text-center">
              FLIGHT ESSENTIALS
            </h1>
            <h2 className="text-base pt-6 sm:text-center">
              Your built-to-last, all-week wears—but with style only Jordan
              Brand can deliver.
            </h2>
            <Link href={"/all-products"}>
              <button className="bg-black text-white h-10 w-[80px] rounded-[30px] mt-[30px]">
                Shop
              </button>
            </Link>
          </div>
        </div>

        {/* CATEGORIES */}

        <div className="flex flex-col mt-[84px] max-w-[1440px] w-[calc(100vw-96px)] h-auto">
          <h3 className="font-medium text-2xl">The Essentials</h3>
          <div className="flex gap-3 sm:flex-col sm:items-center">
            <div className="w-1/3 h-auto sm:w-[95vw]">
              <Image src={essential1} alt="essential 1" />
              <div className="flex items-center relative bottom-24 left-12 h-[40px] w-min pl-3 pr-3 bg-white rounded-[30px] ">
                <h3 className="font-medium">Men's</h3>
              </div>
            </div>
            <div className="w-1/3 h-auto  sm:w-[95vw]">
              <Image src={essential2} alt="essential 2" />
              <div className="flex items-center relative bottom-24 left-12 h-[40px] w-min pl-3 pr-3 bg-white rounded-[30px] ">
                <h3 className="font-medium">Women's</h3>
              </div>
            </div>
            <div className="w-1/3 h-auto  sm:w-[95vw]">
              <Image src={essential3} alt="essential 3" />
              <div className="flex items-center relative bottom-24 left-12 h-[40px] w-min pl-3 pr-3 bg-white rounded-[30px] ">
                <h3 className="font-medium">Kids'</h3>
              </div>
            </div>
          </div>
          <div className="flex w-full justify-center">
            <div className="flex gap-3 w-[880px] h-[300px] sm:w-[95vw] sm:items-center sm:h-auto sm:flex-wrap">
              <div className="w-1/4 h-[300px] sm:w-1/2">
                <h1 className="font-medium pb-4">Icons</h1>
                <ul className="flex flex-col gap-4 text-gray-500 font-medium">
                  <li>
                    <Link href={"/all-products"}>Air Force 1</Link>
                  </li>
                  <li>
                    <Link href={"/all-products"}>Huarache</Link>
                  </li>
                  <li>
                    <Link href={"/all-products"}>Air Max 90</Link>
                  </li>
                  <li>
                    <Link href={"/all-products"}>Air Max 95</Link>
                  </li>
                </ul>
              </div>

              <div className="w-1/4 h-[300px] sm:w-1/2">
                <h1 className="font-medium pb-4">Shoes</h1>
                <ul className="flex flex-col gap-4 text-gray-500 font-medium">
                  <li>
                    <Link href={"/all-products"}>All Shoes</Link>
                  </li>
                  <li>
                    <Link href={"/all-products"}>Custom Shoes</Link>
                  </li>
                  <li>
                    <Link href={"/all-products"}>Jordan Shoes</Link>
                  </li>
                  <li>
                    <Link href={"/all-products"}>Running Shoes</Link>
                  </li>
                </ul>
              </div>

              <div className="w-1/4 h-[300px]  sm:w-1/2">
                <h1 className="font-medium pb-4">Clothing</h1>
                <ul className="flex flex-col gap-4 text-gray-500 font-medium">
                  <li>
                    <Link href={"/all-products"}>All Clothing</Link>
                  </li>
                  <li>
                    <Link href={"/all-products"}>Modest Wear</Link>
                  </li>
                  <li>
                    <Link href={"/all-products"}>Hoodies & Pullovers</Link>
                  </li>
                  <li>
                    <Link href={"/all-products"}>Shirts & Tops</Link>
                  </li>
                </ul>
              </div>

              <div className="w-1/4 h-[300px]  sm:w-1/2">
                <h1 className="font-medium pb-4">Kids'</h1>
                <ul className="flex flex-col gap-4 text-gray-500 font-medium">
                  <li>
                    <Link href={"/all-products"}>Infant & Toddler Shoes</Link>
                  </li>
                  <li>
                    <Link href={"/all-products"}>Kids' Shoes</Link>
                  </li>
                  <li>
                    <Link href={"/all-products"}>Kids' Jordan Shoes</Link>
                  </li>
                  <li>
                    <Link href={"/all-products"}>Kids' Basketball Shoes</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
