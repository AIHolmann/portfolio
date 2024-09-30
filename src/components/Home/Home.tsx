"use client";
import Navbar from "../Navbar/Navbar";
import Arrowdown from "./arrowdown/Arrowdown";
import Cardcounter from "./cardcounter/Cardcounter";
import style from "./home.module.css";
import { useState, useEffect, useRef } from "react";
import notification from "../../assets/notification.js";

const Home = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const h1developer = useRef<HTMLHeadingElement>(null);
  const h2developer = useRef<HTMLHeadingElement>(null);
  const svgelement = useRef<SVGSVGElement>(null);
  useEffect(() => {
    notification();
    const handleScroll = () => {
      let position = window.scrollY;
      setScrollPosition(position);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  useEffect(() => {
    if (h1developer.current && h2developer.current && svgelement.current) {
      h1developer.current.style.transform = `translateX(-${Math.floor(
        scrollPosition
      )}px)`;
      h2developer.current.style.transform = `translateX(-${
        70 - Math.floor(scrollPosition / 10)
      }vw)`;
      svgelement.current.style.transform = `rotate(${Math.floor(
        scrollPosition
      )}deg)`;
    }
  }, [scrollPosition]);

  return (
    <>
      <div className={style.alejoback}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="120px"
          height="120px"
          viewBox="0 0 1024 1024"
          version="1.1"
          ref={svgelement}
          className={style.setting}
        >
          <path
            d="M844.8 580.266667c2.133333-14.933333 4.266667-29.866667 4.266667-46.933334s-2.133333-32-4.266667-46.933333l96-68.266667c8.533333-6.4 12.8-19.2 6.4-29.866666L853.333333 230.4c-6.4-10.666667-17.066667-14.933333-27.733333-8.533333l-106.666667 49.066666c-25.6-19.2-51.2-34.133333-81.066666-46.933333L627.2 106.666667c-2.133333-10.666667-10.666667-19.2-21.333333-19.2h-183.466667c-10.666667 0-21.333333 8.533333-21.333333 19.2l-10.666667 117.333333c-29.866667 12.8-57.6 27.733333-81.066667 46.933333l-106.666666-49.066666c-10.666667-4.266667-23.466667 0-27.733334 8.533333l-91.733333 157.866667c-6.4 10.666667-2.133333 23.466667 6.4 29.866666l96 68.266667c-2.133333 14.933333-4.266667 29.866667-4.266667 46.933333s2.133333 32 4.266667 46.933334L85.333333 648.533333c-8.533333 6.4-12.8 19.2-6.4 29.866667L170.666667 836.266667c6.4 10.666667 17.066667 14.933333 27.733333 8.533333l106.666667-49.066667c25.6 19.2 51.2 34.133333 81.066666 46.933334l10.666667 117.333333c2.133333 10.666667 10.666667 19.2 21.333333 19.2h183.466667c10.666667 0 21.333333-8.533333 21.333333-19.2l10.666667-117.333333c29.866667-12.8 57.6-27.733333 81.066667-46.933334l106.666666 49.066667c10.666667 4.266667 23.466667 0 27.733334-8.533333l91.733333-157.866667c6.4-10.666667 2.133333-23.466667-6.4-29.866667l-89.6-68.266666zM512 746.666667c-117.333333 0-213.333333-96-213.333333-213.333334s96-213.333333 213.333333-213.333333 213.333333 96 213.333333 213.333333-96 213.333333-213.333333 213.333334z"
            fill="#f2f2f210"
          />
          <path
            d="M512 277.333333c-140.8 0-256 115.2-256 256s115.2 256 256 256 256-115.2 256-256-115.2-256-256-256z m0 362.666667c-59.733333 0-106.666667-46.933333-106.666667-106.666667s46.933333-106.666667 106.666667-106.666666 106.666667 46.933333 106.666667 106.666666-46.933333 106.666667-106.666667 106.666667z"
            fill="#f2f2f212"
          />
        </svg>
        <Navbar />
        <div className={style.container}>
          <div className={style.conth1}>
            <h1 className={style.h1} ref={h1developer}>
              full-stack web developer
            </h1>
            <h2 className={style.h1} ref={h2developer}>
              full-stack web developer
            </h2>
          </div>

          <div className={style.contmain}>
            <div className={style.conttext}>
              <h2>
                a <b>better</b> way to build software
              </h2>
              <h3>
                I help you realize your <b>digital business</b> with software
                that suit your needs.
              </h3>

              <a href="#contact" className={style.button}>
                <button>Get started!</button>
              </a>
            </div>
            <div className={style.contcardcounter}>
              <Cardcounter />
            </div>
          </div>
        </div>
        <div className={style.arrowcontainer}>
          <Arrowdown />
        </div>
      </div>
    </>
  );
};

export default Home;
