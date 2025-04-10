import { CldImage } from "next-cloudinary";
import styles from "./photo.module.css"

const Photo = () => {
  return (
    <div className={styles.container}>
      <CldImage
        alt={"Alejo Holmann"}
        src={"AlejoPortfolio/alejo_ulqkzq"}
        width={480}
        height={854}
        seoSuffix={"Alejo Holmann"}
      />
    </div>
  );
};

export default Photo;
