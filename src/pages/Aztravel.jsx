import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Header from "@/assets/components/Header";
import Footer from "@/assets/components/Footer";
import Aurora from "@/assets/components/Aurora";
import SpotlightCard from "@/assets/components/SpotlightCard";

export default function Aztravel() {
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
                src="https://sandbox.aztravelpartner.com/wp-content/uploads/2025/08/about3.jpg"
                alt="AZ Travel Partner"
                className="w-full h-120 max-md:h-auto rounded-4xl object-center object-cover"
              />
            </div>
            <div>
              <p className="text-white text-center text-5xl max-md:text-3xl mb-6">
                AZ Travel Partner
              </p>
              <p className="text-white text-justify mb-4 md:mb-8 max-md:text-sm">
                Az Travel Partner adalah penyedia jasa perjalanan yang tidak
                hanya merencanakan liburan, tetapi menciptakan pengalaman
                perjalanan yang benar-benar bermakna. Dengan pengalaman
                bertahun-tahun dan kecintaan yang mendalam terhadap Indonesia,
                Az Travel Partner menghadirkan rangkaian perjalanan yang
                dirancang secara cermat, mulai dari destinasi ikonik hingga
                tempat-tempat tersembunyi yang jarang dijamah wisatawan. Setiap
                perjalanan dibangun untuk menghubungkan Anda dengan budaya,
                alam, dan kehidupan lokal di setiap destinasi. Tim ahli lokal AZ
                memastikan setiap perjalanan berjalan aman, lancar, dan penuh
                cerita yang layak dikenang. Dari momen autentik seperti
                mencicipi hidangan tradisional, berbincang dengan masyarakat
                lokal, hingga menyaksikan keindahan alam saat matahari terbit,
                setiap detail dirancang agar perjalanan Anda terasa hangat,
                dekat, dan berkesan.
              </p>
              <p className="text-white text-justify mb-4 md:mb-8 max-md:text-sm">
                Pada proyek ini, saya mengerjakan beberapa halaman utama untuk
                website Az Travel Partner dalam bentuk web statis. Prosesnya
                dimulai dengan memahami konsep perjalanan dan struktur informasi
                yang disiapkan brand, lalu menerjemahkannya ke dalam HTML, CSS,
                dan komponen yang rapi serta responsif. Saya juga memastikan
                tampilan mobile berjalan optimal dengan menyesuaikan tata letak,
                ukuran elemen, dan kenyamanan penggunaan di layar mobile. Dalam
                prosesnya, saya mendapat arahan dari senior terkait pembagian
                section dan detail visual agar hasil akhir tetap konsisten,
                informatif, dan mudah dinavigasi.
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
                  src="sharandy.png"
                  alt="Sharandy of The Sea"
                  className="rounded-xl h-40 max-md:h-auto w-full object-center object-cover"
                />
                <div className="flex mt-6">
                  <div className="w-full h-full">
                    <a href="/Sharandy">
                      <p className="text-white text-center font-bold text-xl max-md:text-sm">
                        Sharandy of The Sea
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
                  className="rounded-xl h-40 max-md:h-auto w-full object-center object-cover"
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
          <div className="col-span-12 md:col-span-4">
            <img
              src="Aztravel.png"
              alt="Dokumentasi Az Travel"
              className="w-full h-100 max-md:h-auto object-center object-cover rounded-4xl"
            />
          </div>
          <div className="col-span-12 md:col-span-4">
            <img
              src="dokumaz.png"
              alt="Dokumentasi Az Travel 2"
              className="w-full h-100 max-md:h-auto object-center object-cover rounded-4xl"
            />
          </div>
          <div className="col-span-12 md:col-span-4">
            <img
              src="dokumaz2.png"
              alt="Dokumentasi Az Travel 3"
              className="w-full h-100 max-md:h-auto object-center object-cover rounded-4xl"
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer Margin="mt-[100px]" />
    </>
  );
}
