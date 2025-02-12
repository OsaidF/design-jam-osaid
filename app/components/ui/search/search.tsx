"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import search from "@/public/navbar/search.png";
import nike from "@/public/navbar/Frame.png";
import { useRouter } from "next/navigation";

const Search = () => {
  const [showSearch, setShowSearch] = useState(false);

  const toggleModal = () => {
    setShowSearch(!showSearch);
  };

  useEffect(() => {
    if (showSearch) {
      document.body.style.overflow = "hidden";
    } else document.body.style.overflow = "auto";
    return () => {};
  }, [showSearch]);
  return (
    <>
        {/* SEARCH LOGO */}
      <div className="flex relative left-10 items-center bg-white justify-center w-[40px] h-[40px] rounded-full border-[1px] hover:bg-gray-200">
        <Image
          src={search.src}
          alt="Search"
          width={15}
          height={15}
          className="w-[18px] h-[18px]"
        />
      </div>
        {/* SEARCH INPUT */}
      <input
        onClick={toggleModal}
        type="text"
        className="bg-slate-100 text-base h-10 w-[180px] border-[1px] rounded-full p-2 pl-12 hover:bg-gray-200 hover:cursor-pointer"
        placeholder="Search"
      ></input>
      {showSearch && (
        <SearchModal onRequestClose={toggleModal} show={showSearch} />
      )}
    </>
  );
};

export default Search;

interface modal {
  onRequestClose: () => void;
  show: boolean;
}

const SearchModal = ({ onRequestClose, show }: modal) => {
  let [input, setInput] = useState("");
  const router = useRouter();
  let handleSubmit = () => {
    onRequestClose();
    let searchTerm = input.toLowerCase();
    router.push(`/search/${searchTerm}`);
  };
  let handlePills = (e: string) => {
    onRequestClose();
    e.toLowerCase();
    router.push(`/search/${e}`);
  };
  return (
    <div
      id="default-modal"
      tabIndex={1}
      className="transition-all overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
    >
      <div className="relative w-full max-h-full z-10">
        <div className="relative bg-white w-full shadow sm:h-full">
          <div className="flex items-center justify-between p-4 md:p-5 rounded-t">
            <h3 className="text-xl font-semibold text-gray-900 sm:w-8 sm:h-8 md:w-8 md:h-8">
              <Image src={nike} alt="logo" />
            </h3>
            <form className="relative w-2/3" onSubmit={handleSubmit}>
              <button
                type="submit"
                onClick={handleSubmit}
                className="flex justify-center items-center bg-white h-[40px] w-[40px] left-0 rounded-full absolute"
              >
                <Image
                  src={search}
                  className="h-[20px] w-[20px]"
                  alt="search"
                />
              </button>
              <input
                autoFocus
                className="w-full h-[40px] p-3 pl-12 bg-gray-200 rounded-full focus:outline-none sm:max-w-[1000px]"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              ></input>
            </form>
            <button
              type="button"
              onClick={onRequestClose}
              className="text-black text-md font-medium inline-flex justify-center items-center"
              data-modal-hide="default-modal"
            >
              <span className="text-black hover:text-gray-500">Cancel</span>
            </button>
          </div>
          <div className="flex justify-center w-full p-4">
            <div className="w-4/5">
              <p className="text-base leading-relaxed text-gray-500">
                Popular Search Terms
              </p>
              <div className="flex flex-wrap gap-x-8 gap-y-3">
                <button
                  onClick={(e) => handlePills("air force 1")}
                  className="bg-gray-100 p-2 rounded-xl text-xl font-medium"
                >
                  air force 1
                </button>
                <button
                  onClick={(e) => handlePills("jordan")}
                  className="bg-gray-100 p-2 rounded-xl text-xl font-medium"
                >
                  jordan
                </button>
                <button
                  onClick={(e) => handlePills("air jordan 1")}
                  className="bg-gray-100 p-2 rounded-xl text-xl font-medium"
                >
                  air jordan 1
                </button>
                <button
                  onClick={(e) => handlePills("shoes")}
                  className="bg-gray-100 p-2 rounded-xl text-xl font-medium"
                >
                  shoes
                </button>
                <button
                  onClick={(e) => handlePills("air max")}
                  className="bg-gray-100 p-2 rounded-xl text-xl font-medium"
                >
                  air max
                </button>
                <button
                  onClick={(e) => handlePills("football shoes")}
                  className="bg-gray-100 p-2 rounded-xl text-xl font-medium"
                >
                  football shoes
                </button>
                <button
                  onClick={(e) => handlePills("running shoes")}
                  className="bg-gray-100 p-2 rounded-xl text-xl font-medium"
                >
                  running shoes
                </button>
                <button
                  onClick={(e) => handlePills("slides")}
                  className="bg-gray-100 p-2 rounded-xl text-xl font-medium"
                >
                  slides
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        onClick={onRequestClose}
        className="z-0 modal transition-all overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 bg-gray-500/50 justify-center items-center w-full h-full md:inset-0 max-h-full"
      ></div>
    </div>
  );
};