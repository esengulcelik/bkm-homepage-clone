import Image from "next/image"

const category =()=>{

    const category = [
        {
            id: 1,
            src: "/images/top.svg" ,
            name: "TOP 500"
        },
        {
            id: 2,
            src: "/images/manga.svg" ,
            name: "Manga"
        },
        {
            id: 3,
            src: "/images/bilim-kurgu.svg" ,
            name: "Bilim Kurgu"
        },
        {
            id: 4,
            src: "/images/harry-potter.svg" ,
            name: "Harry Potter"
        },
        {
            id: 5,
            src: "/images/suc-ve-gizem.svg" ,
            name: "Suç ve Gizem"
        },
        {
            id: 6,
            src: "/images/fantastik.svg" ,
            name: "Fantastik"
        },
        {
            id: 7,
            src: "/images/defterler.svg" ,
            name: "Defterler"
        },
        {
            id: 8,
            src: "/images/aksesuarlar.svg" ,
            name: "Aksesuarlar"
        }
    ]
    return(
        <>
         <div className="container mt-5 mx-auto max-w-6xl w-full  flex flex-wrap justify-center">
        {category.map((categories) => (
          <div key={categories.id} className="flex w-28 h-28 rounded-2xl p-2 flex-col shadow-md text-center items-center m-4">
            <Image
              src={categories.src} 
              alt={categories.name} 
              width={60}
              height={60}
              className="h-16"
            />
            <p className="mt-2 text-center font-medium text-sm">{categories.name}</p>
          </div>
        ))}
      </div>
        </>
    )
}

export default category;