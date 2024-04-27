import style from "./card.module.css";
import Link from "next/link";
import Loading from "../Loading/Loadin";
import CustomSummary from "../Education/customSummary/CustomSummary";
import { CldImage } from "next-cloudinary";

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
  return (
    <div className={style.container}>
      <div className={style.thumbnail}>
        <Link href={data.link} target="_blank">
          {data.image ? (
            <CldImage
              alt={data.name}
              src={data.image}
              width={1080}
              height={100}
              seoSuffix={data.name}
            />
          ) : (
            <div className={style.loader}>
              <Loading />
            </div>
          )}
        </Link>
      </div>
      <div className={style.content}>
        <h5>{data.name}</h5>
        <details>
          <CustomSummary title="More info..."></CustomSummary>
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
