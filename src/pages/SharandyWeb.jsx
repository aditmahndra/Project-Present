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
                Pada proyek ini, saya mengerjakan seluruh halaman utama untuk website Sharandy dalam bentuk web statis. Prosesnya dimulai dari memahami desain yang sudah disiapkan, lalu menerjemahkannya ke dalam struktur HTML, CSS, dan komponen yang rapi. Saya memastikan setiap halaman mengikuti layout yang konsisten, responsif, dan tetap sesuai dengan gaya visual yang diinginkan. Dalam pengerjaannya, saya juga mendapat arahan dari senior saya, terutama terkait pembagian section, penempatan elemen, dan detail tampilan agar hasil akhirnya lebih teratur dan nyaman digunakan. Selama proses slicing ini, saya belajar banyak tentang bagaimana membangun halaman yang bersih, terstruktur, serta mudah dikembangkan lebih lanjut.
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="col-span-3 md:block hidden h-[max-content] rounded-4xl bg-white/5 border border-white/20 backdrop-blur-[14px] backdrop-saturate-[160%] p-4 pb-6">
            <div className="flex flex-col gap-5">
              <p className="text-white font-bold text-3xl text-center max-md:text-2xl">
                Other Website
              </p>

              <SpotlightCard
                className="h-full border-4 border-[#302944]"
                spotlightColor="rgba(0, 229, 255, 0.2)"
              >
                <img
                  src="https://sandbox.aztravelpartner.com/wp-content/uploads/2025/08/about3.jpg"
                  alt="Az Travel Partner"
                  className="rounded-xl h-50 max-md:h-auto w-full object-center object-cover"
                />
                <div className="flex mt-6">
                  <div className="w-full h-full">
                    <a href="/Aztravel">
                      <p className="text-white text-center font-bold text-xl max-md:text-sm">
                        Az Travel Partner
                      </p>
                      <p className="text-center text-[#999999] max-md:text-xs">
                        Website Slicing
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
                  src="https://wanantaliving.com/wp-content/uploads/2025/10/rahayugh-34.jpg"
                  alt="Wananta Living"
                  className="rounded-xl h-50 max-md:h-auto w-full object-center object-cover"
                />
                <div className="flex mt-6">
                  <div className="w-full h-full">
                    <a href="/Wananta">
                      <p className="text-white text-center font-bold text-xl max-md:text-sm">
                        Wananta Living
                      </p>
                      <p className="text-center text-[#999999] max-md:text-xs">
                        Website Slicing
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
              src="codesharandy.png"
              alt=""
              className="w-full h-100 max-md:h-auto object-center object-cover rounded-4xl"
            />
          </div>
          <div className="col-span-12 md:col-span-6">
            <img
              src="filesharandy.png"
              alt=""
              className="w-full h-100 max-md:h-auto object-center object-cover rounded-4xl"
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
