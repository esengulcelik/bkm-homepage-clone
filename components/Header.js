"use client"
import { IoSearchOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { SlBasketLoaded } from "react-icons/sl";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Header = () => {
    const router=useRouter()
    const category = [
        "EDEBİYAT KİTAPLARI",
        "KIRTASİYE",
        "OKULA YARDIMCI",
        "OYUNCAK",
        "SINAVLARA HAZIRLIK",
        "KİTAP TAVSİYE",
        "TÜM KAMPANYALAR",
        "ÇOK SATANLAR"
    ]
    const sepet=()=>{
        router.push("/sepet")
    }
 const homePage=()=>{
    router.push("/")
 }
    return (
        <>
        <div className="shadow-xl">
                <div className="container mx-auto max-w-6xl items-center justify-between mt-4 ">
                    <div className="flex gap-3 lg:justify-normal justify-between">
                        <button onClick={homePage}>
                            <Image src="/images/logo.png" width={200} height={200} />
                        </button>
                        <div className="lg:flex hidden items-center relative border rounded-md w-full">
                            <IoSearchOutline className="absolute left-2 w-7 h-7 text-gray-500" /> <input placeholder="Aradığınız ürünün adını yazınız." className="py-4 pl-10 border-gray-200 w-full rounded-sm" />
                        </div>
                        <div className="flex gap-3">
                            <button className=" lg:block hidden border p-3 rounded-md shadow-md hover:shadow-red-600"><FaRegHeart className="w-6 h-6 text-red-600 font-bold" /></button>
                            <button className="border p-3 rounded-md shadow-md hover:shadow-red-600"><FaRegUserCircle className="w-6 h-6 text-red-600 font-bold" /></button>
                            <button onClick={sepet} className="border p-3 rounded-md shadow-md hover:shadow-red-600"><SlBasketLoaded className="w-6 h-6 text-red-600 font-bold" /></button>
                        </div>
                        </div>
                        <div className="lg:hidden flex mt-5 items-center relative border rounded-md w-full">
                            <IoSearchOutline className="absolute left-2 w-7 h-7 text-gray-500" /> <input placeholder="Aradığınız ürünün adını yazınız." className="py-4 pl-10 border-gray-200 w-full rounded-sm" />
                        </div>
                    <div className="lg:flex hidden font-bold text-xs w-full gap-2 items-center justify-between py-4">
                        {category.map((categories, i) => (
                            <div key={i} className="flex items-center">
                                <Link href="/" className="mr-2">
                                    <p className="whitespace-nowrap">{categories}</p>
                                </Link>
                                {i < category.length - 1 && (
                                    <div className="border-r border-red-400 h-6 mx-4"></div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
export default Header;

