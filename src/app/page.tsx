import Home from "@/components/Home/Home";
import About from "@/components/About/About";
import Stack from "@/components/Stack/Stack";
import Proyects from "@/components/Proyects/Proyects";
import Education from "@/components/Education/Education";
import Contact from "@/components/Contact/Contact";
import style from "./page.module.css";
import Footer from "@/components/Footer/Footer";

const Index = () => {
  return (
    <div className={style.all}>
      <div id="home">
        <Home />
      </div>
      <div id="aboutme">
        <About />
      </div>
      <div id="stack">
        <Stack />
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
      <div id="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Index;
