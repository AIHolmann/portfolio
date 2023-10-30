"use client";
import React, { useState, useEffect } from "react";
import portfolio from "../../../public/portfolio.jpg";
import lapilcha from "../../../public/lapilcha.jpg";
import rickandmorty from "../../../public/rickandmorty.jpg";
import Carousel from "../Carousel/Carousel";
import style from "./proyects.module.css";
import Card from "../Card/Card";
import videogames from "../../../public/videogames.png";

const data = [
  {
    name: "Portfolio",
    description:
      "Personal Portfolio, designed and developed by me. It features a night mode and simple functionalities. Statistics dashboard in development",
    stack: ["HTML", "CSS", "TypeScript", "Redux Toolkit"],
    image: portfolio,
    id: 1,
  },
  {
    name: "LaPilcha",
    description:
      "Final project by students from the Henry academy, collaborating and developing as a team. LaPilcha is an e-commerce project that offers an online clothing store. It features a complete CRUD and enables users to browse and purchase various fashionable items, select favorites, save them in the shopping cart, create users with Auth0, an integrated payment gateway with 'MercadoPago' for secure transactions, correspondence emails from an SMTP server, and an extensive admin dashboard among other functions.",
    stack: [
      "HTML",
      "Tailwind CSS",
      "TypeScript",
      "Redux Toolkit",
      "Node.js",
      "MongoDB",
    ],
    image: lapilcha,
    id: 2,
  },
  {
    name: "Rick and Morty App",
    description:
      "An application in the style of a 'pokédex' with the theme of the animated series 'Rick and Morty'. It features a complete CRUD, user authentication, a favorite selection system, and combined filters.",
    stack: ["HTML", "CSS", "JavaScript", "Redux", "Node.js", "PostgreSQL"],
    image: rickandmorty,
    id: 3,
  },
  {
    name: "VideoGames App",
    description:
      "Final individual project from the Henry academy. It features a complete CRUD and displays the stock of video games from an API. With a relational database to store user-created video games, it allows interaction with combined filters.",
    stack: ["HTML", "CSS", "JavaScript", "Redux", "Node.js", "PostgreSQL"],
    image: videogames,
    id: 4,
  },
];

const Proyects = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
      {windowWidth > 1024 ? (
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
      ) : (
        <div>
          {data.map((item) => {
            return <Card key={item.id} data={item} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Proyects;
