import style from "./Carousel.module.css";
import { StaticImageData } from "next/image";
import Image from "next/image";
import Link from "next/link";

interface ProjectData {
  name: string;
  description: string;
  stack: string[];
  link: string;
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
      <Link href={data.link} target="_blank">
        <Image
          className={style.carousel_img}
          alt={data.name}
          src={data.image}
        />
        <div className={style.texto}>
          <h3 className={style.carousel_item_text}>{data.name}</h3>
          <div className={style.carousel_item_text}>{data.description}</div>
          <ul>
            {data.stack.map((el, i) => {
              return (
                <li key={i} className={style.carousel_item_text}>
                  {el}
                </li>
              );
            })}
          </ul>
        </div>
      </Link>
    </div>
  );
};

export default Carousel;
