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
        scroll >= 0 && scroll <= 450
          ? style.container
          : isSticky === 1
          ? style.sticky
          : style.hidden
      }
    >
      <div className={style.logo}>
        <span>{true && "</>"}</span>
        <span>AH</span>
        <p>Web Developer</p>
      </div>
      <ul className={style.list}>
        <li>
          <a>About me</a>
        </li>
        <li>
          <a>Stack</a>
        </li>
        <li>
          <a>Proyects</a>
        </li>
        <li>
          <a>Education</a>
        </li>
        <li>
          <a>Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
