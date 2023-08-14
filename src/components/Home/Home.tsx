import Navbar from "../Navbar/Navbar";
import style from "./home.module.css";
import alejopng from "../../../public/zyro-image.png";
import ale from "../../../public/alejo.jpg";
import Image from "next/image";

const Home = () => {
  /*<div className="min-h-screen">*/
  return (
    <div className={style.alejoback}>
      <Navbar />
      <div className={style.container}>
        <div className={style.conth1}>
          <h1 className={style.h1}>
            {" "}
            ¡Hola!, <br />
            soy Alejo Holmann <br />
            <span className={style.span}>
              <span className={style.span}> Eficiente</span>
              <span className={style.span}> Desarrollador Web</span>
              <span className={style.span}> Creativo</span>
              <span className={style.span}> Proactivo</span>
              <span className={style.span}> Responsable</span>
            </span>
          </h1>
        </div>
        {/*
          <div className={style.imgcontainer}>
            <Image className={style.mainImage} src={ale} alt="Alejo Holmann" />
          </div>
  */}
      </div>
    </div>
  );
};

export default Home;
