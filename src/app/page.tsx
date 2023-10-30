"use client";
import Home from "@/components/Home/Home";
import About from "@/components/About/About";
import Stack from "@/components/Stack/Stack";
import Proyects from "@/components/Proyects/Proyects";
import Education from "@/components/Education/Education";
import Contact from "@/components/Contact/Contact";
import style from "./page.module.css";
import Footer from "@/components/Footer/Footer";
import type { RootState } from "@/store";
import { useSelector } from "react-redux";

const Index = () => {
  const mode = useSelector((state: RootState) => state.mode.value);

  return (
    <div className={mode === "light" ? style.all : style.allblack} id="allApp">
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
    </div>
  );
};

export default Index;
