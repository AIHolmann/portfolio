"use client";
import style from "./home.module.css";
import { useState, useEffect, useRef } from "react";
import notification from "../../assets/notification.js";
import Namepanel from "../NamePanel/Namepanel";
import About from "../About/About";
import Stack from "../Stack/Stack";

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
        <div className={style.container}>
          <div className={style.panelizquierdoprincipal}>
            <Namepanel />
          </div>
          <div className={style.panelderechoprincipal}>
            <div className={style.panelsuperiorsecundario}>
              <div className={style.foto}>foto</div>
              <div className={style.saludo}>
                <About />
              </div>
            </div>
            <div className={style.panelmediosecundario}>
              <div className={style.stack}>
                <Stack />
              </div>
              <div className={style.educprinc}>educacion principal</div>
            </div>

            <div className={style.panelinferiorsecundario}>
              <div className={style.proyectos}>proyectos</div>
              <div className={style.infoadicional}>
                info adicional educacion adicional e idioma
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
