import { CiGrid42 } from "react-icons/ci";
import { FiFileText } from "react-icons/fi";
import { FaHandHoldingMedical } from "react-icons/fa";
import { FaBook } from "react-icons/fa";

const text=()=>{
    return(
        <>
        <div className="container mx-auto max-w-6xl mt-10">
        <div className="flex border text-sm px-8 py-2 border-red-700 rounded-full text-center items-center justify-between ">
            <div className="flex items-center gap-2">
                <CiGrid42 className="text-red-600 w-8 h-8"/>
                <p className="text-gray-500">Yüz Binlerce Çeşidin
                <strong> DOĞRU ADRESİ</strong></p>
            </div>
            <div class="h-16 border-l border-red-500"></div>
            <div className="flex items-center gap-2">
                <FiFileText className="text-red-600 w-8 h-8"/>
                <p className="text-gray-500">Yüz Binlerce Çeşidin
                <strong> DOĞRU ADRESİ</strong> </p>
            </div>
            <div class="h-16 border-l border-red-500"></div>
            <div className="flex items-center gap-2">
                <FaHandHoldingMedical className="text-red-600 w-8 h-8"/>
                <p className="text-gray-500">Yüz Binlerce Çeşidin
                <strong> DOĞRU ADRESİ</strong></p>
            </div>
        </div>
        <div className="flex mt-5 items-center gap-3">
        <div className="flex basis-3/4 items-center gap-3">
            <FaBook className="w-40 h-32 text-red-600"/>
            <div className="flex flex-col gap-3 text-gray-600">
            <h2 className="font-bold">Kitap</h2>
            <p className="text-sm">Okumak benim tutkum diyorsanız, aradığınız her kitabı bkmkitap.com'da ve mağazalarımızda bulabilirsiniz. Farklı türlerde yüzbinlerce kitapla birlikte en çok satanlar listesinde yer alanlar ve yeni çıkan kitapların hepsi burada.<strong>Siz sadece ne okumak istediğinize karar verin</strong></p>
            </div>
       
        </div>
        <div class="h-24 border-l border-gray-400"></div>
        <div className="flex basis-1/4">
<div className="bg-red-600 text-white rounded-br-2xl rounded-bl-2xl p-2 font-semibold text-sm">BKMKİTAP MOBİL UYGULAMASI CEBİNİZDE!</div>
        </div>
        </div>
        </div>
        </>
    )
}

export default text;