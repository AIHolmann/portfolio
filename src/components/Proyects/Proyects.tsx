"use client";
import React, { useState } from "react";
import image1 from "../../../public/Imagen1.jpg";
import image2 from "../../../public/Imagen2.jpg";
import image3 from "../../../public/imagenchata.jpg";

import Carousel from "../Carousel/Carousel";
import style from "./proyects.module.css";

const data = [
  {
    name: "Nombre del primer proyecto",
    description:
      "Descripcion del primer proyecto: Este es un proyecto de un error bla bla bla",
    stack: ["HTML", "CSS", "JavaScript"],
    image: image1,
    id: 1,
  },
  {
    name: "Nombre del segundo proyecto",
    description:
      "Descripcion del segundo proyecto: Y aqui gente esta un lorem para ustedes: Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium fugiat quasi atque error. Dicta doloremque, vel animi autem culpa exercitationem, voluptates esse aspernatur quibusdam perferendis modi minima ex debitis minus.",
    stack: ["HTML", "CSS", "TypeScript"],
    image: image2,
    id: 2,
  },
  {
    name: "Nombre del tercer proyecto",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium fugiat quasi atque error. Dicta doloremque, vel animi autem culpa exercitationem, voluptates esse aspernatur quibusdam perferendis modi minima ex debitis minus. bla bla bla bla bla bla bla bla bla bla bla bla bla bla.......*******************",
    stack: ["HTML", "CSS", "TypeScript"],
    image: image3,
    id: 2,
  },
];

const Proyects = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const updateIndex = (newIndex: any) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= data.length) {
      newIndex = data.length - 1;
    }
    setActiveIndex(newIndex);
  };

  return (
    <div className={style.all}>
      <h2>Proyects</h2>
      <div className={style.carousel}>
        <div
          className={style.inner}
          style={{ transform: `translate(-${activeIndex * 100}%)` }}
        >
          {data.map((item) => {
            return <Carousel key={item.id} data={item} />;
          })}
        </div>
        <div className={style.carousel_buttons}>
          <button
            onClick={() => {
              updateIndex(activeIndex - 1);
            }}
            className={style.button_arrow}
          >
            <span className={style.span}>{"\u2329"}</span>
          </button>
          <div className={style.indicators}>
            {data.map((item, index) => {
              return (
                <button
                  onClick={() => {
                    updateIndex(index);
                  }}
                  key={item.id}
                  className={style.indicator_buttons}
                >
                  <span
                    className={`${
                      index === activeIndex
                        ? style.indicator_symbol_active
                        : style.indicator_symbol
                    }`}
                  >
                    {"\u233e"}
                  </span>
                </button>
              );
            })}
          </div>
          <button
            onClick={() => {
              updateIndex(activeIndex + 1);
            }}
            className={style.button_arrow}
          >
            <span className={style.span}>{"\u232a"}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Proyects;
