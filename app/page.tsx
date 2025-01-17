import Header from "./components/ui/header/header";
import Image from "next/image";
import leftArrow from "@/public/home/left-arrow.png";
import airmaxData from "@/app/data/home/airmax";
import featured from "@/public/home/featured.png";
import men1 from "@/public/home/men/men1.png";
import men2 from "@/public/home/men/men2.png";
import women1 from "@/public/home/women/women1.png";
import women2 from "@/public/home/women/women2.png";
import dontmiss from "@/public/home/dontmiss.png";
import essential1 from "@/public/home/essentials/essential1.png";
import essential2 from "@/public/home/essentials/essential2.png";
import essential3 from "@/public/home/essentials/essential3.png";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="flex w-full flex-col items-center sm:overflow-hidden">
        <div className="mt-[84px] w-full max-w-[1440px] h-auto">
          <div className="flex justify-between pl-12 pr-12 m-h-[52px] items-center">
            <h1 className="font-medium text-xl">Best of Air Max</h1>
            <div className="flex gap-3 items-center sm:hidden">
              <h4 className="font-medium cursor-pointer hover:underline">
                Shop
              </h4>
              <button className="flex justify-center items-center bg-gray-200 rounded-full w-12 h-12 hover:bg-gray-300 ">
                <Image
                  src={leftArrow}
                  className="rotate-180 "
                  alt="left arrow"
                />
              </button>
              <button className="flex justify-center items-center bg-gray-200 rounded-full w-12 h-12 hover:bg-gray-300">
                <Image src={leftArrow} alt="left arrow" />
              </button>
            </div>
          </div>

          <div className="flex w-full justify-center pt-3">
            <div className="flex max-w-[1440px] w-[calc(100vw-96px)] flex-wrap min-h-min sm:w-[95vw]">
              {airmaxData.map((i) => (
                <Link href={`/product/${i.id}`} className="w-1/3 sm:w-[95vw]" key={i.id}>
                  <div className="flex flex-col justify-start items-center">
                    <div className="flex flex-col justify-center w-[95%]">
                      <Image src={i.img} alt="airmax" />
                      <div className="flex justify-between ">
                        <h3 className="font-medium">{i.heading}</h3>
                        <h3 className="font-medium">₹ {i.price}</h3>
                      </div>
                      <h3 className="font-normal text-gray-500">
                        {i.category}
                      </h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

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
            <Link href={'/all-products'}>
            <button className="bg-black text-white h-10 w-[152px] rounded-[30px] mt-[30px]">
              Find Your Shoe
            </button>
            </Link>
          </div>
        </div>

        {/* MEN AND WOMEN SECTION */}
        <div className="flex flex-col mt-[84px] max-w-[1440px] w-[calc(100vw-96px)] sm:w-[95vw] ">
          <h3 className="font-medium text-2xl">Gear Up</h3>
          <div className="flex pt-[25px] gap-3 sm:flex-col">
            {/* MENS SECTION */}
            <div className="flex flex-col items-end w-1/2 sm:w-[95vw]">
              <div className="flex h-auto items-center gap-3 pr-[48px] ">
                <h3 className="font-medium">Shop Men's</h3>
                <button className="flex justify-center items-center bg-gray-200 rounded-full w-12 h-12 hover:bg-gray-300 sm:hidden">
                  <Image
                    src={leftArrow}
                    className="rotate-180 "
                    alt="left arrow"
                  />
                </button>
                <button className="flex justify-center items-center bg-gray-200 rounded-full w-12 h-12 hover:bg-gray-300 sm:hidden">
                  <Image src={leftArrow} alt="left arrow" />
                </button>
              </div>

              <div className="flex gap-3 pt-3 sm:flex-col sm:w-[95vw] sm:items-center">
                <div className="flex flex-col max-w-[300px] w-1/2 sm:w-[95vw]">
                  <Image src={men1} alt="men1" />
                  <div className="flex justify-between ">
                    <h3 className="font-medium text-wrap ">
                      Nike Dri-FIT ADV TechKnit Ultra
                    </h3>
                    <h3 className="font-medium">₹&nbsp;3,895</h3>
                  </div>
                  <h3 className="font-normal text-gray-500 text-wrap  w-[200px]">
                    Men's Short-Sleeve Running Top
                  </h3>
                </div>
                <div className="flex flex-col max-w-[300px] w-1/2 sm:w-[95vw]">
                  <Image src={men2} alt="men1" />
                  <div className="flex justify-between ">
                    <h3 className="font-medium text-wrap">
                      Nike Dri-FIT Challenger
                    </h3>
                    <h3 className="font-medium">₹&nbsp;2 495</h3>
                  </div>
                  <h3 className="font-normal text-gray-500 text-wrap w-[200px]">
                    Men's 18cm (approx.) 2-in-1 Versatile Shorts
                  </h3>
                </div>
              </div>
            </div>

            {/* WOMENS SECTION */}
            <div className="flex flex-col items-end w-1/2 sm:w-[95vw]">
              <div className="flex h-auto items-center gap-3 pr-[48px]">
                <h3 className="font-medium">Shop Women's</h3>
                <button className="flex justify-center items-center bg-gray-200 rounded-full w-12 h-12 hover:bg-gray-300 sm:hidden">
                  <Image
                    src={leftArrow}
                    className="rotate-180 "
                    alt="left arrow"
                  />
                </button>
                <button className="flex justify-center items-center bg-gray-200 rounded-full w-12 h-12 hover:bg-gray-300 sm:hidden">
                  <Image src={leftArrow} alt="left arrow" />
                </button>
              </div>

              <div className="flex gap-3 pt-3 sm:flex-col sm:w-[95vw] sm:items-center">
                <div className="flex flex-col max-w-[300px] w-1/2 sm:w-[95vw]">
                  <Image src={women1} alt="women 1" />
                  <div className="flex justify-between ">
                    <h3 className="font-medium text-wrap ">
                      Nike Dri-FIT ADV Run Division
                    </h3>
                    <h3 className="font-medium">₹&nbsp;5,295</h3>
                  </div>
                  <h3 className="font-normal text-gray-500 text-wrap  w-[200px]">
                    Women's Long-Sleeve Running Top
                  </h3>
                </div>
                <div className="flex flex-col max-w-[300px] w-1/2 sm:w-[95vw]">
                  <Image src={women2} alt="men1" />
                  <div className="flex justify-between ">
                    <h3 className="font-medium text-wrap">Nike Fast</h3>
                    <h3 className="font-medium">₹&nbsp;3,795</h3>
                  </div>
                  <h3 className="font-normal text-gray-500 text-wrap w-[200px]">
                    Women's Mid-Rise 7/8 Running Leggings with Pockets
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>

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
            <Link href={'/all-products'}>
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
                <li><Link href={'/all-products'}>Air Force 1</Link></li>
                <li><Link href={'/all-products'}>Huarache</Link></li>
                <li><Link href={'/all-products'}>Air Max 90</Link></li>
                <li><Link href={'/all-products'}>Air Max 95</Link></li>
                </ul>
              </div>

              <div className="w-1/4 h-[300px] sm:w-1/2">
                <h1 className="font-medium pb-4">Shoes</h1>
                <ul className="flex flex-col gap-4 text-gray-500 font-medium">
                <li><Link href={'/all-products'}>All Shoes</Link></li>
                <li><Link href={'/all-products'}>Custom Shoes</Link></li>
                <li><Link href={'/all-products'}>Jordan Shoes</Link></li>
                <li><Link href={'/all-products'}>Running Shoes</Link></li>
                </ul>
              </div>

              <div className="w-1/4 h-[300px]  sm:w-1/2">
                <h1 className="font-medium pb-4">Clothing</h1>
                <ul className="flex flex-col gap-4 text-gray-500 font-medium">
                <li><Link href={'/all-products'}>All Clothing</Link></li>
                <li><Link href={'/all-products'}>Modest Wear</Link></li>
                <li><Link href={'/all-products'}>Hoodies & Pullovers</Link></li>
                <li><Link href={'/all-products'}>Shirts & Tops</Link></li>
                </ul>
              </div>

              <div className="w-1/4 h-[300px]  sm:w-1/2">
                <h1 className="font-medium pb-4">Kids'</h1>
                <ul className="flex flex-col gap-4 text-gray-500 font-medium">
                <li><Link href={'/all-products'}>Infant & Toddler Shoes</Link></li>
                <li><Link href={'/all-products'}>Kids' Shoes</Link></li>
                <li><Link href={'/all-products'}>Kids' Jordan Shoes</Link></li>
                <li><Link href={'/all-products'}>Kids' Basketball Shoes</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
