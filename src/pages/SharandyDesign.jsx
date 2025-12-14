import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Header from "@/assets/components/Header";
import Footer from "@/assets/components/Footer";
import Aurora from "@/assets/components/Aurora";
import SpotlightCard from "@/assets/components/SpotlightCard";

export default function SharandyWeb() {
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
        {/* Main Content */}
        <div className="grid grid-cols-12 gap-5 max-md:grid-cols-1">
          <div className="col-span-12 md:col-span-9">
            <div className="mb-10">
              <img
                src="sharandy.png"
                alt=""
                className="w-full h-120 max-md:h-auto rounded-4xl object-cover"
              />
            </div>
            <div>
              <p className="text-white text-center text-5xl max-md:text-3xl mb-6">
                Sharandy of The Sea
              </p>
              <p className="text-white text-justify mb-4 md:mb-8 max-md:text-sm">
                Sharandy Phinisi adalah kapal yang menggabungkan tradisi dengan
                kenyamanan modern. Dibangun oleh para pengrajin berpengalaman,
                kapal ini tetap mempertahankan ciri khas phinisi Indonesia
                sambil memberikan fasilitas yang membuat perjalanan lebih nyaman
                dan menyenangkan. Saat masuk ke dalam, suasananya terasa hangat
                dan tenang. Interiornya memadukan elemen kayu tradisional dengan
                desain yang rapi dan modern. Setiap kabin dibuat nyaman, lounge
                terasa santai, dan dek yang luas memberi ruang untuk menikmati
                pemandangan laut kapan saja. Selama berlayar, tamu bisa
                menikmati banyak momen seru maupun santai—seperti makan malam di
                luar ruang, berenang di perairan jernih, atau sekadar duduk
                melihat matahari terbenam. Setiap aktivitas dibuat agar tamu
                bisa menikmati keindahan alam Indonesia dengan cara yang
                sederhana tetapi berkesan,
              </p>
              <p className="text-white text-justify mb-4 md:mb-8 max-md:text-sm">
                Pada proyek ini, saya mendesain beberapa halaman utama untuk
                website Sharandy. Dalam prosesnya, saya bekerja dengan arahan
                serta bantuan dari senior saya, mulai dari memahami kebutuhan
                brand hingga mewujudkannya ke dalam tampilan yang jelas dan
                mudah digunakan. Saya memulai dengan mempelajari gaya visual yang
                ingin ditampilkan, dan informasi apa saja yang harus disampaikan
                kepada pengunjung website. Setelah itu, saya menyusun wireframe
                dan mencoba beberapa variasi layout agar setiap halaman terasa
                rapi dan terstruktur. Senior saya membantu memberikan masukan
                terkait penempatan elemen, pilihan warna, serta alur pengguna agar
                tampilannya lebih konsisten dan nyaman dilihat. Dari proses
                tersebut, saya belajar banyak tentang cara membangun desain yang
                tidak hanya estetik, tetapi juga efektif.
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="col-span-3 md:block hidden h-[max-content] rounded-4xl bg-white/5 border border-white/20 backdrop-blur-[14px] backdrop-saturate-[160%] p-4 pb-6">
            <div className="flex flex-col gap-5">
              <p className="text-white font-bold text-3xl text-center max-md:text-2xl">
                Other Design
              </p>

              <SpotlightCard
                className="h-full border-4 border-[#302944]"
                spotlightColor="rgba(0, 229, 255, 0.2)"
              >
                <img
                  src="svaha.png"
                  alt="Svaha Bali"
                  className="rounded-xl h-40 max-md:h-auto w-full object-center object-cover"
                />
                <div className="flex mt-6">
                  <div className="w-full h-full">
                    <a href="/Svaha">
                      <p className="text-white text-center font-bold text-xl max-md:text-sm">
                        Svaha Bali
                      </p>
                      <p className="text-center text-[#999999] max-md:text-xs">
                        Desain UI/UX
                      </p>
                    </a>
                  </div>
                </div>
              </SpotlightCard>

              <SpotlightCard
                className="h-full border-4 border-[#302944]"
                spotlightColor="rgba(0, 229, 255, 0.2)"
              >
                <img
                  src="bdi.png"
                  alt="BMHS Diklat Indonesia"
                  className="rounded-xl h-40 max-md:h-auto object-center object-cover w-full"
                />
                <div className="flex mt-6">
                  <div className="w-full h-full">
                    <a href="/BDI">
                      <p className="text-white text-center font-bold text-xl max-md:text-sm">
                        BMHS Diklat Indonesia
                      </p>
                      <p className="text-center text-[#999999] max-md:text-xs">
                        Desain UI/UX
                      </p>
                    </a>
                  </div>
                </div>
              </SpotlightCard>
            </div>
          </div>
        </div>

        {/* Dokumentasi */}
        <div className="grid grid-cols-12 gap-5 max-md:grid-cols-1 mt-4 md:mt-10">
          <div className="col-span-12">
            <p className="text-white text-center text-4xl max-md:text-2xl mb-4">
              DOKUMENTASI
            </p>
          </div>
          <div className="col-span-12 md:col-span-6">
            <img
              src="dokumsharandy.png"
              alt=""
              className="w-full h-80 max-md:h-auto object-center object-cover rounded-4xl"
            />
          </div>
          <div className="col-span-12 md:col-span-6">
            <img
              src="dokumsharandy2.png"
              alt=""
              className="w-full h-80 max-md:h-auto object-center object-cover rounded-4xl"
            />
          </div>
           <div className="col-span-12 md:col-span-6">
            <img
              src="dokumsharandy3.png"
              alt=""
              className="w-full h-80 max-md:h-auto object-center object-cover rounded-4xl"
            />
          </div>
           <div className="col-span-12 md:col-span-6">
            <img
              src="dokumsharandy4.png"
              alt=""
              className="w-full h-80 max-md:h-auto object-center object-cover rounded-4xl"
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer Margin="mt-[100px]" />
    </>
  );
}
