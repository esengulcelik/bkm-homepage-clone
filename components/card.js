import Image from "next/image"

const card =()=>{

    const card = [
        {
            id: 1,
            src: "/images/ithaki.webp" ,
        },
        {
            id: 2,
            src: "/images/indigo.webp" ,
        },
        {
            id: 3,
            src: "/images/kronik.webp" ,
        },
        {
            id: 4,
            src: "/images/ketebe.webp" ,
        },
        {
            id: 5,
            src: "/images/is-bankasi-kultur-yayinlari-1-tr.webp" ,
        },
        {
            id: 6,
            src: "/images/kronik.webp" ,
        },
        {
            id: 7,
            src: "/images/ithaki.webp" ,
        },
        {
            id: 8,
            src: "/images/ketebe.webp" ,
        },
        {
            id: 9,
            src: "/images/is-bankasi-kultur-yayinlari-1-tr.webp" ,
        },
        {
            id: 10,
            src: "/images/uc.webp" ,
        },
        {
            id: 11,
            src: "/images/ithaki.webp" ,
        },
        {
            id: 12,
            src: "/images/indigo.webp" ,
        }
    ]
    return(
        <>
         <div className="container mt-5 mx-auto max-w-6xl w-full  flex flex-wrap justify-center">
        {card.map((cards) => (
          <div key={cards.id} className="flex w-36 h-36 rounded-2xl p-2 flex-col shadow-md text-center items-center m-4">
            <Image
              src={cards.src} 
              width={150}
              height={100}
            />
          </div>
        ))}
      </div>
        </>
    )
}

export default card;