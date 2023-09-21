"use client";
import Image from "next/image";
import style from "./proyects.module.css";
import image1 from "../../../public/Imagen1.jpg";
import image2 from "../../../public/Imagen2.jpg";
import { useRef } from "react";

const Proyects = () => {
  const proyects = [
    {
      name: "Nombre del primer proyecto",
      description: "Descripcion del primer proyecto",
      stack: ["HTML", "CSS", "JavaScript"],
      image: image1,
    },
    {
      name: "Nombre del segundo proyecto",
      description: "Descripcion del segundo proyecto",
      stack: ["HTML", "CSS", "TypeScript"],
      image: image2,
    },
  ];

  //const grande = document.querySelector(".grande");
  const grande = useRef<HTMLDivElement>(null);
  const punto = document.querySelectorAll(".punto");
  console.log(punto);

  punto.forEach((cadaPunto, i) => {
    punto[i].addEventListener("click", () => {
      let posicion = i;
      let operacion = posicion * -50;
      if (grande.current) {
        grande.current.style.transform = `translateX(${operacion}%)`;
      }
    });
  });

  return (
    <div className={style.carrousel}>
      <div className={style.grande} ref={grande}>
        {proyects.map((el) => {
          return (
            <Image
              src={el.image}
              alt={el.name}
              className={style.img}
              key={el.name}
            />
          );
        })}
      </div>
      <ul className={style.puntos}>
        {proyects.map((element) => {
          console.log(element);
          return (
            <li key={element.name} className={style.punto}>
              .
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Proyects;
