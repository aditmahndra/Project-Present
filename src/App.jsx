import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faArrowRight } from "@fortawesome/free-solid-svg-icons";

import { Routes, Route } from "react-router-dom";
import SharandyDesain from "./pages/SharandyDesign";
import SharandyWeb from "./pages/SharandyWeb";
import Wananta from "./pages/Wananta";
import AzTravel from "./pages/Aztravel";
import BDI from "./pages/BDI";
import Svaha from "./pages/Svaha";
import Gallery from "./pages/Gallery";
import Detail from "./pages/Detail";

import Header from "./assets/components/Header";
import Footer from "./assets/components/Footer";
import TextPressure from "./assets/components/TextPressure";
import TiltedCard from "./assets/components/TiltedCard";
import Aurora from "./assets/components/Aurora";
import FadeContent from "./assets/components/FadeContent";
import Lanyard from "./assets/components/Lanyard";
import AnimatedContent from "./assets/components/AnimatedContent";
import CountUp from "./assets/components/CountUp";
import ScrollStack, { ScrollStackItem } from "./assets/components/ScrollStack";
import SpotlightCard from "./assets/components/SpotlightCard";
import TextType from "./assets/components/TextType";
import ScrollScale, { ScrollScaleItem } from "./assets/components/ScrollScale";
import CircularGallery from "./assets/components/CircularGallery";

