import "../App.css";

import Header from "@/assets/components/Header";
import Footer from "@/assets/components/Footer";
import Aurora from "@/assets/components/Aurora";

export default function Gallery() {
    return(
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

      <div className="max-w-screen-xl mx-auto relative px-4 z-10 mt-25 md:mt-35">
        <div className="grid grid-cols-12 h-auto gap-5">
            <div className="col-span-6">
                <img src="./gallery/14.jpeg" alt="" className="w-full h-60 md:h-130 object-[center_70%] object-cover rounded-tl-[50px]" />
            </div>
            <div className="col-span-6">
                <img src="./gallery/2.jpeg" alt="" className="w-full h-60 md:h-130 object-[center_90%] object-cover rounded-tr-[50px]" />
            </div>
            <div className="col-span-6 md:col-span-4">
                <img src="./gallery/13.jpeg" alt="" className="w-full h-40 md:h-100 object-[center_80%] object-cover" />
            </div>
            <div className="col-span-6 md:col-span-4">
                <img src="./gallery/16.jpeg" alt="" className="w-full h-40 md:h-100 object-[center_60%] object-cover" />
            </div>
            <div className="col-span-6 md:col-span-4">
                <img src="./gallery/12.jpeg" alt="" className="w-full h-40 md:h-100 object-[center_90%] object-cover" />
            </div>
            <div className="col-span-6 md:col-span-4">
                <img src="./gallery/4.jpeg" alt="" className="w-full h-40 md:h-100 object-[center_90%] object-cover" />
            </div>
            <div className="col-span-6 md:col-span-4">
                <img src="./gallery/5.jpeg" alt="" className="w-full h-40 md:h-100 object-[center_60%] object-cover" />
            </div>
            <div className="col-span-6 md:col-span-4">
                <img src="./gallery/10.jpeg" alt="" className="w-full h-40 md:h-100 object-[center_90%] object-cover" />
            </div>
            <div className="col-span-6 md:col-span-4">
                <img src="./gallery/11.jpeg" alt="" className="w-full h-40 md:h-100 object-[center_80%] object-cover" />
            </div>
            <div className="col-span-6 md:col-span-4">
                <img src="./gallery/15.jpeg" alt="" className="w-full h-40 md:h-100 object-[center_60%] object-cover" />
            </div>
            <div className="col-span-6 md:col-span-4">
                <img src="./gallery/17.jpeg" alt="" className="w-full h-40 md:h-100 object-[center_90%] object-cover" />
            </div>
            <div className="col-span-6 md:col-span-4">
                <img src="./gallery/9.jpeg" alt="" className="w-full h-40 md:h-100 object-[center_90%] object-cover" />
            </div>
            <div className="col-span-6 md:col-span-4">
                <img src="./gallery/8.jpeg" alt="" className="w-full h-40 md:h-100 object-[center_90%] object-cover" />
            </div>
            <div className="col-span-6 md:col-span-4">
                <img src="./gallery/18.jpeg" alt="" className="w-full h-40 md:h-100 object-[center_90%] object-cover" />
            </div>
            <div className="col-span-6">
                <img src="./gallery/19.jpeg" alt="" className="w-full h-60 md:h-130 object-[center_70%] object-cover rounded-bl-[50px]" />
            </div>
            <div className="col-span-6">
                <img src="./gallery/7.jpeg" alt="" className="w-full h-60 md:h-130 object-[center_90%] object-cover rounded-br-[50px]" />
            </div>
        </div>
        </div>

        <Footer Margin="mt-[100px]" />
        </>
    )
}
