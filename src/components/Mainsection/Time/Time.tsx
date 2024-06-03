"use client";
import { CldImage } from "next-cloudinary";
import style from "./time.module.css";
import { useRef } from "react";

const Time = () => {
  const el = useRef<HTMLImageElement>(null);
  const div = useRef<HTMLDivElement>(null);

  const handleMouseMove = (event: any) => {
    if (el.current) {
      let yValue = event.clientY;
      let xValue = event.clientX;

      const { left, top, width, height } = div.current!.getBoundingClientRect();

      let mouseX = xValue - left;
      let mouseY = yValue - top;

      el.current.style.left = `${(mouseX - width / 2) * -0.05}%`;
      el.current.style.top = `${(mouseY - height / 2) * -0.15}%`;
    }
  };

  const handleMouseOut = () => {
    if (el.current) {
      el.current.style.left = `0%`;
      el.current.style.top = `0%`;
    }
  };

  return (
    <div
      className={style.container}
      onMouseMove={handleMouseMove}
      onMouseOut={handleMouseOut}
      ref={div}
    >
      <div></div>
      <CldImage
        ref={el}
        className={style.img}
        src="https://res.cloudinary.com/datlb3rvw/image/upload/v1716767622/AlejoPortfolio/imagenesNuevas/Default_global_comunication_network_showing_Argentina_as_the_m_2_nvnwhh.webp"
        alt="Clients Image"
        width={1592}
        height={896}
        seoSuffix={"IA image of world map"}
      />
      <h2>
        I'm very flexible with time
        <br />
        zone communications.
      </h2>
      <h6 className={style.usa}>USA</h6>
      <h6 className={style.argentina}>Argentina</h6>
      <h6 className={style.europe}>Europe</h6>
      <h6 className={style.oceania}>Oceania</h6>
    </div>
  );
};

export default Time;
