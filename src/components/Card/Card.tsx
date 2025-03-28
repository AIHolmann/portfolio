import style from "./card.module.css";
import Link from "next/link";
import Loading from "../Loading/Loadin";
import dynamic from "next/dynamic";

interface ProjectData {
  name: string;
  description: string;
  stack: string[];
  link: string;
  image: string;
  id: number;
}

interface CarouselProps {
  data: ProjectData;
}

const Card: React.FC<CarouselProps> = ({ data }) => {
  const CldImage = dynamic(
    () => import("next-cloudinary").then((mod) => mod.CldImage),
    {
      loading: () => (
        <div className={style.loader}>
          <Loading />
        </div>
      ),
      ssr: false,
    }
  );

  return (
    <div className={style.container}>
      <div className={style.thumbnail}>
        <Link href={data.link} target="_blank">
          <CldImage
            alt={data.name}
            src={data.image}
            width={1080}
            height={720}
            seoSuffix={data.name}
          />
        </Link>
      </div>
      <div className={style.content}>
        <h5>{data.name}</h5>
        <details>
          <summary></summary>
          <p>{data.description}</p>
        </details>
        <div className={style.ulcontainer}>
          <h6>Stack:</h6>
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
    </div>
  );
};

export default Card;