function Landing() {
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

      <FadeContent
        blur={true}
        duration={1000}
        easing="ease-out"
        initialOpacity={0}
      >
        {/* Landing Page */}
        <div
          id="home"
          className="max-w-screen-xl mx-auto px-4 mt-[130px] md:mt-[150px] relative z-10 "
        >
          <div className="grid grid-cols-12 md:gap-10">
            <div className="col-span-12 md:col-span-4 hidden md:block">
              <TiltedCard
                imageSrc="sekolah.png"
                altText="PKL"
                captionText="Aditya"
                containerHeight="100%"
                containerWidth="100%"
                imageHeight="550px"
                imageWidth="100%"
                rotateAmplitude={12}
                scaleOnHover={1.2}
                showMobileWarning={false}
                showTooltip={true}
              />
            </div>

            <div className="col-span-12 md:col-span-8 my-auto md:pl-6">
              <div className="pb-5 px-8 md:px-0">
                <TextPressure
                  text="Hello!"
                  flex={true}
                  alpha={false}
                  stroke={false}
                  width={true}
                  weight={800}
                  italic={true}
                  textColor="#ffffffff"
                  strokeColor="#ff0000"
                  minFontSize={40}
                />
              </div>
              <span className=" bg-gradient-to-b from-white to-slate-400/30 bg-clip-text w-full text-transparent font-semibold leading-none text-center md:text-start text-2xl md:text-5xl hidden md:inline-block">
                ADITYA MAHENDRA PUTRA
              </span>

              <p className="text-white text-justify pt-4 text-[12px] md:text-[16px] hidden md:block">
                Selamat datang di website laporan saya! Di sini berisikan
                laporan mengenai kegiatan praktrin yang saya jalani, mulai dari
                tugas-tugas yang saya kerjakan, pengalaman yang saya
                dapatkan,hingga berbagai hal baru yang berhasil saya pelajari
                selama berada di perusahaan. Website ini saya buat sebagai media
                dokumentasi agar perjalanan PKL saya bisa tersampaikan dengan
                lebih jelas dan mudah dipahami.
              </p>
            </div>
          </div>
        </div>

        {/* Container About Me */}
        <div
          id="introduction"
          className="scroll-mt-[100px] max-w-screen-xl mx-auto px-4  relative z-10 md:mt-[150px] "
        >
          <div className="grid grid-cols-12 w-full h-auto md:h-[600px] rounded-4xl bg-white/5 border border-white/20 backdrop-blur-[14px] backdrop-saturate-[160%]">
            <div className="col-span-12 md:col-span-7 px-4 py-8 md:py-8 flex justify-center flex-col md:pl-[50px]">
              <span className=" bg-gradient-to-b from-white to-slate-400/30 bg-clip-text text-transparent font-semibold leading-none text-[30px] flex justify-center md:justify-end md:text-5xl  mb-4 md:mb-[30px]">
                ABOUT ME
              </span>

              <p className=" text-white text-[18px] md:text-3xl text-center md:text-right">
                Hallo! Perkenalkan nama saya <br></br>
                <span className="font-semibold">
                  I Kadek Aditya Mahendra Putra
                </span>
              </p>
              <p className="text-white text-[12px] md:text-[16px] text-justify md:[text-align-last:right] mb-[20px] md:mb-[40px] mt-4">
                Saya merupakan seorang siswa yang bersekolah di SMK TI Bali
                GLobal Denpasar dengan jurusan Rekayaya Perangkat Lunak. Saya
                Berusia 16 Tahun dan Berdomisili di Denpasar, Bali. Saya seorang
                Front-End Developer yang fokus membangun website modern,
                responsif, dan mudah digunakan. Selain itu, saya juga tertarik
                dan mengembangkan kemampuan dalam UI/UX Design untuk
                menghadirkan pengalaman pengguna yang nyaman dan estetis.
              </p>
              <div className="flex flex-row justify-end gap-3 md:gap-6 mx-auto md:mx-0">
                <div className="rounded-4xl bg-white/5 border border-white/20 backdrop-blur-[14px] backdrop-saturate-[160%] py-2 px-4 md:px-8 w-max">
                  <p className="text-white text-[12px] md:text-[16px]">
                    XI RPL 2
                  </p>
                </div>
                <div className="rounded-4xl bg-white/5 border border-white/20 backdrop-blur-[14px] backdrop-saturate-[160%] py-2 px-4 md:px-8 w-max">
                  <p className="text-white text-[12px] md:text-[16px]">
                    ABSEN 11
                  </p>
                </div>
                <div className="rounded-4xl bg-white/5 border border-white/20 backdrop-blur-[14px] backdrop-saturate-[160%] py-2 px-4 md:px-8 w-max">
                  <p className="text-white text-[12px] md:text-[16px]">
                    NIS 7070
                  </p>
                </div>
              </div>
            </div>
            {/* Lanyard Section */}
            <div className="col-span-12 md:col-span-5 hidden md:inline">
              <div className="overflow-hidden h-[300px] md:h-[500px] flex justify-center items-center ">
                <Lanyard position={[0, 0, 18]} gravity={[0, -40, 0]} />
              </div>
            </div>
          </div>
        </div>

        {/* Container Sejarah Perusahaan */}
        <AnimatedContent>
          <div
            id="story"
            className="scroll-mt-[100px] max-w-screen-xl mx-auto px-4 relative z-10 mt-[50px] md:mt-[100px]"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 grid-rows-auto gap-4">
              {/* Logo Section */}
              <div className="col-span-1 md:col-span-6 md:row-span-3 rounded-4xl bg-white/5 border border-white/20 backdrop-blur-[14px] backdrop-saturate-[160%] flex justify-center items-center py-6 md:py-6">
                <a href="https://alamaya.com">
                  <img
                    className="w-[140px] w-auto h-[70px] md:h-[100px] mx-auto"
                    src="alamayaa.png"
                    alt="Alamaya"
                  />
                </a>
              </div>

              {/* About Section */}
              <div className="col-span-1 md:col-span-6 md:row-span-12 md:col-start-7 px-4 md:px-8 py-6 md:py-10 flex flex-col justify-center rounded-4xl bg-white/5 border border-white/20 backdrop-blur-[14px] backdrop-saturate-[160%]">
                <span className="bg-gradient-to-b from-white to-slate-400/30 bg-clip-text text-transparent font-semibold text-[24px] md:text-[30px] text-center mb-4 md:mb-[20px]">
                  ABOUT ALAMAYA
                </span>

                <p className="text-white text-justify text-sm md:text-base">
                  <span className="font-bold">
                    PT. Indonesia Online Alamaya
                  </span>{" "}
                  merupakan perusahaan yang telah berdiri sejak tahun 2002 dan
                  berlokasi di Bali.{" "}
                  <span className="font-bold">
                    PT. Indonesia Online Alamaya
                  </span>{" "}
                  memiliki pengalaman yang sangat mendalam dalam bidang web
                  design dan web development. Dengan pengalaman lebih dari 20
                  tahun, perusahaan ini mengetahui dengan baik seluk-beluk
                  bisnis pengembangan website, termasuk strategi yang efektif
                  dalam pengembangan sebuah website. PT. Indonesia Online
                  Alamaya mengkhususkan diri dalam memberikan layanan web
                  development. Layanan yang disediakan mencakup pembuatan brosur
                  berbasis web hingga website yang membutuhkan aplikasi yang
                  kompleks. Setiap website yang dikembangkan selalu mengacu pada
                  pemahaman terhadap kebutuhan bisnis klien, sehingga website
                  yang dihasilkan mampu menjadi media yang efektif dan optimal
                  dalam mendukung kegiatan pemasaran usaha klien.
                </p>

                <div className="flex flex-col gap-3 mt-6 text-sm md:text-base">
                  <p className="text-white">
                    <span className="font-bold">Pemimpin :</span> Handhika
                    Wicaksana
                  </p>
                  <p className="text-white">
                    <span className="font-bold">Alamat :</span>{" "}
                    <a href="https://maps.app.goo.gl/oeSG38nPP4DK42rL9">
                      Jl. Perum Puri Chandra Asri No.A-25, Batubulan, Kec.
                      Sukawati, Kabupaten Gianyar, Bali 80582
                    </a>
                  </p>
                  <p className="text-white">
                    <span className="font-bold">Website :</span>{" "}
                    <a
                      className="text-[#009AE7] hover:underline"
                      href="https://alamaya.com"
                    >
                      alamaya.com <FontAwesomeIcon icon={faLink} size="lg" />
                    </a>
                  </p>
                </div>
              </div>

              {/* Visi Misi Section */}
              <div className="col-span-1 md:col-span-6 md:row-span-9 px-4 md:px-10 py-8 md:py-8 rounded-4xl bg-white/5 border border-white/20 backdrop-blur-[14px] backdrop-saturate-[160%]">
                <div className="flex flex-col flex-row md:space-x-6">
                  <div className="w-full md:w-1/2 flex flex-col">
                    <div className="bg-gradient-to-r from-[#009AE7] to-[#00EBFC] bg-clip-text text-transparent text-3xl md:text-[40px]">
                      <CountUp
                        from={0}
                        to={20}
                        separator=","
                        direction="up"
                        duration={1}
                      />
                      <span className="md:text-[25px]">+</span>
                    </div>
                    <p className="text-white text-base md:text-base">
                      Years Experience
                    </p>
                  </div>

                  <div className="w-full md:w-1/2 flex flex-col md:mt-0">
                    <div className="bg-gradient-to-r from-[#009AE7] to-[#00EBFC] bg-clip-text text-transparent text-3xl md:text-[40px]">
                      <CountUp
                        from={0}
                        to={600}
                        separator=","
                        direction="up"
                        duration={1}
                      />
                      <span className="md:text-[25px]">+</span>
                    </div>
                    <p className="text-white text-base md:text-base">
                      Project Finished
                    </p>
                  </div>
                </div>

                <p className="bg-gradient-to-b from-white to-slate-400/30 bg-clip-text text-transparent font-bold mt-6 text-xl md:text-2xl">
                  VISI
                </p>
                <p className="text-white text-justify pt-4 text-sm md:text-base">
                  Menjadi pemain terdepan dalam bisnis online di Indonesia
                  dengan melayani banyak produk dan melayani secara global.
                </p>

                <p className="bg-gradient-to-b from-white to-slate-400/30 bg-clip-text text-transparent font-bold mt-6 text-xl md:text-2xl">
                  MISI
                </p>
                <p className="text-white text-justify pt-4 text-sm md:text-base">
                  Menciptakan inovasi dan memberikan solusi atas berbagai
                  kebutuhan perkembangan teknologi dengan biaya yang lebih
                  efektif, cepat, dan terbuka dalam menjawab berbagai tantangan
                  serta peluang. Solid dalam tim dan selalu memberikan manfaat
                  bagi industri dengan saling mendukung.
                </p>
              </div>
            </div>
          </div>
        </AnimatedContent>

        {/* Container Daftar Project */}
        <div id="project" className="max-w-screen-xl mx-auto px-4 md:px-0">
          <TextType
            className="text-white text-center mt-[100px] text-4xl md:text-[48px] mb-5 md:mb-0 text-[montserrat]"
            text={["PROJECT"]}
            pauseDuration={4500}
            cursorCharacter="▏"
          />

          {/* Container Project Mobile */}
          <div className="max-w-screen-xl mx-auto block md:hidden flex flex-col gap-4">
            {/* First Card Project Website */}
            <SpotlightCard
              className="h-full border-4 border-[#302944]"
              spotlightColor="rgba(0, 229, 255, 0.2)"
            >
              <img
                src="sharandy.png"
                alt="Sharandy of The Sea"
                className="rounded-xl h-40 w-full object-cover"
              />
              <div className="flex mt-4 flex-row max-md:flex-col max-md:items-center">
                <div className="w-4/5 h-full max-md:w-full">
                  <p className="text-white text-center font-bold text-xl">
                    Sharandy of The Sea
                  </p>
                  <p className="text-center text-[#999999]">
                    Website Development
                  </p>
                </div>
                <div className="w-1/5 max-md:mt-4 max-md:w-full">
                  <div className="w-full text-center">
                    <a
                      href="/Sharandy"
                      className="inline-block px-8 md:px-3 py-3 rounded-4xl text-white bg-white/5 border border-white/20 backdrop-blur-[14px] backdrop-saturate-[160%] hover:bg-white/10 transition"
                    >
                      See More
                    </a>
                  </div>
                </div>
              </div>
            </SpotlightCard>

            {/* Second Card Project Website */}
            <SpotlightCard
              className="h-full border-4 border-[#302944]"
              spotlightColor="rgba(0, 229, 255, 0.2)"
            >
              <img
                src="https://wanantaliving.com/wp-content/uploads/2025/10/rahayugh-34.jpg"
                alt="Wananta Living"
                className="rounded-xl h-40 w-full object-cover"
              />
              <div className="flex mt-4 flex-row max-md:flex-col max-md:items-center">
                <div className="w-4/5 h-full max-md:w-full">
                  <p className="text-white text-center font-bold text-xl">
                    Wananta Living
                  </p>
                  <p className="text-center text-[#999999]">
                    Website Development
                  </p>
                </div>
                <div className="w-1/5 max-md:mt-4 max-md:w-full">
                  <div className="w-full text-center">
                    <a
                      href="/Wananta"
                      className="inline-block px-8 md:px-3 py-3 rounded-4xl text-white bg-white/5 border border-white/20 backdrop-blur-[14px] backdrop-saturate-[160%] hover:bg-white/10 transition"
                    >
                      See More
                    </a>
                  </div>
                </div>
              </div>
            </SpotlightCard>

            {/* Third Card Project Website */}
            <SpotlightCard
              className="h-full border-4 border-[#302944]"
              spotlightColor="rgba(0, 229, 255, 0.2)"
            >
              <img
                src="https://sandbox.aztravelpartner.com/wp-content/uploads/2025/08/about3.jpg"
                alt="Az Travel Partner"
                className="rounded-xl h-40 w-full object-cover"
              />
              <div className="flex mt-4 flex-row max-md:flex-col max-md:items-center">
                <div className="w-4/5 h-full max-md:w-full">
                  <p className="text-white text-center font-bold text-xl">
                    Az Travel Partner
                  </p>
                  <p className="text-center text-[#999999]">
                    Website Development
                  </p>
                </div>
                <div className="w-1/5 max-md:mt-4 max-md:w-full">
                  <div className="w-full text-center">
                    <a
                      href="/Aztravel"
                      className="inline-block px-8 md:px-3 py-3 rounded-4xl text-white bg-white/5 border border-white/20 backdrop-blur-[14px] backdrop-saturate-[160%] hover:bg-white/10 transition"
                    >
                      See More
                    </a>
                  </div>
                </div>
              </div>
            </SpotlightCard>

            {/* First Card Project Design */}
            <SpotlightCard
              className="h-full border-4 border-[#302944]"
              spotlightColor="rgba(0, 229, 255, 0.2)"
            >
              <img
                src="sharandy.png"
                alt="Sharandy of The Sea"
                className="rounded-xl h-40 w-full object-cover"
              />
              <div className="flex mt-4 flex-row max-md:flex-col max-md:items-center">
                <div className="w-4/5 h-full max-md:w-full">
                  <p className="text-white text-center font-bold text-xl">
                    Sharandy of The Sea
                  </p>
                  <p className="text-center text-[#999999]">Design UI/UX</p>
                </div>
                <div className="w-1/5 max-md:mt-4 max-md:w-full">
                  <div className="w-full text-center">
                    <a
                      href="/Sharandy-Design"
                      className="inline-block px-8 md:px-3 py-3 rounded-4xl text-white bg-white/5 border border-white/20 backdrop-blur-[14px] backdrop-saturate-[160%] hover:bg-white/10 transition"
                    >
                      See More
                    </a>
                  </div>
                </div>
              </div>
            </SpotlightCard>

            {/* Second Card Project Design */}
            <SpotlightCard
              className="h-full border-4 border-[#302944]"
              spotlightColor="rgba(0, 229, 255, 0.2)"
            >
              <img
                src="svaha.png"
                alt="Svaha Bali"
                className="rounded-xl h-40 w-full object-cover"
              />
              <div className="flex mt-4 flex-row max-md:flex-col max-md:items-center">
                <div className="w-4/5 h-full max-md:w-full">
                  <p className="text-white text-center font-bold text-xl">
                    Svaha Bali
                  </p>
                  <p className="text-center text-[#999999]">Design UI/UX</p>
                </div>
                <div className="w-1/5 max-md:mt-4 max-md:w-full">
                  <div className="w-full text-center">
                    <a
                      href="/Svaha"
                      className="inline-block px-8 md:px-3 py-3 rounded-4xl text-white bg-white/5 border border-white/20 backdrop-blur-[14px] backdrop-saturate-[160%] hover:bg-white/10 transition"
                    >
                      See More
                    </a>
                  </div>
                </div>
              </div>
            </SpotlightCard>

            {/* Third Card Project Design */}
            <SpotlightCard
              className="h-full border-4 border-[#302944]"
              spotlightColor="rgba(0, 229, 255, 0.2)"
            >
              <img
                src="bdi.png"
                alt="BMHS Diklat Indonesia"
                className="rounded-xl h-40 w-full object-cover"
              />
              <div className="flex mt-4 flex-row max-md:flex-col max-md:items-center">
                <div className="w-4/5 h-full max-md:w-full">
                  <p className="text-white text-center font-bold text-xl">
                    BMHS Diklat Indonesia
                  </p>
                  <p className="text-center text-[#999999]">Design UI/UX</p>
                </div>
                <div className="w-1/5 max-md:mt-4 max-md:w-full">
                  <div className="w-full text-center">
                    <a
                      href="/BDI"
                      className="inline-block px-8 md:px-3 py-3 rounded-4xl text-white bg-white/5 border border-white/20 backdrop-blur-[14px] backdrop-saturate-[160%] hover:bg-white/10 transition"
                    >
                      See More
                    </a>
                  </div>
                </div>
              </div>
            </SpotlightCard>
            <div className="w-full text-center mt-10 md:mt-0">
          <a
            href="/Detail"
            className="inline-block px-8 py-3 rounded-4xl text-xl text-white bg-white/5 border border-white/20 backdrop-blur-[14px] backdrop-saturate-[160%] hover:bg-white/10 transition"
          >
            Detail Project
          </a>
        </div>
          </div>

          {/* Project Desktop */}
          <ScrollScale
            useWindowScroll={true}
            baseScale={0.8}
            scaleDistance={"50%"}
            className="scroll-scale-wrapper hidden md:block"
          >
            {/* First Row Project */}
            <ScrollScaleItem className="scroll-scale-card">
              <div className="grid grid-cols-12 h-full gap-4 max-md:grid-cols-1">
                <div className="col-span-4 max-md:col-span-12">
                  <SpotlightCard
                    className="h-full border-4 border-[#302944]"
                    spotlightColor="rgba(0, 229, 255, 0.2)"
                  >
                    <img
                      src="sharandy.png"
                      alt="Sharandy of The Sea"
                      className="rounded-xl h-67 w-full object-cover"
                    />
                    <div className="flex mt-[24px] flex-row max-md:flex-col max-md:items-center">
                      <div className="w-4/5 h-full max-md:w-full">
                        <p className="text-white text-center font-bold text-xl">
                          Sharandy of The Sea
                        </p>
                        <p className="text-center text-[#999999]">
                          Desain UI/UX
                        </p>
                      </div>
                      <div className="w-1/5 max-md:mt-4 max-md:w-full">
                        <div className="w-full text-center">
                          <a
                            href="/Sharandy-Design"
                            className="inline-block px-3 py-3 rounded-4xl text-white bg-white/5 border border-white/20 backdrop-blur-[14px] backdrop-saturate-[160%] hover:bg-white/10 transition"
                          >
                            <FontAwesomeIcon
                              className="text-[20px]"
                              icon={faArrowRight}
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </SpotlightCard>
                </div>
                <div className="col-span-8 max-md:col-span-12">
                  <SpotlightCard
                    className="h-full border-4 border-[#302944]"
                    spotlightColor="rgba(0, 229, 255, 0.2)"
                  >
                    <div className="flex max-md:flex-col">
                      <div className="w-[40%]  max-md:w-full max-md:h-auto">
                        <img
                          src="sharandy.png"
                          alt="Sharandy of The Sea"
                          className="rounded-xl md:h-85 object-center object-cover w-90 max-md:w-full"
                        />
                      </div>

                      <div className="w-[60%] h-full pl-8 justify-center max-md:w-full max-md:pl-0 max-md:mt-4">
                        <p className="text-white font-bold mt-4 text-[24px] max-md:text-[20px]">
                          Sharandy of The Sea
                        </p>
                        <p className="text-[#999999] mt-2">Website Slicing</p>
                        <p className="text-[#DDDD] mt-4 text-justify line-clamp-7">
                          Sharandy Phinisi adalah kapal yang menggabungkan
                          tradisi dengan kenyamanan modern. Dibangun oleh para
                          pengrajin berpengalaman, kapal ini tetap
                          mempertahankan ciri khas phinisi Indonesia sambil
                          memberikan fasilitas yang membuat perjalanan lebih
                          nyaman dan menyenangkan. Saat masuk ke dalam,
                          suasananya terasa hangat dan tenang. Interiornya
                          memadukan elemen kayu tradisional dengan desain
                          yang...
                        </p>
                        <a
                          href="/Sharandy"
                          className="inline-block px-10 py-2 mt-7 rounded-4xl text-white bg-white/5 border border-white/20 backdrop-blur-[14px] backdrop-saturate-[160%] hover:bg-white/10 transition"
                        >
                          See Detail
                        </a>
                      </div>
                    </div>
                  </SpotlightCard>
                </div>
              </div>
            </ScrollScaleItem>

            {/* Second Row Project */}
            <ScrollScaleItem className="scroll-scale-card">
              <div className="grid grid-cols-12 h-full gap-4 max-md:grid-cols-1">
                <div className="col-span-8 max-md:col-span-12">
                  <SpotlightCard
                    className="h-full border-4 border-[#302944]"
                    spotlightColor="rgba(0, 229, 255, 0.2)"
                  >
                    <div className="flex max-md:flex-col-reverse">
                      <div className="w-[60%] h-full pr-8 text-right max-md:w-full max-md:pr-0 max-md:mt-4 max-md:text-left">
                        <p className="text-white font-bold mt-4 text-[24px] max-md:text-[20px]">
                          Wananta Living
                        </p>
                        <p className="text-[#999999] mt-2">Website Slicing</p>
                        <p className="text-[#DDDD] mt-4 text-justify line-clamp-7">
                          Wananta Living adalah perusahaan manajemen properti
                          yang berakar dari kecintaan mendalam terhadap budaya
                          dan hospitality Bali. Berawal dari usaha lokal
                          berskala kecil, Wananta Living berkembang menjadi
                          mitra terpercaya bagi pemilik properti dari berbagai
                          negara. Dengan pengalaman mengelola banyak vila di
                          Ubud dan sekitarnya, kami memahami apa yang dibutuhkan
                          untuk menjadikan sebuah properti lebih
                          menguntungkan...
                        </p>
                        <a
                          href="/Wananta"
                          className="inline-block px-10 py-2 mt-7 rounded-4xl text-white bg-white/5 border border-white/20 backdrop-blur-[14px] backdrop-saturate-[160%] hover:bg-white/10 transition"
                        >
                          See Detail
                        </a>
                      </div>
                      <div className="w-[40%] h-85 max-md:w-full max-md:h-auto">
                        <img
                          src="https://wanantaliving.com/wp-content/uploads/2025/10/rahayugh-34.jpg"
                          alt="Wananta Living"
                          className="rounded-xl md:h-85 w-90 object-center object-cover max-md:w-full"
                        />
                      </div>
                    </div>
                  </SpotlightCard>
                </div>
                <div className="col-span-4 max-md:col-span-12">
                  <SpotlightCard
                    className="h-full border-4 border-[#302944]"
                    spotlightColor="rgba(0, 229, 255, 0.2)"
                  >
                    <img
                      src="svaha.png"
                      alt="Svaha Bali"
                      className="rounded-xl h-67 w-full object-center object-cover"
                    />
                    <div className="flex mt-[24px] max-md:flex-col-reverse max-md:items-center">
                      <div className="w-1/5 max-md:w-full max-md:mt-4">
                        <div className="w-full text-center">
                          <a
                            href="/Svaha"
                            className="inline-block px-3 py-3 rounded-4xl text-white bg-white/5 border border-white/20 backdrop-blur-[14px] backdrop-saturate-[160%] hover:bg-white/10 transition"
                          >
                            <FontAwesomeIcon
                              className="text-[20px]"
                              icon={faArrowRight}
                            />
                          </a>
                        </div>
                      </div>
                      <div className="w-4/5 h-full max-md:w-full">
                        <p className="text-white text-center font-bold text-xl">
                          Svaha Bali
                        </p>
                        <p className="text-center text-[#999999]">
                          Desain UI/UX
                        </p>
                      </div>
                    </div>
                  </SpotlightCard>
                </div>
              </div>
            </ScrollScaleItem>

            {/* Third Row Project */}
            <ScrollScaleItem className="scroll-scale-card">
              <div className="grid grid-cols-12 h-full gap-4 max-md:grid-cols-1">
                <div className="col-span-4 max-md:col-span-12">
                  <SpotlightCard
                    className="h-full border-4 border-[#302944]"
                    spotlightColor="rgba(0, 229, 255, 0.2)"
                  >
                    <img
                      src="bdi.png"
                      alt="BMHS Diklat Indonesia"
                      className="rounded-xl h-67 w-full object-center object-cover"
                    />
                    <div className="flex mt-[24px] max-md:flex-col max-md:items-center">
                      <div className="w-4/5 h-full max-md:w-full">
                        <p className="text-white text-center font-bold text-xl">
                          BMHS Diklat Indonesia
                        </p>
                        <p className="text-center text-[#999999]">
                          Desain UI/UX
                        </p>
                      </div>
                      <div className="w-1/5 max-md:w-full max-md:mt-4">
                        <div className="w-full text-center">
                          <a
                            href="/BDI"
                            className="inline-block px-3 py-3 rounded-4xl text-white bg-white/5 border border-white/20 backdrop-blur-[14px] backdrop-saturate-[160%] hover:bg-white/10 transition"
                          >
                            <FontAwesomeIcon
                              className="text-[20px]"
                              icon={faArrowRight}
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </SpotlightCard>
                </div>
                <div className="col-span-8 max-md:col-span-12">
                  <SpotlightCard
                    className="h-full border-4 border-[#302944]"
                    spotlightColor="rgba(0, 229, 255, 0.2)"
                  >
                    <div className="flex max-md:flex-col">
                      <div className="w-[40%] h-85 max-md:w-full max-md:h-auto">
                        <img
                          src="https://sandbox.aztravelpartner.com/wp-content/uploads/2025/08/about3.jpg"
                          alt="AZ Travel Partner"
                          className="rounded-xl md:h-85 w-90 object-[top_80%] object-cover max-md:w-full"
                        />
                      </div>

                      <div className="w-[60%] h-full pl-8 max-md:w-full max-md:pl-0 max-md:mt-4">
                        <p className="text-white font-bold mt-4 text-[24px] max-md:text-[20px]">
                          AZ Travel Partner
                        </p>
                        <p className="text-[#999999] mt-2">Website Slicing</p>
                        <p className="text-[#DDDD] mt-4 text-justify line-clamp-7">
                          Az Travel Partner adalah penyedia jasa perjalanan yang
                          tidak hanya merencanakan liburan, tetapi menciptakan
                          pengalaman perjalanan yang benar-benar bermakna.
                          Dengan pengalaman bertahun-tahun dan kecintaan yang
                          mendalam terhadap Indonesia, Az Travel Partner
                          menghadirkan rangkaian perjalanan yang dirancang
                          secara cermat, mulai dari destinasi ikonik hingga
                          tempat-tempat tersembunyi yang jarang dijamah... dan
                          berkesan.
                        </p>
                        <a
                          href="/AzTravel"
                          className="inline-block px-10 py-2 mt-7 rounded-4xl text-white bg-white/5 border border-white/20 backdrop-blur-[14px] backdrop-saturate-[160%] hover:bg-white/10 transition"
                        >
                          See Detail
                        </a>
                      </div>
                    </div>
                  </SpotlightCard>
                </div>
              </div>
            </ScrollScaleItem>
            <div className="w-full text-center mt-10 md:mt-0">
          <a
            href="/Detail"
            className="inline-block px-8 py-3 rounded-4xl text-xl text-white bg-white/5 border border-white/20 backdrop-blur-[14px] backdrop-saturate-[160%] hover:bg-white/10 transition"
          >
            Project Detail
          </a>
        </div>
          </ScrollScale>
          

          <TextType
            className="text-white text-center mt-[100px] text-4xl md:text-[48px] mb-5 md:mb-0 text-[montserrat]"
            text={["TOOLS"]}
            pauseDuration={4500}
            cursorCharacter="▏"
          />

          <div className="max-w-screen-xl mx-auto block md:hidden flex flex-col gap-4">
            {/* First Tools Mobile */}
            <SpotlightCard
              className="h-full border-4 border-[#302944]"
              spotlightColor="rgba(0, 229, 255, 0.2)"
            >
              <div className="flex flex-row max-md:flex-col max-md:items-center">
                <div className="w-4/5 h-full max-md:w-full">
                  <p className="text-white text-center font-bold text-xl">
                    Visual Studio Code
                  </p>
                  <p className="text-justify text-[#999999] text-sm mt-4">
                    Visual Studio Code adalah editor populer dari Microsoft
                    untuk menulis dan mengelola kode, mendukung banyak bahasa
                    dan framework, dengan fitur IntelliSense, terminal, dan Git
                    untuk pengembangan lebih efisien.
                  </p>
                </div>
              </div>
            </SpotlightCard>

            {/* Second Tools Mobile */}
            <SpotlightCard
              className="h-full border-4 border-[#302944]"
              spotlightColor="rgba(0, 229, 255, 0.2)"
            >
              <div className="flex flex-row max-md:flex-col max-md:items-center">
                <div className="w-4/5 h-full max-md:w-full">
                  <p className="text-white text-center font-bold text-xl">
                    Figma
                  </p>
                  <p className="text-justify text-[#999999] text-sm mt-4">
                    Figma adalah aplikasi desain UI/UX untuk membuat wireframe,
                    mockup, dan prototype, memudahkan perancangan layout dan
                    visual sebelum implementasi.
                  </p>
                </div>
              </div>
            </SpotlightCard>

            {/* Third Tools Mobile */}
            <SpotlightCard
              className="h-full border-4 border-[#302944]"
              spotlightColor="rgba(0, 229, 255, 0.2)"
            >
              <div className="flex flex-row max-md:flex-col max-md:items-center">
                <div className="w-4/5 h-full max-md:w-full">
                  <p className="text-white text-center font-bold text-xl">
                    XAMPP
                  </p>
                  <p className="text-justify text-[#999999] text-sm mt-4">
                    XAMPP adalah paket local server (Apache, MySQL, PHP, Perl)
                    untuk testing dan menjalankan website offline sebelum
                    deploy.
                  </p>
                </div>
              </div>
            </SpotlightCard>

            {/* Fourth Tools Mobile */}
            <SpotlightCard
              className="h-full border-4 border-[#302944]"
              spotlightColor="rgba(0, 229, 255, 0.2)"
            >
              <div className="flex flex-row max-md:flex-col max-md:items-center">
                <div className="w-4/5 h-full max-md:w-full">
                  <p className="text-white text-center font-bold text-xl">
                    Filezilla
                  </p>
                  <p className="text-justify text-[#999999] text-sm mt-4">
                    FileZilla adalah aplikasi FTP untuk mengelola, upload, dan
                    backup file website dengan interface drag-and-drop yang
                    mudah digunakan.
                  </p>
                </div>
              </div>
            </SpotlightCard>
          </div>

          <ScrollStack
            useWindowScroll
            className="scroll-stack-wrapper hidden md:block"
          >
            {/* First Row Tools */}
            <ScrollStackItem className="scroll-stack-card">
              <SpotlightCard
                className="h-full border-4 border-[#302944]"
                spotlightColor="rgba(0, 229, 255, 0.2)"
              >
                <div className="flex h-full gap-4">
                  <div className="w-[40%] h-full flex justify-center items-center">
                    <img
                      src="vscode.svg"
                      alt="Visual Studio Code"
                      className="h-50"
                    />
                  </div>
                  <div className="w-[60%] h-full flex justify-center flex-col gap-8">
                    <p className="text-white font-bold text-3xl text-center">
                      Visual Studio Code
                    </p>
                    <p className="text-white text-justify px-6">
                      Visual Studio Code merupakan source-code editor yang
                      dikembangkan oleh Microsoft dan menjadi salah satu tools
                      paling populer dalam proses pengembangan web. VSCode
                      menyediakan lingkungan kerja yang sangat fleksibel dengan
                      dukungan ekstensi, dan integrasi berbagai bahasa
                      pemrograman seperti JavaScript, HTML, CSS, dan framework
                      modern seperti React. Selama pembuatan project, VSCode
                      digunakan untuk menulis, memodifikasi, dan mengorganisir
                      seluruh file program. Fitur-fitur seperti IntelliSense,
                      auto-completion, built-in terminal, Git integration
                      menjadikan proses pengembangan lebih efisien dan
                      terstruktur.
                    </p>
                  </div>
                </div>
              </SpotlightCard>
            </ScrollStackItem>

            {/* Second Row Tools */}
            <ScrollStackItem className="scroll-stack-card">
              <SpotlightCard
                className="h-full border-4 border-[#302944]"
                spotlightColor="rgba(0, 229, 255, 0.2)"
              >
                <div className="flex h-full gap-4">
                  <div className="w-[60%] h-full flex justify-center flex-col gap-8 ">
                    <p className="text-white font-bold text-3xl text-center">
                      Figma
                    </p>
                    <p className="text-white text-justify px-6">
                      Figma merupakan aplikasi desain UI/UX yang sangat populer
                      dalam proses perancangan tampilan antarmuka website. Tool
                      ini memudahkan proses pembuatan wireframe, mockup, hingga
                      interactive prototype yang menjadi acuan dalam pembangunan
                      halaman web. Dalam project PKL ini, Figma digunakan untuk
                      merancang struktur layout, menentukan warna, ukuran
                      elemen, hingga membuat representasi visual dari halaman
                      sebelum masuk ke tahap slicing. Dengan adanya prototype
                      dari Figma, proses implementasi menjadi lebih terarah dan
                      sesuai desain awal.
                    </p>
                  </div>
                  <div className="w-[40%] h-full flex justify-center items-center">
                    <img src="figma.svg" alt="Figma" className="h-50" />
                  </div>
                </div>
              </SpotlightCard>
            </ScrollStackItem>

            {/* Third Row Tools */}
            <ScrollStackItem className="scroll-stack-card">
              <SpotlightCard
                className="h-full border-4 border-[#302944]"
                spotlightColor="rgba(0, 229, 255, 0.2)"
              >
                <div className="flex h-full gap-4">
                  <div className="w-[40%] h-full flex justify-center items-center">
                    <img src="xampp.png" alt="XAMPP" className="h-60" />
                  </div>
                  <div className="w-[60%] h-full flex justify-center flex-col gap-8">
                    <p className="text-white font-bold text-3xl text-center">
                      XAMPP
                    </p>
                    <p className="text-white text-justify px-6">
                      XAMPP merupakan paket software yang berfungsi sebagai
                      local server, berisi Apache, MySQL/MariaDB, PHP, dan Perl.
                      XAMPP digunakan sebagai support tool dalam proses testing
                      beberapa kebutuhan sederhana. Dengan XAMPP, developer
                      dapat menjalankan server lokal tanpa harus melakukan
                      instalasi manual satu per satu. Hal ini memudahkan dalam
                      pengujian aplikasi secara offline, XAMPP membantu
                      memastikan website dapat berjalan dengan baik sebelum
                      di-deploy ke server hosting atau platform online.
                    </p>
                  </div>
                </div>
              </SpotlightCard>
            </ScrollStackItem>

            {/* Fourth Row Tools */}
            <ScrollStackItem className="scroll-stack-card">
              <SpotlightCard
                className="h-full border-4 border-[#302944]"
                spotlightColor="rgba(0, 229, 255, 0.2)"
              >
                <div className="flex h-full gap-4">
                  <div className="w-[60%] h-full flex justify-center flex-col gap-8 ">
                    <p className="text-white font-bold text-3xl text-center">
                      FileZilla
                    </p>
                    <p className="text-white text-justify px-6">
                      FileZilla merupakan aplikasi FTP (File Transfer Protocol)
                      yang digunakan untuk mengelola file di server hosting.
                      Software ini sangat membantu ketika melakukan proses
                      upload, update, atau pengaturan struktur folder pada web
                      hosting secara manual. FileZilla digunakan sebagai alat
                      pendukung untuk memindahkan file, backup project, atau
                      pengelolaan hosting alternatif. Dengan interface yang
                      sederhana dan fitur drag-and-drop, FileZilla mempermudah
                      developer dalam mengakses server, melihat log aktivitas
                      transfer, dan memastikan file website tersusun rapi di
                      server.
                    </p>
                  </div>
                  <div className="w-[40%] h-full flex justify-center items-center">
                    <img src="filezilla.png" alt="Figma" className="h-60" />
                  </div>
                </div>
              </SpotlightCard>
            </ScrollStackItem>
          </ScrollStack>
        </div>

        {/* Container Gallery */}
        <div id="gallery" className="h-[600px] hidden md:block md:mt-[-00px]">
          <CircularGallery
            bend={2}
            textColor="#ffffff"
            borderRadius={0.05}
            scrollEase={0.02}
          />
        </div>

        <div className="w-full text-center mt-10 md:mt-0">
          <a
            href="/Gallery"
            className="inline-block px-8 py-3 rounded-4xl text-xl text-white bg-white/5 border border-white/20 backdrop-blur-[14px] backdrop-saturate-[160%] hover:bg-white/10 transition"
          >
            See Gallery
          </a>
        </div>

        {/* Kesimpulan Finale */}
        <div className="max-w-screen-xl mx-auto px-4 mt-10 md:mt-[100px]">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 md:col-span-7 py-8 px-4 md:p-10 md:px-8 rounded-4xl bg-white/5 border border-white/20 backdrop-blur-[14px] backdrop-saturate-[160%] text-center">
              <span className="bg-gradient-to-b from-white to-slate-400/30 bg-clip-text text-transparent font-semibold text-[24px] md:text-[30px] text-center mb-4 md:mb-[20px]">
                KESIMPULAN
              </span>
              <p className="text-white text-justify text-sm md:text-base mt-4">
                Dengan mengikuti Praktek Kerja Lapangan di PT Indonesia Online
                Alamaya, penulis memperoleh pengalaman nyata mengenai alur dan
                budaya kerja di industri. Kegiatan ini membantu penulis
                mengembangkan kemandirian, tanggung jawab, serta kemampuan
                beradaptasi dengan lingkungan profesional. Berbagai tugas yang
                diberikan meningkatkan keterampilan teknis dan pemahaman proses
                kerja di bidang teknologi. Selain itu, PKL ini membentuk sikap
                kerja yang profesional, seperti kedisiplinan, etika, komunikasi,
                dan kerja sama tim. Seluruh pengalaman tersebut menjadi bekal
                berharga bagi pengembangan kompetensi dan persiapan memasuki
                dunia kerja.
              </p>
            </div>
            <div className="col-span-12 md:col-span-5 py-8 px-4 md:p-10 md:px-8 rounded-4xl bg-white/5 border border-white/20 backdrop-blur-[14px] backdrop-saturate-[160%] text-center">
              <span className="bg-gradient-to-b from-white to-slate-400/30 bg-clip-text text-transparent font-semibold text-[24px] md:text-[30px] text-center mb-4 md:mb-[20px]">
                SARAN
              </span>
              <p className="text-white text-justify text-sm md:text-base mt-4">
                Penulis berharap perusahaan terus membuka kesempatan PKL bagi
                siswa karena program ini memberikan manfaat bagi kedua pihak,
                baik dalam bentuk pengalaman kerja nyata bagi siswa maupun
                dukungan tenaga bagi perusahaan. Penulis juga mengapresiasi
                pihak sekolah yang telah memberikan bimbingan dan persiapan PKL
                dengan baik serta berterima kasih atas segala dukungan sehingga
                kegiatan PKL dapat berjalan dengan lancar.
              </p>
            </div>
          </div>
        </div>
        {/* Footer */}
        <div className="mt-10 md:mt-[100px] md:mb-5">
          <Footer />
        </div>
      </FadeContent>
    </>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/Sharandy-Design" element={<SharandyDesain />} />
      <Route path="/Sharandy" element={<SharandyWeb />} />
      <Route path="/Wananta" element={<Wananta />} />
      <Route path="/AzTravel" element={<AzTravel />} />
      <Route path="/BDI" element={<BDI />} />
      <Route path="/Svaha" element={<Svaha />} />
      <Route path="/Gallery" element={<Gallery />} />
      <Route path="/Detail" element={<Detail />} />
    </Routes>
  );
}
