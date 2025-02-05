"use client";
import React, { useState, useEffect } from "react";
import { Star } from "lucide-react";
import { review } from "@/app/types/product";
import x from "@/public/x-symbol-svgrepo-com.svg";
import Image from "next/image";

interface reviews {
  reviews: review[];
}
let Review = (review: reviews) => {
  let [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else document.body.style.overflow = "auto";
    return () => {};
  }, [showModal]);

  function getAverage(array: review[]) {
    if (array) {
      let sum = 0;
      for (let i = 0; i < array.length; i++) {
        sum += array[i].rating;
      }
      return sum / array.length;
    }
    return 0.0;
  }
  let average = getAverage(review.reviews).toFixed(1);
  let stars = average.split(".");
  let percentStar = stars[1] + 0;

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  console.log(review);
  return (
    <>
      {review && (
        <div
          className="flex justify-between w-[400px] relative mt-2 cursor-pointer group"
          onClick={toggleModal}
        >
          <div>
            <h1 className="font-semibold text-lg pl-2 group-hover:underline">
              ({review.reviews ? review.reviews.length : 0})&nbsp;
              {review.reviews && review.reviews.length < 0
                ? "Reviews"
                : "Review"}
            </h1>
          </div>


          <div className="flex">
            {Array.from({ length: 5 }, () => (
              <Star
                className="text-black"
                strokeWidth={2}
                key={Math.random()}
              />
            ))}
          </div>
          <div className="absolute flex left-[4px]">
            {Array.from({ length: Number(stars[0]) }, () => (
              <Star fill="black" strokeWidth={0} key={Math.random()} />
            ))}
            <div
              className="overflow-hidden"
              style={{
                width: percentStar
                  ? `${(Number(percentStar) / 100) * 24}px`
                  : "0%",
              }}
            >
              <Star fill="black" strokeWidth={0} className="w-[24px]" />
            </div>
          </div>
          
        </div>
      )}
      {showModal && (
        <ReviewModal
          onRequestClose={toggleModal}
          review={review}
          show={showModal}
        />
      )}
    </>
  );
};

export default Review;

interface modal {
  onRequestClose: () => void;
  show: boolean;
  review: reviews;
}

const ReviewModal = ({ onRequestClose, show, review }: modal) => {
  let { reviews } = review;
  console.log(reviews);
  return (
    <div
      id="default-modal"
      tabIndex={1}
      className="transition-all overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
    >
      <div className="relative w-full max-h-full z-10">
        <div className="fixed transate p-4 rounded-lg bg-white w-[700px]  shadow  sm:h-full sm:w-[100vw] md:w-100vw">
          <div className="flex justify-between">
            <h1 className="text-2xl font-bold mb-2">
              Reviews {reviews ? `(${reviews.length})`: '(0)'}
            </h1>
            <div className="flex items-center justify-center w-[30px] h-[30px] rounded-full hover:bg-gray-200" onClick={onRequestClose}>
              <Image
                src={x}
                alt=""
                width={15}
                height={15}
                className="cursor-pointer"
              />
            </div>
          </div>
          {reviews ? 
          <div className="overflow-scroll scrollbar h-[500px]">
            {/* DIV TO MAP OVER REVIEWS */}
            {reviews.map((i) => (
              <div className="flex-col p-3 border" key={Math.random()}>
                <div className="flex gap-2 items-center">
                  {/* USER NUMBER */}
                  <h1 className="text-md font-medium text-gray-500">
                    User - {i.user._ref}{" "}
                  </h1>
                  {/* STARS */}
                  <div className="flex relative">
                    <div className="flex item">
                      {Array.from({ length: 5 }, () => (
                        <Star
                          className="text-black w-4"
                          strokeWidth={2}
                          key={Math.random()}
                        />
                      ))}
                    </div>
                    <div className="absolute flex top-0">
                      {Array.from({ length: i.rating }, () => (
                        <Star
                          fill="black"
                          className=" w-4"
                          strokeWidth={0}
                          key={Math.random()}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                {/* DESCRIPTION */}
                <p className="pt-1">{i.review}</p>
              </div>
            ))}
          </div>
          :
          <div className="flex items-center justify-center h-[500px]">
            <h1>There are no reviews for this product</h1>
          </div>
          }
          {/* CREATE AN ADD A REVIEW COMPONENT HERE */}


        </div>
      </div>
      <div
        onClick={onRequestClose}
        className="z-0 modal transition-all overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 bg-gray-500/50 justify-center items-center w-full h-full md:inset-0 max-h-full"
      ></div>
    </div>
  );
};
