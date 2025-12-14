import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Header from "@/assets/components/Header";
import Footer from "@/assets/components/Footer";
import Aurora from "@/assets/components/Aurora";
import SpotlightCard from "@/assets/components/SpotlightCard";

export default function BDI() {
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
                src="bdi.png"
                alt="BMHS Diklat Indonesia"
                className="w-full h-120 max-md:h-auto rounded-4xl object-center object-cover"
              />
            </div>
            <div>
              <p className="text-white text-center text-5xl max-md:text-3xl mb-6">
                BMHS Diklat Indonesia
              </p>
              <p className="text-white text-justify mb-4 md:mb-8 max-md:text-sm">
                BMHS Diklat Indonesia adalah pusat pendidikan dan pelatihan
                tenaga kesehatan yang berdiri di Jakarta sejak tahun 2017. BMHS
                berkomitmen untuk meningkatkan kualitas pelayanan kesehatan di
                Indonesia dengan menyediakan program pendidikan dan pengembangan
                keterampilan bagi para profesional kesehatan. Dengan fokus pada
                pelatihan yang terarah, berkualitas, dan relevan dengan
                kebutuhan industri kesehatan, BMHS berupaya memberikan
                pengalaman belajar yang efektif, terstruktur, dan berdampak
                nyata bagi peserta. Melalui dedikasi dan pengalaman dalam dunia
                pendidikan kesehatan, BMHS terus menghadirkan program
                pembelajaran yang mendukung peningkatan kompetensi dan
                profesionalisme tenaga kesehatan di seluruh Indonesia.
              </p>
              <p className="text-white text-justify mb-4 md:mb-8 max-md:text-sm">
                Pada proyek ini, saya mengerjakan desain beberapa halaman utama
                untuk website BMHS Diklat Indonesia. Dalam prosesnya, saya
                bekerja dengan arahan serta masukan dari senior saya, mulai dari
                memahami karakter lembaga hingga menerjemahkannya ke tampilan
                yang informatif dan mudah digunakan. Saya memulai dengan
                mempelajari kebutuhan visual, struktur informasi, dan pesan yang
                ingin disampaikan kepada para peserta pelatihan. Setelah itu,
                saya menyusun wireframe dan mencoba beberapa variasi layout
                untuk memastikan setiap halaman tersaji dengan rapi dan
                terorganisir. Senior saya membantu memberikan insight mengenai
                penempatan elemen, pemilihan warna, serta alur pengguna agar
                hasil akhirnya konsisten, profesional, dan nyaman diakses.
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
                  src="sharandy.png"
                  alt="Sharandy of The Sea"
                  className="rounded-xl h-40 max-md:h-auto w-full object-center object-cover"
                />
                <div className="flex mt-6">
                  <div className="w-full h-full">
                    <a href="/Sharandy-Design">
                      <p className="text-white text-center font-bold text-xl max-md:text-sm">
                        Sharandy Of The Sea
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
              src="dokumbdi.png"
              alt="Dokumentasi BDI 1"
              className="w-full h-80 max-md:h-auto object-center object-cover rounded-4xl"
            />
          </div>
          <div className="col-span-12 md:col-span-6">
            <img
              src="dokumbdi2.png"
              alt="Dokumentasi BDI 2"
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
