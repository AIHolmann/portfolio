import { CldImage } from "next-cloudinary";
import style from "./time.module.css";

const Time = () => {
  return (
    <div className={style.container}>
      <div></div>
      <CldImage
        className={style.img}
        src="https://res.cloudinary.com/datlb3rvw/image/upload/v1716767622/AlejoPortfolio/imagenesNuevas/Default_global_comunication_network_showing_Argentina_as_the_m_2_nvnwhh.webp"
        alt="Clients Image"
        width={1592}
        height={896}
        seoSuffix={"IA image of world map"}
      />
      <h2>
        I'm very flexible with time
        <br />
        zone communications.
      </h2>
      <h6 className={style.usa}>USA</h6>
      <h6 className={style.argentina}>Argentina</h6>
      <h6 className={style.europe}>Europe</h6>
      <h6 className={style.oceania}>Oceania</h6>
    </div>
  );
};

export default Time;
