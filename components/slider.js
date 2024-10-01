"use client"
import Image from "next/image";
import { useState } from "react";

const slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    '/images/herkitap.jpg',
    '/images/okula.jpg',
    '/images/tyt.jpg',
  ];
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };
  return (
    <>
      <div className="relative w-full h-80 overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`
          }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="flex-shrink-0 object-fit h-full"
            >
              <img
                src={slide}
                alt={`Slide ${index}`}
                className="w-full h-full object-fit"
              />
            </div>
          ))}
        </div>
        <button
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white text-gray-800 p-2 font-bold rounded-full"
          onClick={prevSlide}
        >
          &lt;
        </button>
        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white text-gray-800 p-2 font-bold rounded-full"
          onClick={nextSlide}
        >
          &gt;
        </button>
      </div>
    </>
  )
}

export default slider;