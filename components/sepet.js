"use client"
import Image from "next/image";
import { SlBasketLoaded } from "react-icons/sl";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { AiOutlineDelete } from "react-icons/ai";
import { useState, useEffect } from "react";
import Loading from "@/components/loading"
import product from "./product";
const sepet = () => {
    const [card, setCard] = useState([])
    useEffect(() => {
        const saved = localStorage.getItem("card")
        if (saved) {
            setCard(JSON.parse(saved))
        }
    }, [])

    const increase = (product) => {
        const newCard = [...card]
        const find = newCard.find(x => x.id === product.id)
        console.log(find)
        find.adet += 1
        setCard(newCard)
        localStorage.setItem('card', JSON.stringify(newCard))
    }
    const decrease=(product)=>{
        if(product.adet>1){
        const newCard=[...card]
        const find=newCard.find(x=>x.id===product.id)
        find.adet-=1
        setCard(newCard)
        localStorage.setItem('card',JSON.stringify(newCard))
    }
    }
    const handleDelete=(id)=>{
        const newCard=card.filter(x=>x.id!==id)
        setCard(newCard)
        localStorage.setItem('card',JSON.stringify(newCard))
    }
    const allDelete=()=>{
        const newCard=[]
        localStorage.removeItem('card')
        setCard(newCard)
        localStorage.setItem('card',JSON.stringify(newCard))
    }
  
    const calculate =()=>{
        return card.reduce((total,product)=>{
            const adet=product.adet||1
            const strPrice=typeof product.price==='string' ? product.price : String(product.price)
            const newPrice=parseFloat(strPrice.replace(",","."))
            return total+(newPrice*adet)

        },0).toFixed(2)
    }
    return (
        <>
            {card.length > 0 ?
                <div className="container mx-auto max-w-6xl mt-10 flex gap-5">
                    <div className="flex flex-col gap-5 basis-3/4">
                        <div className="bg-red-600 w-40 text-center rounded-xl p-2 font-bold flex items-center gap-2 text-white">
                            <SlBasketLoaded /><h1>Sepetim</h1>
                        </div>
                        {card.map(product => (
                            <div key={product.id} className="flex border rounded-2xl shadow-xl p-5 justify-between" >
                                <div className="flex gap-5">
                                    <div className="border flex p-2">
                                        <Image src="/images/gokcen.jpg" width={60} height={60} />
                                    </div>
                                    <div className="w-40">
                                        <p className="font-bold text-lg">{product.name}</p>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <p className="text-xs font-bold">Adet</p>
                                    <div className="flex border items-center justify-between rounded-md px-2 gap-4 w-28">
                                        <button onClick={() => decrease(product)}><FaMinus className="text-red-600" /></button>
                                        <p className="text-lg">{product.adet}</p>
                                        <button onClick={() => increase(product)}><FaPlus className="text-red-600" /></button>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2 text-xs">
                                    <p className="text-xs font-bold"></p>
                                    <p>Üretici Liste Fiyatı</p>
                                    <p className="font-bold text-xl">{(product.price*product.adet).toFixed()} TL</p>
                                </div>
                                <div className="flex flex-col items-center">
                                    <p>Sil</p>
                                    <button onClick={()=>handleDelete(product.id)} className="border rounded-full p-2 hover:bg-gray-200"><AiOutlineDelete className="" /></button>
                                </div>
                            </div>
                        ))}
                        <div className="flex gap-3">
                            <button className="bg-gray-100 hover:bg-gray-300 border rounded-md border-gray-300 text-xs p-1">Alışveriş Listeme Ekle</button>
                            <button onClick={()=>allDelete()} className="bg-gray-100 hover:bg-gray-300 border rounded-md border-gray-300 text-xs p-1">Sepeti Temizle</button>
                        </div>
                    </div>

                    <div className="border rounded-xl shadow-xl flex gap-4 flex-col basis-1/4 mt-14 p-2">
                        <div className="border border-red-600 rounded-xl text-red-600 p-2 text-center font-bold"><p>Alışverişe Devam Et</p></div>
                        <div className="border p-3 text-sm flex flex-col gap-2">
                            <div className="flex justify-between">
                                <p>Sepet Toplamı</p>
                                <p>{calculate()}</p>
                            </div>
                            <div className="flex justify-between text-green-500 font-bold">
                                <p>Kazancınız</p>
                                <p>447 TL</p>
                            </div>
                            <div className="flex justify-between font-bold">
                                <p>Genel Toplam</p>
                                <p>447 TL</p>
                            </div>
                        </div>
                        <button className="bg-red-600 text-white rounded-lg p-1 text-sm font-bold">SATIN AL</button>
                    </div>
                </div>
                : (
                    <div>
<Loading/>
                    </div>
                )}
        </>
    )
}

export default sepet;