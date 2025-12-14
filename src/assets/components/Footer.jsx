export default function Footer({Margin = "mt-100px"}) {

    return(
        <div
          id="footer"
          className={`max-w-screen-xl mx-auto ${Margin} md:mb-10`}
        >
          <div className="grid grid-cols-12 w-full bg-white/5 border-t md:border border-white/20 backdrop-blur-[14px] md:rounded-full backdrop-saturate-[160%] flex justify-center items-center mx-auto overlow-visible md:mx-0 w-full md:w-900px]">
            <div className="col-span-12 md:col-span-6 py-5 px-10 flex justify-center md:justify-start">
              <a href="https://alamaya.com">
                <img
                  className="w-auto h-[40px] md:h-[34px]"
                  src="alamayaa.png"
                  alt="Alamaya"
                />
              </a>
            </div>
            <div className="col-span-12 md:col-span-6 flex justify-center md:justify-end gap-6 pt-3 pb-10 md:py-3 px-10">
              <a
                href="https://wa.me/6281353071238"
                className="hover:-translate-y-2 hover:scale-150 transition-all duration-300 ease-out"
              >
                <img
                  className="w-[45px] h-auto rounded-lg"
                  src="whatsapp.png"
                  alt=""
                />
              </a>
              <a
                href="https://instagram.com/aditmahndraa"
                className="hover:-translate-y-2 hover:scale-150 transition-all duration-300 ease-out"
              >
                <img
                  className="w-[45px] h-auto rounded-lg"
                  src="instagram2.png"
                  alt=""
                />
              </a>
              <a
                href="mailto:adityamahendraoke@gmail.com"
                className="hover:-translate-y-2 hover:scale-140 transition-all duration-300 ease-out"
              >
                <div className="bg-white rounded-lg flex items-center justify-center w-[45px] h-[45px]">
                  <img
                    className="w-[30px] h-[30px]"
                    src="communication.png"
                    alt=""
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
    )
}