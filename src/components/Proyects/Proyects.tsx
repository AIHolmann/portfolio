"use client";
import React, { useState, useEffect } from "react";
import Carousel from "../Carousel/Carousel";
import style from "./proyects.module.css";
import Card from "../Card/Card";

const data = [
  {
    name: "desing-darkui-1",
    description: "Technical test project for a frontend web developer position",
    stack: ["HTML", "CSS", "JavaScript", "Next.14"],
    link: "https://desing-darkui-1.vercel.app/",
    image:
      "https://res.cloudinary.com/datlb3rvw/image/upload/v1716340936/AlejoPortfolio/imagenesNuevas/desing-sarkui-1_buot0z.webp",
    id: 8,
  },
  {
    name: "NextCRUD",
    description:
      'Task management application. It allows you to create, display, update and delete them. It uses the "Prisma" ORM and has a REST API integrated into the same project (an option that Next.js gives us for small projects)',
    stack: [
      "HTML",
      "CSS",
      "JavaScript",
      "Next.14",
      "Tailwind",
      "Prisma",
      "PostgreSQL",
      "VercelCLI",
    ],
    link: "https://nextjs-prisma-crud-nbds3ylg8-alejo-s-projects.vercel.app/",
    image:
      "https://res.cloudinary.com/datlb3rvw/image/upload/v1713928339/AlejoPortfolio/imagenesNuevas/Create_Next_App_-_Google_Chrome_23_04_2024_21_45_50_hb3p4i.webp",
    id: 7,
  },
  {
    name: "PerdonApp",
    description:
      '"PerdonApp", a friendly application to apologize to your favorite person in a very special and unique way. Try it now!',
    stack: [
      "HTML",
      "CSS",
      "JavaScript",
      "Next.14",
      "react-toastify",
      "react-hook-form",
    ],
    link: "https://perdonapp.vercel.app/",
    image:
      "https://res.cloudinary.com/datlb3rvw/image/upload/v1713928335/AlejoPortfolio/imagenesNuevas/Perdon.App_-_Original_Way_to_Apologize_to_Your_Favorite_Person_-_Google_Chrome_24_04_2024_0_06_34_fpc2q5.webp",
    id: 6,
  },
  {
    name: "Jalil Barber",
    description:
      "Professional page, designed and developed by me for a barber shop.",
    stack: ["HTML", "CSS", "JavaScript", "Next.14"],
    link: "https://jalil-barber.vercel.app/",
    image:
      "https://res.cloudinary.com/datlb3rvw/image/upload/v1713928338/AlejoPortfolio/imagenesNuevas/Create_Next_App_-_Google_Chrome_23_04_2024_21_46_37_ead4wm.webp",
    id: 5,
  },
  {
    name: "Portfolio",
    description:
      "Personal Portfolio, designed and developed by me. It features a night mode and simple functionalities. Statistics dashboard in development",
    stack: [
      "HTML",
      "CSS",
      "TypeScript",
      "Next.14",
      "Redux Toolkit",
      "Cloudinary",
    ],
    link: "https://github.com/AIHolmann/portfolio",
    image:
      "https://res.cloudinary.com/datlb3rvw/image/upload/v1713928337/AlejoPortfolio/imagenesNuevas/Create_Next_App_-_Google_Chrome_23_04_2024_21_47_19_sfiuiw.webp",
    id: 4,
  },
  {
    name: "LaPilcha",
    description:
      "Final project by students from the Henry academy. An e-commerce project, that features a complete CRUD and enables users to browse and purchase various items, select favorites, save them in the shopping cart, create users with Auth0, an integrated payment gateway with 'MercadoPago' for secure transactions, correspondence emails from an SMTP server, and an extensive admin dashboard among other functions.",
    stack: [
      "HTML",
      "TailwindCSS",
      "TypeScript",
      "Next.13",
      "ReduxToolkit",
      "Node.js",
      "MongoDB",
    ],
    link: "https://pf-la-pilcha.vercel.app/",
    image:
      "https://res.cloudinary.com/datlb3rvw/image/upload/v1713928336/AlejoPortfolio/imagenesNuevas/Create_Next_App_-_Google_Chrome_23_04_2024_21_47_35_h9t21m.webp",
    id: 3,
  },
  {
    name: "Rick and Morty App",
    description:
      "An application in the style of a 'pokédex' with the theme of the animated series 'Rick and Morty'. It features a complete CRUD, user authentication, a favorite selection system, and combined filters.",
    stack: [
      "HTML",
      "CSS",
      "JavaScript",
      "create-react-app",
      "Redux",
      "Node.js",
      "PostgreSQL",
    ],
    link: "https://github.com/AIHolmann/Rick_and_Morty_new",
    image:
      "https://res.cloudinary.com/datlb3rvw/image/upload/v1713928335/AlejoPortfolio/imagenesNuevas/Create_Next_App_-_Google_Chrome_23_04_2024_21_50_12_kb5cik.webp",
    id: 2,
  },
  {
    name: "VideoGames App",
    description:
      "Final individual project from the Henry academy. It features a complete CRUD and displays the stock of video games from an API. With a relational database to store user-created video games, it allows interaction with combined filters.",
    stack: [
      "HTML",
      "CSS",
      "JavaScript",
      "create-react-app",
      "Redux",
      "Node.js",
      "PostgreSQL",
    ],
    link: "https://github.com/AIHolmann/PI_VideoGames",
    image:
      "https://res.cloudinary.com/datlb3rvw/image/upload/v1713928336/AlejoPortfolio/imagenesNuevas/Create_Next_App_-_Google_Chrome_23_04_2024_21_53_45_oje9yu.webp",
    id: 1,
  },
];

const Proyects = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [windowWidth, setWindowWidth] = useState<number>(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

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
      <h2>my proyects</h2>
      {windowWidth > 1280 ? (
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
        <div className={style.cardCont}>
          {data.map((item) => {
            return <Card key={item.id} data={item} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Proyects;
