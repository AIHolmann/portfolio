"use client";
import Loading from "../../components/Loading/Loadin";
import dynamic from "next/dynamic";
import style from "./about.module.css";

const About = () => {
  const CldImage = dynamic(
    () => import("next-cloudinary").then((mod) => mod.CldImage),
    { loading: () => <Loading />, ssr: false }
  );
  return (
    <div>
      {" "}
      <div className={style.imgcontainer}>
        <CldImage
          className={style.mainImage}
          src="https://res.cloudinary.com/datlb3rvw/image/upload/v1712884261/AlejoPortfolio/alejo_ulqkzq.jpg"
          alt="Alejo Holmann"
          width={1000}
          height={1000}
          seoSuffix="Alejo Holmann Full-Stack web developer"
          priority={true}
        />
      </div>
    </div>
  );
};
export default About;
