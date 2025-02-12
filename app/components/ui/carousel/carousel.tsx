"use client";
import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/app/components/ui/carousel";
import { product } from "@/app/types/product";
import frontPage from "@/app/libs/frontpage";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";

export function CarouselAirmax() {
  let [airmax, setAirmax] = React.useState<product[] | never[]>([]);
  let [error, setError] = React.useState<null | string>()
  React.useEffect(() => {
    try {
      let getdata = async () => {
        let data = await frontPage();
        setAirmax(data[0].airmax);
      };
      getdata();     
    } catch (error) {
      setError((error as Error).message)
    }
  }, []);
  return (
    <div className="text-xl p-6 mt-5">
      <h1>Best of Airmax</h1>
      {airmax.length > 0 ? (
        <Carousel className="max-w-[1400px] w-[calc(100vw-95px)] relative md:w-[95vw]">
          <CarouselContent className="-ml-2">
            {airmax.map((i: product) => (
              <CarouselItem
                className="h-auto bg-white basis-1/3 md:basis-full sm:basis-full"
                key={i._id}
              >
                <Link href={`/all-products/${i._id}`}>
                  <div className="p-1">
                    <Image
                      src={urlFor(i.image).width(500).height(500).url()}
                      alt={i.productName}
                      width={500}
                      height={300}
                      className="w-[calc(100vw-90px/3)] md:w-[95vw]"
                    ></Image>
                    <h2 className="font-medium text-base">{i.productName}</h2>
                    <div className="flex justify-between w-full">
                      <h3 className="font-medium text-base text-gray-500 first-letter:capitalize">
                        {i.gender === "unisex"
                          ? i.gender + " " + i.category
                          : i.gender + "'s " + i.category}
                      </h3>
                      <h3 className="text-base text-black">
                        MRP: ₹&nbsp;{i.price}
                      </h3>
                    </div>
                  </div>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute top-[-20px] left-[calc(100vw-180px)] bg-slate-200 md:left-[calc(100vw-100px)]" />
          <CarouselNext className="absolute top-[-20px] right-[0px] bg-slate-200 p-2" />
        </Carousel>
      ) : (
        <div className="flex flex-col gap-3 w-full items-center justify-center h-[200px]">
          {error &&
            <>
            <h1 className='text-red-600 p-3 pl-6 pr-6 bg-red-100 rounded-full sm:w-[95vw] overflow-hidden'>Error fetching airmax products</h1>
            <h1 className='text-red-600 p-3 pl-6 pr-6 bg-red-100 rounded-full sm:w-[95vw] overflow-hidden'>{error}</h1>  
            </>}
        </div>
      )}
    </div>
  );
}

export function CarouselGender() {
  let [men, setMen] = React.useState<product[] | never[]>([]);
  let [women, setWomen] = React.useState<product[] | never[]>([]);
  let [error, setError] = React.useState<null | string>()
  React.useEffect(() => {
      try {
      let getdata = async () => {
        let data = await frontPage();
        // console.log(data)
        setMen(data[0].men);
        setWomen(data[0].women);
      };
      getdata();
    } catch (error) {
      setError((error as Error).message)
    }
  }, []);
  return (
    <div className="flex items-center max-w-[100vw] overflow-hidden justify-center mb-6 md:flex-col">
      {/* MENS SECTION */}
      <div className="p-3 md:p-0">
        <h1 className="text-xl pb-3">Shop Men's</h1>
        {men.length > 0 ? (
        <Carousel className="max-w-[1400px] w-[calc(50vw-50px)] relative md:w-[95vw]">
          <CarouselContent className="-ml-2">
            {men.map((i: product) => (
              <CarouselItem
                className="h-auto bg-white basis-1/2 md:basis-full sm:basis-full"
                key={i._id}
              >
                <Link href={`/all-products/${i._id}`}>
                  <div className="p-1">
                    <Image
                      src={urlFor(i.image).width(500).height(500).url()}
                      alt={i.productName}
                      width={500}
                      height={300}
                      className="w-[calc(50vw-50px/2)] md:w-[95vw]"
                    ></Image>
                    <h2 className="text-base">{i.productName}</h2>
                    <div className="flex justify-between w-full">
                      <h3 className="font-medium text-base text-gray-500 first-letter:capitalize">
                        {i.gender === "unisex"
                          ? i.gender + " " + i.category
                          : i.gender + "'s " + i.category}
                      </h3>
                      <h3 className="text-black">MRP: ₹&nbsp;{i.price}</h3>
                    </div>
                  </div>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute top-[-20px] left-[calc(50vw-125px)] bg-slate-200 md:left-[calc(100vw-125px)]" />
          <CarouselNext className="absolute top-[-20px] right-[0px] bg-slate-200 p-2" />
        </Carousel>
      ) : (
        <div className="flex flex-col gap-3 w-full items-center justify-center h-[200px]">
         {error &&
            <>
            <h1 className='text-red-600 p-3 pl-6 pr-6 bg-red-100 rounded-full sm:w-[95vw] overflow-hidden'>Error fetching men's products</h1>
            <h1 className='text-red-600 p-3 pl-6 pr-6 bg-red-100 rounded-full sm:w-[95vw] overflow-hidden'>{error}</h1>  
            </>}
        </div>
      )}
      </div>

      {/* WOMENS SECTION */}
      <div className="p-3 md:p-0">
        <h1 className="text-xl pb-3">Shop Women's</h1>
        {women.length > 0 ? (
        <Carousel className="max-w-[1400px] w-[calc(50vw-50px)] relative md:w-[95vw]">
          <CarouselContent className="-ml-2">
            {women.map((i: product) => (
              <CarouselItem
                className="h-auto bg-white basis-1/2 md:basis-full sm:basis-full"
                key={i._id}
              >
                <Link href={`/all-products/${i._id}`}>
                  <div className="p-1">
                    <Image
                      src={urlFor(i.image).width(323).height(323).url()}
                      alt={i.productName}
                      width={500}
                      height={300}
                      className="w-[calc(50vw-50px/2)] md:w-[95vw]"
                    ></Image>
                    <h2 className="text-base">{i.productName}</h2>
                    <div className="flex justify-between w-full">
                      <h3 className="font-medium text-base text-gray-500 first-letter:capitalize">
                        {i.gender === "unisex"
                          ? i.gender + " " + i.category
                          : i.gender + "'s " + i.category}
                      </h3>
                      <h3 className="text-black">MRP: ₹&nbsp;{i.price}</h3>
                    </div>
                  </div>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute top-[-20px] left-[calc(50vw-125px)] bg-slate-200 md:left-[calc(100vw-125px)]" />
          <CarouselNext className="absolute top-[-20px] right-[0px] bg-slate-200 p-2" />
        </Carousel>
         ) : (
          <div className="flex  flex-col gap-3 items-center justify-center h-[200px]">
           {error &&
            <>
            <h1 className='text-red-600 p-3 pl-6 pr-6 bg-red-100 rounded-full sm:w-[95vw] overflow-hidden'>Error fetching womens products</h1>
            <h1 className='text-red-600 p-3 pl-6 pr-6 bg-red-100 rounded-full sm:w-[95vw] overflow-hidden'>{error}</h1>  
            </>}
          </div>
        )}
      </div>
    </div>
  );
}
