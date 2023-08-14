"use client";
import style from "./navbar.module.css";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(0);
  const [scroll, setScroll] = useState(0);

  /*
 const handleScroll = () => {
      let ubiAct = window.scrollY;

      if (ubiPrinc >= ubiAct) {
        setIsSticky(0);
      } else if (ubiPrinc > ubiAct) {
        setIsSticky(1);
      } else {
        setIsSticky(2);
      }
      ubiPrinc = ubiAct;
    };
*/

  useEffect(() => {
    let ubiPrinc = window.scrollY;

    const handleScroll = () => {
      let ubiAct = window.scrollY;
      if (ubiPrinc === ubiAct) {
        setIsSticky(0);
      } else if (ubiPrinc > ubiAct) {
        setIsSticky(1);
      } else {
        setIsSticky(2);
      }
      ubiPrinc = ubiAct;
      setScroll(ubiPrinc);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  /* const [className, setClassName] = useState("container");
  const [zIndex, setZIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const newZIndex = window.scrollY > 0 ? 1 : 0;
      setZIndex(newZIndex);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (zIndex === 0) {
      setClassName("container");
    } else {
      setClassName("sticky");
    }
  }, [zIndex]);

 //className == "container"
          ? style.container
          : style.sticky*/

  return (
    <nav
      className={
        scroll >= 0 && scroll <= 300
          ? style.container
          : isSticky === 1
          ? style.sticky
          : style.hidden
      }
    >
      <a href="#home">
        <div className={style.logo}>
          <svg
            width="50"
            height="50"
            version="1.1"
            viewBox="0 0 500.00001 500.00001"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g
              transform="translate(0 -552.36)"
              fill="none"
              stroke="#555"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="38.966"
            >
              <path d="m125.28 700.91-101.56 101.56 101.56 101.56" />
              <path d="m376.97 700.91 101.56 101.56-101.56 101.56" />
              <path d="m274.86 670.23-54.621 265.77" />
            </g>
          </svg>
          <span>AH</span>
        </div>
      </a>
      <ul className={style.list}>
        <li>
          <a href="#aboutme">About me</a>
        </li>
        <li>
          <a href="#stack">Stack</a>
        </li>
        <li>
          <a href="#proyects">Proyects</a>
        </li>
        <li>
          <a href="#education">Education</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
