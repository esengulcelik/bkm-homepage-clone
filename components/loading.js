import React from 'react';
import { SlBasket } from "react-icons/sl";
import { useRouter } from 'next/navigation';
const LoadingSpinner = () => {
    const router=useRouter()
    const homePage=()=>{
router.push("/")
    }
  return (
    <div className="container z-50 mx-auto mt-10 px-2 py-2 rounded-md">
  
    <div className='h-[50vh] text-center w-full container mx-auto flex flex-col justify-center items-center gap-4'>
        <SlBasket className='w-20 h-20' />
        <h1 className='text-xl'>SEPETİNİZDE ÜRÜN BULUNMAMAKTADIR</h1>
        <button onClick={homePage} className='bg-gray-900 text-white p-3 rounded-lg text-sm'>Alışverişe Devam Et</button>
    </div>
</div>
  );
};

export default LoadingSpinner;