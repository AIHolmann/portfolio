"use client";
import Home from "@/components/Home/Home";
import About from "@/components/About/About";
import Stack from "@/components/Stack/Stack";
import Proyects from "@/components/Proyects/Proyects";
import Education from "@/components/Education/Education";
import Contact from "@/components/Contact/Contact";
import style from "./page.module.css";
import Footer from "@/components/Footer/Footer";
import Btntop from "@/components/Btntop/Btntop";
import type { RootState } from "@/store";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

const Index = () => {
  const mode = useSelector((state: RootState) => state.mode.value);
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  useEffect(() => {
    let animationFrameId: any = null;

    const moveCursor = (e: any) => {
      animationFrameId = requestAnimationFrame(() => {
        const cursor = document.getElementById("cursor");
        cursor?.setAttribute(
          "style",
          `top: ${e.pageY - 10}px; left: ${e.pageX - 10}px;`
        );
      });
    };

    document.addEventListener("mousemove", moveCursor);

    return () => {
      cancelAnimationFrame(animationFrameId);
      document.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    domLoaded && (
      <div
        className={mode === "light" ? style.all : style.allblack}
        id="allApp"
      >
        <div className={style.cursor} id="cursor"></div>
        <div id="home">
          <Home />
        </div>
        <div id="stack">
          <Stack />
        </div>
        <div id="aboutme">
          <About />
        </div>
        <div id="proyects">
          <Proyects />
        </div>
        <div id="education">
          <Education />
        </div>
        <div id="contact">
          <Contact />
        </div>

        <Footer />
        <Btntop />
      </div>
    )
  );
};

export default Index;
