"use client";

import React, { useState } from "react";

type CarouselProps = {
    currentIndex: number;
    setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
};



const Carousel = ({ currentIndex, setCurrentIndex }: CarouselProps) => {

  const items = [
    { id: 1, title: "LawGPT" },
    { id: 2, title: "LawGPT" },
  ];

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  return (
<div className="mb-10 flex justify-center">
  <div className="relative flex items-center">
    {/* Previous Button */}
    {/* <button
      className="bg-gray-300 rounded-full p-2"
      onClick={prevSlide}
    >
      &lt;
    </button> */}
    <button type="button" onClick={prevSlide} className="px-4 h-full cursor-pointer group focus:outline-none" data-carousel-prev>
        <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:outline-none">
            <svg className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
            <span className="hidden">Previous</span>
        </span>
    </button>

    {/* Items */}
    <div className="flex items-center space-x-4">
      {items.map((item, index) => (
        <div
          key={item.id}
          className={`${
            index === currentIndex ? "font-bold" : "font-normal"
          } cursor-pointer`}
          onClick={() => goToSlide(index)}
        >
          {item.title}
        </div>
      ))}
    </div>

    {/* Next Button */}
    {/* <button
      className="bg-gray-300 rounded-full p-2"
      onClick={nextSlide}
    >
      &gt;
    </button> */}
        <button type="button" onClick={nextSlide} className="px-4 h-full cursor-pointer group focus:outline-none" data-carousel-next>
        <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:outline-none">
            <svg className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            <span className="hidden">Next</span>
        </span>
    </button>
  </div>

  {/* Dots */}
  <div className="flex items-center justify-center mt-2">
    {items.map((item, index) => (
      <button
        key={item.id}
        className={`w-3 h-3 rounded-full mx-1 ${
          index === currentIndex ? "bg-gray-500" : "bg-gray-300"
        }`}
        onClick={() => goToSlide(index)}
      />
    ))}
  </div>
</div>

  
  );
};

export default Carousel;
