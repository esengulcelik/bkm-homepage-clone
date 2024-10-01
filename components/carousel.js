"use client"
import React, {useState,useEffect} from 'react';
import Image from "next/image"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css'; 

const carousel =()=>{

    const image = [
        {
            id: 1,
            src: "/images/go.jpg" ,
        },
        {
            id: 2,
            src: "/images/juno.jpg" ,
        },
        {
            id: 3,
            src: "/images/redhouse.jpg" ,
        },
        {
            id: 4,
            src: "/images/athica.jpg" ,
        },
        {
            id: 5,
            src: "/images/ozyurek.jpg" ,
        }
    ]
    const settings2 = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
              }
            },
            {
              breakpoint: 768, 
              settings: {
                slidesToShow: 1,
              }
            }
          ]
      };

    return(
        <>
         <div className="container mt-5 mx-auto max-w-6xl w-full flex flex-wrap justify-center">
         <Image
              src="/images/ozyurek.jpg"
              width={300}
              height={300}
            />
         <Slider {...settings2}>
           {image.map((images) => (
          <div key={images.id} className="flex rounded-2xl p-2 flex-col text-center items-center m-4">
            <Image
              src={images.src} 
              width={300}
              height={300}
            />
          </div>
        ))}
         </Slider> 
      </div>
        </>
    )
}

export default carousel;