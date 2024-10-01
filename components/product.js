import Image from "next/image";
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css'; 
const product = ({ data,addToCart }) => {
    const images = [
        '/images/gokcen.jpg',
        '/images/gokcen-1.jpg',
        '/images/gokcen-2.jpg',
        '/images/beyaz-leke.jpg',
        '/images/bir-idam.jpg'
    ]
    const getRandomImage = () => {
        const randomIndex = Math.floor(Math.random() * images.length);
        return images[randomIndex];
    };
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
              breakpoint: 1024, 
              settings: {
                slidesToShow: 3,
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
    return (
        <>
            <div className="container mx-auto max-w-6xl">
                <div className="text-center bg-red-600 flex text-white w-1/4 rounded-lg p-1 justify-center items-center mb-5">
                    <p className="text-center">ÇOK SATAN</p>
                </div>
                
                <Slider {...settings}>
                    {data.map((item, index) => (
                         <div key={index} className="flex justify-center items-center p-4">
                         <div className="border py-8 gap-8 border-red-600  rounded-lg flex flex-col items-center shadow-xl p-3 text-xs h-96">
                           <div className="flex-shrink-0 mb-4">
                             <Image src={getRandomImage()} width={100} height={100} alt="Product Image" className=" h-40" />
                           </div>
                           <div className="text-center flex flex-col gap-6">
                             <div className="text-center flex flex-col gap-2">
                               <p className="font-bold">{item.name}</p>
                               <p>${item.price}</p>
                             </div>
                           </div>
                           <button  onClick={()=>addToCart(item)} className="bg-red-600 text-white rounded-md w-full p-1">Sepete Ekle</button>
                         </div>
                       </div>
                    ))}
                          </Slider>
            </div>
        </>
    )
}

export default product;