/** @type {import('tailwindcss').Config} */
export default {
  // Menggabungkan content dari kedua konfigurasi (asumsi file sama)
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  
  // Menggabungkan safelist
  safelist: [
        "animate-shine-text",
        "animate-marquee",
    ],
  

  theme: {
    extend: {
      // Menambahkan ekstensi translate dari konfigurasi Marquee
      translate: {
        '101': '101%',
      },
      // Menambahkan ekstensi height dari konfigurasi kedua
      height: {
        fill: "100%",
        webkit: "-webkit-fill-available",
      },
      // Menambahkan ekstensi fontFamily dari konfigurasi kedua
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      
      // Menggabungkan keyframes dari kedua konfigurasi
      keyframes: {
        // keyframe untuk Marquee (gerakan R-to-L)
        marquee: {
          'from': { transform: 'translateX(0%)' },
          'to': { transform: 'translateX(-50%)' }
        },
        // keyframe untuk Shine Text
        "shine-text": {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
      },
      
      // Menggabungkan animation dari kedua konfigurasi
      animation: {
        // animasi untuk Marquee
        marquee: 'marquee 15s linear infinite',
        // animasi untuk Shine Text
        "shine-text": "shine-text 5s linear infinite",
      },
    },
  },

  // Menggabungkan semua plugin
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/line-clamp"),
  ],
};