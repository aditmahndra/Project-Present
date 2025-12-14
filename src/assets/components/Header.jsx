import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section className="header">
      <div
        ref={menuRef}
        className={`menu ${open ? "menu-open" : ""}`}
        onClick={(e) => {
          e.stopPropagation();
          setOpen((prev) => !prev);
        }}
      >
        {/* ICON */}
        <div className="icon">
          <FontAwesomeIcon
            icon={faHouse}
            className="text-white w-5 h-5 absolute top-3 md:top-4 left-4 md:left-[20px] z-10 transition-opacity duration-300"
          />
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
