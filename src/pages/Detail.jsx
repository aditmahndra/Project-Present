import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Header from "@/assets/components/Header";
import Footer from "@/assets/components/Footer";
import Aurora from "@/assets/components/Aurora";
import SpotlightCard from "@/assets/components/SpotlightCard";

export default function Detail() {
  return (
    <>
      {/* Header */}
      <Header />

      {/* Background */}
      <div className="fixed inset-0 bg-black z-0">
        <Aurora
          colorStops={["#8f66ff", "#b19eef", "#5227ff"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>

      <div className="max-w-screen-xl mx-auto relative z-10 mt-25 md:mt-35 px-4 max-md:px-2">
        <div className="grid grid-cols-12 gap-x-4 gap-y-10">
            <div className="col-span-12">
                <p className="text-white font-bold text-center text-xl md:text-4xl" >Detail Pengerjaan Website Development</p>
            </div>
            <div className="col-span-12 md:col-span-6">
                <img src="./Detail/detail1.png" alt="Detail" className="aspect-video rounded-xl mb-4" />
                <p className="text-white font-bold text-center md:text-left text-base md:text-xl" >1. Buka Visual Studio Code</p>
            </div>
            <div className="col-span-12 md:col-span-6">
                <img src="./Detail/detail2.png" alt="Detail" className="aspect-video rounded-xl mb-4" />
                <p className="text-white font-bold text-center md:text-left text-base md:text-xl" >2. Membuat Folder Baru Untuk Project</p>
            </div>
            <div className="col-span-12 md:col-span-6">
                <img src="./Detail/detail3.png" alt="Detail" className="aspect-video rounded-xl mb-4" />
                <p className="text-white font-bold text-center md:text-left text-base md:text-xl" >3. Membuat File Penting Seperti Index, Header, Footer,<br></br> Page dan style.css.</p>
            </div>
            <div className="col-span-12 md:col-span-6">
                <img src="./Detail/detail4.png" alt="Detail" className="aspect-video rounded-xl mb-4" />
                <p className="text-white font-bold text-center md:text-left text-base md:text-xl" >4. Membuat Struktur Dasar dari HTML Seperti HTML,<br></br> Head dan Body.</p>
            </div>
            <div className="col-span-12 md:col-span-6">
                <img src="./Detail/detail5.png" alt="Detail" className="aspect-video rounded-xl mb-4" />
                <p className="text-white font-bold text-center md:text-left text-base md:text-xl" >5. Menambahkan CDN Links dari Bootstrap.</p>
            </div>
            <div className="col-span-12 md:col-span-6">
                <img src="./Detail/detail6.png" alt="Detail" className="aspect-video rounded-xl mb-4" />
                <p className="text-white font-bold text-center md:text-left text-base md:text-xl" >6. Mulai Melakukan Sclicing Website</p>
            </div>
            <div className="col-span-12 md:col-span-6">
                <img src="./Detail/detail7.png" alt="Detail" className="aspect-video rounded-xl mb-4" />
                <p className="text-white font-bold text-center md:text-left text-base md:text-xl" >7. Menyesuaikan Berdasarkan Referensi Desain UI/UX</p>
            </div>
            <div className="col-span-12 md:col-span-6">
                <img src="./Detail/detail8.png" alt="Detail" className="aspect-video rounded-xl mb-4" />
                <p className="text-white font-bold text-center md:text-left text-base md:text-xl" >8. Menjalankan website melalui Live Server/Localhost untuk pengecekan tampilan.</p>
            </div>
        </div>
      </div>

      {/* Footer */}
      <Footer Margin="mt-[100px]" />
    </>
  );
}
