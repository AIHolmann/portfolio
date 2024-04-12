import Navbar from "../Navbar/Navbar";
import style from "./home.module.css";
import { CldImage } from "next-cloudinary";

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
            <CldImage
              className={style.mainImage}
              src="https://res.cloudinary.com/datlb3rvw/image/upload/v1712884261/AlejoPortfolio/alejo_ulqkzq.jpg"
              alt="Alejo Holmann"
              width={1000}
              height={1000}
              seoSuffix="Alejo Holmann Full-Stack web developer"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
