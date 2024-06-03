import { CldImage } from "next-cloudinary";
import style from "./clients.module.css";

const Clients = () => {
  return (
    <div className={style.container}>
      <div></div>
      <CldImage
        className={style.img}
        src="https://res.cloudinary.com/datlb3rvw/image/upload/v1716652108/AlejoPortfolio/imagenesNuevas/laptop_nt08nz.webp"
        alt="Clients Image"
        width={1592}
        height={896}
        seoSuffix={"IA image of a laptop"}
      />
      <h2>
        I prioritize client
        <br /> collaboration, encouraging
        <br /> open two-way communication.
      </h2>
    </div>
  );
};
export default Clients;
