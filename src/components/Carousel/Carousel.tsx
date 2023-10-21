import style from "./Carousel.module.css";
import { StaticImageData } from "next/image";
import Image from "next/image";

interface ProjectData {
  name: string;
  description: string;
  stack: string[];
  image: StaticImageData;
  id: number;
}

interface CarouselProps {
  data: ProjectData;
}

const Carousel: React.FC<CarouselProps> = ({ data }) => {
  return (
    <div className={style.carousel_item}>
      <div></div>
      <Image className={style.carousel_img} alt={data.name} src={data.image} />
      <div className={style.texto}>
        <div className={style.carousel_item_text}>{data.description}</div>
        <div className={style.carousel_item_text}>{data.stack}</div>
      </div>
    </div>
  );
};

export default Carousel;
