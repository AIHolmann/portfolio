"use client";
import Home from "@/components/Home/Home";
import style from "./page.module.css";
import Footer from "@/components/Footer/Footer";
import Btntop from "@/components/Btntop/Btntop";
import type { RootState } from "@/store";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar/Navbar";

const Index = () => {
  const mode = useSelector((state: RootState) => state.mode.value);
  const [domLoaded, setDomLoaded] = useState(false);

  const [windowWidth, setWindowWidth] = useState<number>(
    typeof window !== "undefined" ? window.innerWidth : 0
  );
  useEffect(() => {
    if (typeof window !== "undefined") {
      const inner = window.innerWidth;
      setWindowWidth(inner);
    }
  }, []);

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
        <div className={style.navbar}>
          <Navbar windowWidth={windowWidth} />
        </div>
        <div id="home" className={style.home}>
          <Home windowWidth={windowWidth} />
        </div>

        <Footer />
        <Btntop />
      </div>
    )
  );
};

export default Index;
