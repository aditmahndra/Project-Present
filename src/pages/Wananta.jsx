import "../App.css";
import Header from "@/assets/components/Header";
import Footer from "@/assets/components/Footer";
import Aurora from "@/assets/components/Aurora";
import SpotlightCard from "@/assets/components/SpotlightCard";

export default function Wananta() {
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
                src="https://wanantaliving.com/wp-content/uploads/2025/10/rahayugh-34.jpg"
                alt="Wananta Living"
                className="w-full h-120 max-md:h-auto rounded-4xl object-center object-cover"
              />
            </div>
            <div>
              <p className="text-white text-center text-5xl max-md:text-3xl mb-6">
                Wananta Living
              </p>
              <p className="text-white text-justify mb-4 md:mb-8 max-md:text-sm">
                Wananta Living adalah perusahaan manajemen properti yang berakar
                dari kecintaan mendalam terhadap budaya dan hospitality Bali.
                Berawal dari usaha lokal berskala kecil, Wananta Living
                berkembang menjadi mitra terpercaya bagi pemilik properti dari
                berbagai negara. Dengan pengalaman mengelola banyak vila di Ubud
                dan sekitarnya, kami memahami apa yang dibutuhkan untuk
                menjadikan sebuah properti lebih menguntungkan sekaligus
                berkelanjutan. Setiap layanan kami dirancang dengan perhatian
                terhadap detail mulai dari pemasaran, pengelolaan operasional,
                hingga memastikan para tamu merasakan keramahan Bali yang hangat
                dan autentik. Komitmen kami adalah memberikan pengalaman terbaik
                bagi pemilik properti dan tamu, dengan pendekatan yang
                profesional, tulus, dan penuh dedikasi.
              </p>
              <p className="text-white text-justify mb-4 md:mb-8 max-md:text-sm">
                Pada proyek ini, saya mengerjakan beberapa halaman utama untuk
                website Wananta Living dalam bentuk web statis. Saya memulai
                dengan memahami identitas brand, layanan yang ditawarkan, serta
                alur informasi yang perlu disusun, lalu mengimplementasikannya
                ke dalam HTML, CSS, dan komponen yang terstruktur. Selain versi
                desktop, saya juga menyesuaikan tampilan mobile dan tablet
                sesuai permintaan klien, termasuk pengaturan layout, ukuran
                elemen, dan kenyamanan penggunaan di berbagai perangkat.
                Sepanjang proses, saya menerima masukan dari senior agar hasil
                akhirnya tetap konsisten, profesional, dan mudah dinavigasi.
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
                  src="https://sandbox.aztravelpartner.com/wp-content/uploads/2025/08/about3.jpg"
                  alt="AZTravel"
                  className="rounded-xl h-40 max-md:h-auto w-full object-center object-cover"
                />
                <div className="flex mt-6">
                  <div className="w-full h-full">
                    <a href="/Aztravel">
                      <p className="text-white text-center font-bold text-xl max-md:text-sm">
                        AZTravel Partner
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
              src="dokumwananta.png"
              alt="Dokumentasi 1"
              className="w-full h-100 max-md:h-auto object-center object-cover rounded-4xl"
            />
          </div>
          <div className="col-span-12 md:col-span-6">
            <img
              src="dokumwananta2.png"
              alt="Dokumentasi 2"
              className="w-full h-100 max-md:h-auto object-center object-cover rounded-4xl"
            />
          </div>
          <div className="col-span-12 md:col-span-6">
            <img
              src="dokumwananta3.png"
              alt="Dokumentasi 3"
              className="w-full h-100 max-md:h-auto object-center object-cover rounded-4xl"
            />
          </div>
          <div className="col-span-12 md:col-span-6">
            <img
              src="dokumwananta4.png"
              alt="Dokumentasi 4"
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
