import { StaticImageData } from "next/image";
import Image from "next/image";
import style from "./card.module.css";
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

const Card: React.FC<CarouselProps> = ({ data }) => {
  return (
    <div className={style.container}>
      <div className={style.thumbnail}>
        <Link href={data.link} target="_blank">
          <Image alt={data.name} src={data.image} />
        </Link>
      </div>
      <div className={style.content}>
        <h5>{data.name}</h5>
        <p>{data.description}</p>
        <ul>
          {data.stack.map((el, i) => {
            return (
              <li key={i} className={style.cardStack}>
                {el}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Card;
