"use client";
import style from "./navbar.module.css";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
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
*/
  return (
    <div
      className={
        isSticky ? style.sticky : style.container /*className == "container"
          ? style.container
          : style.sticky*/
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
    </div>
  );
};

export default Navbar;
