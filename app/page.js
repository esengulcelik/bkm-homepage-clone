"use client"
import Image from "next/image";
import Header from "@/components/Header";
import Slider from "@/components/slider";
import Category from "@/components/category";
import Footer from "@/components/Footer";
import Product from "@/components/product";
import Card from "@/components/card";
import Box from "@/components/box";
import Text from "@/components/text";
import { useState,useEffect } from "react";
import axios from "axios";

export default function Home() {

  const [card, setCard] = useState([])
  const [data, setData] = useState([])
  const [adet, setAdet] = useState(1)
  const generateRandomPrice = () => {
    return (Math.random() * 100).toFixed(2); 
  };

  const fetchData = async () => {
    try {
      const response = await axios.get('http://openlibrary.org/people/george08/lists.json');
      const updatedData = response.data.entries.map((item,index) => ({
        ...item,
        price: generateRandomPrice(),
        id:index

      }));
      console.log(updatedData); 
      setData(updatedData);
    } catch (error) {
      console.error( error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

const addToCart=(product)=>{
  setCard(
    card=>{
      if (card.find(x => x.id === product.id)) {
        const updatedCard = card.map(item => {
          if (item.id === product.id) {
            return { ...item, adet: item.adet + adet };
          }
          return item;
        });

        localStorage.setItem('card', JSON.stringify(updatedCard));
        return updatedCard;
      } else {
        product.adet = adet;
        const updatedCard = [...card, product];
        localStorage.setItem('card', JSON.stringify(updatedCard));
        return updatedCard;
      }

    }
  )
}
console.log(data)
  return (
    <>
    
      <Header />
      <Slider />
      <Category />
      {data ? <Product data={data} setData={setData} addToCart={addToCart} /> : <p>Loading...</p>}
      <Image src="/images/populerr.png" width={800} height={800} className="container mx-auto max-w-6xl" />
     <Card/>
     <Box/>
     <Text/>
      <Footer />
    </>
  );
}
