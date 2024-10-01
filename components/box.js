import Image from "next/image"

const box =()=>{
    const image = [
        {
            id: 1,
            src: "/images/kitap-tavsiyeleri.png" ,
        },
        {
            id: 2,
            src: "/images/sinavlara-hazirlik.png" ,
        },
        {
            id: 3,
            src: "/images/film-ve.png" ,
        },
        {
            id: 4,
            src: "/images/puzzlelar.png" ,
        }
    ]
    return(
        <>
         <div className="container mt-5 mx-auto max-w-6xl w-full  flex flex-wrap justify-center">
        {image.map((images) => (
          <div key={images.id} className="flex rounded-2xl p-2 flex-col text-center items-center ">
            <Image
              src={images.src} 
              width={250}
              height={100}
            />
          </div>
        ))}
      </div>
        </>
    )
}

export default box;