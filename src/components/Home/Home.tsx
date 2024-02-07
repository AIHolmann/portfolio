import Navbar from "../Navbar/Navbar";
import style from "./home.module.css";
import ale from "../../../public/alejo.jpg";
import Image from "next/image";

const Home = () => {
  return (
    <>
      <div className={style.alejoback}>
        <Navbar />
        <div className={style.container}>
          <div className={style.conth1}>
            <h1 className={style.h1}>
              {" "}
              ¡Hi!,
              <br />
              {"I'm Alejo Holmann."}
              <br />
              Full-Stack Web Developer
              <br />
              <span className={style.span}>
                <span className={style.span}> Efficient</span>
                <span className={style.span}> Creative</span>
                <span className={style.span}> Proactive</span>
                <span className={style.span}> Adaptable</span>
                <span className={style.span}> Responsible</span>
              </span>
            </h1>
          </div>

          <div className={style.imgcontainer}>
            <Image className={style.mainImage} src={ale} alt="Alejo Holmann" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
