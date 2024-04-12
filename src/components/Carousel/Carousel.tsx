"use client";
import style from "./carousel.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import Loading from "../Loading/Loadin";
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

const Carousel: React.FC<CarouselProps> = ({ data }) => {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    domLoaded && (
      <div className={style.carousel_item}>
        <div></div>
        <div>
          <Link href={data.link} target="_blank">
            {data.image ? (
              <CldImage
                className={style.carousel_img}
                alt={data.name}
                src={data.image}
                width={1080}
                height={100}
                seoSuffix={data.name}
              />
            ) : (
              <div className={style.carousel_loading}>
                <Loading />
              </div>
            )}
            <div className={style.texto}>
              <h3 className={style.carousel_item_text}>
                <b>{data.name}</b>
              </h3>
              <div className={style.carousel_item_text}>
                <p>{data.description}</p>
              </div>
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
      </div>
    )
  );
};

export default Carousel;
