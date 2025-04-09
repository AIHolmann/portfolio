"use client";
import style from "./home.module.css";
import Namepanel from "../NamePanel/Namepanel";
import About from "../About/About";
import Stack from "../Stack/Stack";
import Education from "../Education/Education";
import AditionalInfo from "../Aditionalinfo/AditionalInfo";
import Proyects from "../Proyects/Proyects";

const Home = () => {
  return (
    <>
      <div className={style.alejoback}>
        <div className={style.container}>
          <div className={style.panelizquierdoprincipal}>
            <Namepanel />
          </div>
          <div className={style.panelderechoprincipal}>
            <div className={style.panelsuperiorsecundario}>
              <div className={style.foto}>foto</div>
              <div className={style.saludo}>
                <About />
              </div>
            </div>
            <div className={style.panelmediosecundario}>
              <div className={style.stack}>
                <Stack />
              </div>
              <div className={style.educprinc}>
                <Education />
              </div>
            </div>

            <div className={style.panelinferiorsecundario}>
              <div className={style.proyectos}>
                <Proyects />
              </div>
              <div className={style.infoadicional}>
                <AditionalInfo />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
