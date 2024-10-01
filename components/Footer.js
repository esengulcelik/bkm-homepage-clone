const footer=()=>{
const kategori=[
    "Edebiyat Kitapları",
    "Tarih Kitapları",
    "Hazırlık Kitapları",
    "Çocuk Kitapları",
    "Kırtasiye",
    "Oyuncak"
]
const bilgi = [
    "Hakkımızda",
    "Kişisel Verilerin Korunması",
    "Teslimat Koşulları",
    "Satış Sözleşmesi",
    "Garanti ve İade Koşulları",
  ];
  const erisim = [
    "İletişim",
    "Mağazalarımız",
    "Yeni Çıkan Kitaplar",
    "Çok Satan Kitaplar",
    "İşlem Rehberi",
  ];
  const üye= [
    "Sık Sorulan Sorular",
    "Yeni Üyelik",
    "Üye Girişi",
  ];
    return(
        <>
        <div className="bg-gray-100">
        <div className="lg:flex lg:flex-row flex flex-col container mx-auto max-w-6xl items-start justify-between mt-5 py-5">
            
            <div className="flex flex-col gap-2">
                <h1 className="font-bold">KATEGORİLER</h1>
                {kategori.map((kategoriler,i)=>
                <button key={i} className="text-left">{kategoriler}</button>
           
            )}
             </div>
            <div className="flex flex-col gap-2">
                <h1 className="font-bold">Önemli Bilgiler</h1>
                {bilgi.map((bilgiler,i)=>
                <button key={i} className="text-left">{bilgiler}</button>
           
            )}
            </div>
            <div className="flex flex-col gap-2">
                <h1 className="font-bold">Hızlı Erişim</h1>
                {erisim.map((erisimler,i)=>
                <button key={i} className="text-left">{erisimler}</button>
            )}
            </div>
            <div className="flex flex-col gap-2">
                <h1 className="font-bold">Üye</h1>
                {üye.map((üyeler,i)=>
                <button key={i} className="text-left">{üyeler}</button>
            )}
            </div>
            </div>
        </div>
        <div className="bg-gray-400">
            <div className="flex container text-xs mx-auto max-w-6xl items-start justify-between py-3 text-white">
                <p>Mersis No: 0127012085800037</p>
                <p>www.bkmkitap.com © Copyright 2010 - 2024 Tüm Hakları Saklıdır.</p>
            </div>
        </div>
        </>
    )
}

export default footer;