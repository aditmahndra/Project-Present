import React from 'react';
import { gsap } from 'gsap';

function FlowingMenu({ items = [] }) {
  return (
    // Pastikan parent ini memiliki dimensi (misalnya: h-screen atau tinggi tetap)
    <div className="w-full h-full overflow-hidden">
      <nav className="flex flex-col h-full m-0 p-0">
        {items.map((item, idx) => (
          <MenuItem key={idx} {...item} />
        ))}
      </nav>
    </div>
  );
}

function MenuItem({ link, text, image }) {
  const itemRef = React.useRef(null);
  const marqueeRef = React.useRef(null);
  const marqueeInnerRef = React.useRef(null);
  const marqueeContentRef = React.useRef(null); // Ref untuk elemen yang memiliki animate-marquee

  const animationDefaults = { duration: 0.6, ease: 'expo' };

  const findClosestEdge = (mouseX, mouseY, width, height) => {
    // Menghitung jarak kuadrat ke tengah tepi atas dan tengah tepi bawah
    const topEdgeDist = (mouseX - width / 2) ** 2 + mouseY ** 2;
    const bottomEdgeDist = (mouseX - width / 2) ** 2 + (mouseY - height) ** 2;
    return topEdgeDist < bottomEdgeDist ? 'top' : 'bottom';
  };

  const handleMouseEnter = ev => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current) return;
    
    // HAPUS .set() yang duplikat dengan kelas Tailwind, dan fokus pada animasi masuk ke 0% (posisi terlihat)
    gsap
      .timeline({ defaults: animationDefaults })
      // Animasikan marqueeRef dari 101% ke 0%
      .to(marqueeRef.current, { y: '0%' }, 0) 
      // Animasikan marqueeInnerRef (counter-transform) dari 101% ke 0%
      .to(marqueeInnerRef.current, { y: '0%' }, 0); 
  };

  const handleMouseLeave = ev => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current) return;
    const rect = itemRef.current.getBoundingClientRect();
    const edge = findClosestEdge(ev.clientX - rect.left, ev.clientY - rect.top, rect.width, rect.height);

    // Pastikan animasi keluar berjalan PARALEL (menggunakan posisi 0)
    gsap
      .timeline({ defaults: animationDefaults })
      // Animasikan marqueeRef keluar ke tepi yang ditentukan
      .to(marqueeRef.current, { y: edge === 'top' ? '-101%' : '101%' }, 0)
      // Animasikan marqueeInnerRef counter-transform keluar
      .to(marqueeInnerRef.current, { y: edge === 'top' ? '101%' : '-101%' }, 0);
  };

  const repeatedMarqueeContent = Array.from({ length: 4 }).map((_, idx) => (
    <React.Fragment key={idx}>
      <span
        className="text-[#060010] uppercase font-normal text-[4vh] leading-[1.2] p-[1vh_1vw_0]">{text}</span>
      <div
        className="w-[200px] h-[7vh] my-[2em] mx-[2vw] p-[1em_0] rounded-[50px] bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }} />
    </React.Fragment>
  ));

  return (
    <div
      className="flex-1 relative overflow-hidden text-center shadow-[0_-1px_0_0_#fff]"
      ref={itemRef}>
      <a
        className="flex items-center justify-center h-full relative cursor-pointer uppercase no-underline font-semibold text-white text-[4vh] hover:text-[#060010] focus:text-white focus-visible:text-[#060010]"
        href={link}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
        {text}
      </a>
      <div
        className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none bg-white translate-y-[101%]"
        ref={marqueeRef}>
        
        {/* KOREKSI: Gunakan w-full di sini, bukan w-[200%] */}
        <div className="h-full w-full flex" ref={marqueeInnerRef}>
          
          {/* Elemen ini yang memiliki animasi horizontal R-to-L (animate-marquee) */}
          <div
            className="flex items-center relative h-full w-[200%] will-change-transform animate-marquee"
            ref={marqueeContentRef}> 
            {repeatedMarqueeContent}
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default FlowingMenu;