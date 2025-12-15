import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const baseClasses =
    "menu bg-white/3 border border-white/12 text-white rounded-[30px] md:rounded-full py-2.5 pl-9 w-44 flex justify-center items-center overflow-hidden backdrop-blur-md backdrop-saturate-150 transition-all duration-500 ease-in-out cursor-pointer h-[55px] fixed top-6 left-1/2 -translate-x-1/2 z-[99999] shadow-[0_0_22px_rgba(255,255,255,0.38),0_0_40px_rgba(255,255,255,0.20),0_4px_14px_rgba(0,0,0,0.75),inset_0_1px_0_rgba(255,255,255,0.08)]";

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section className="header">
      <div
        ref={menuRef}
        className={`${baseClasses} ${open ? "menu-open" : ""}`}
        onClick={(e) => {
          e.stopPropagation();
          setOpen((prev) => !prev);
        }}
      >
        {/* ICON */}
        <div className="icon">
          <a href="/">
            <FontAwesomeIcon
              icon={faHouse}
              className={`absolute w-5 h-5 transition-all duration-300
    ${
      open
        ? "top-1/2 left-4 -translate-y-1/2 md:top-4 md:left-6"
        : "top-3 left-4 md:top-4 md:left-6"
    }
  `}
            />
          </a>
        </div>

        {/* MENU LIST */}
        <ul>
          <li>
            <a href="/#introduction">INTRODUCTION</a>
          </li>
          <li>
            <a href="/#story">STORY</a>
          </li>
          <li>
            <a href="/#project">PROJECT</a>
          </li>
          <li>
            <a href="/#gallery">GALLERY</a>
          </li>
          <li>
            <a href="/#footer">FINALE</a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Header;
