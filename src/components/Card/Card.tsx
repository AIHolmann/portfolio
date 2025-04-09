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
  update: string;
  repo?: string;
  team: boolean;
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

  function extraerNombreRepositorio(url: string): string | undefined {
    if (!url.includes("github.com/")) {
      return undefined;
    }

    const partes = url.split("github.com/");

    if (partes.length < 2) {
      return undefined;
    }

    const ruta = partes[1];
    const partesRuta = ruta.split("/");

    if (partesRuta.length < 2 || !partesRuta[partesRuta.length - 1]) {
      return undefined;
    }

    return partesRuta[partesRuta.length - 1];
  }

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
        <div className={style.titlecontainer}>
          {data.team ? (
            <div className={style.firstcomment}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 1024 1024"
              >
                <path
                  fill="currentColor"
                  d="M824.2 699.9a301.6 301.6 0 0 0-86.4-60.4C783.1 602.8 812 546.8 812 484c0-110.8-92.4-201.7-203.2-200c-109.1 1.7-197 90.6-197 200c0 62.8 29 118.8 74.2 155.5a301 301 0 0 0-86.4 60.4C345 754.6 314 826.8 312 903.8a8 8 0 0 0 8 8.2h56c4.3 0 7.9-3.4 8-7.7c1.9-58 25.4-112.3 66.7-153.5A226.62 226.62 0 0 1 612 684c60.9 0 118.2 23.7 161.3 66.8C814.5 792 838 846.3 840 904.3c.1 4.3 3.7 7.7 8 7.7h56a8 8 0 0 0 8-8.2c-2-77-33-149.2-87.8-203.9M612 612c-34.2 0-66.4-13.3-90.5-37.5a126.86 126.86 0 0 1-37.5-91.8c.3-32.8 13.4-64.5 36.3-88c24-24.6 56.1-38.3 90.4-38.7c33.9-.3 66.8 12.9 91 36.6c24.8 24.3 38.4 56.8 38.4 91.4c0 34.2-13.3 66.3-37.5 90.5A127.3 127.3 0 0 1 612 612M361.5 510.4c-.9-8.7-1.4-17.5-1.4-26.4c0-15.9 1.5-31.4 4.3-46.5c.7-3.6-1.2-7.3-4.5-8.8c-13.6-6.1-26.1-14.5-36.9-25.1a127.54 127.54 0 0 1-38.7-95.4c.9-32.1 13.8-62.6 36.3-85.6c24.7-25.3 57.9-39.1 93.2-38.7c31.9.3 62.7 12.6 86 34.4c7.9 7.4 14.7 15.6 20.4 24.4c2 3.1 5.9 4.4 9.3 3.2c17.6-6.1 36.2-10.4 55.3-12.4c5.6-.6 8.8-6.6 6.3-11.6c-32.5-64.3-98.9-108.7-175.7-109.9c-110.9-1.7-203.3 89.2-203.3 199.9c0 62.8 28.9 118.8 74.2 155.5c-31.8 14.7-61.1 35-86.5 60.4c-54.8 54.7-85.8 126.9-87.8 204a8 8 0 0 0 8 8.2h56.1c4.3 0 7.9-3.4 8-7.7c1.9-58 25.4-112.3 66.7-153.5c29.4-29.4 65.4-49.8 104.7-59.7c3.9-1 6.5-4.7 6-8.7"
                />
              </svg>
              <p>Proyecto realizado en equipo.</p>
            </div>
          ) : (
            <div className={style.firstcomment}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 12 12"
              >
                <g fill="none" stroke="currentColor">
                  <circle cx="6" cy="3" r="2.5" />
                  <path
                    strokeLinecap="round"
                    d="M1.5 11.5c.2-2.3 2.2-4 4.5-4s4.3 1.7 4.5 4"
                  />
                </g>
              </svg>
              <p>Proyecto realizado solo.</p>
            </div>
          )}
          <div className={style.title}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.1em"
              height="1.1em"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="m256 34.347l192 110.851v221.703L256 477.752L64 366.901V145.198zM106.666 192.001v150.266l128 73.9V265.902zm298.667.001l-128 73.9v150.265l128-73.9zM256 83.614l-125.867 72.67L256 228.952l125.867-72.67z"
              />
            </svg>
            <Link href={data.link} target="_blank">
              <h4>{data.name}</h4>
            </Link>
            <p> / </p>
            {data.repo ? (
              <Link href={data.repo} target="_blank">
                <h5>{extraerNombreRepositorio(data.repo)}</h5>
              </Link>
            ) : (
              <h6>repositorio privado</h6>
            )}
          </div>
        </div>
        <div className={style.ulcontainer}>
          <div className={style.infotooltip}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <g fill="none">
                <circle
                  cx="12"
                  cy="12"
                  r="9.25"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="1.5"
                  d="M12 11.813v5"
                />
                <circle cx="12" cy="8.438" r="1.25" fill="currentColor" />
              </g>
            </svg>{" "}
            <p>Info</p>
          </div>
          <p>{data.description}</p>
          <h6>Herramientas utilizadas:</h6>
          <ul>
            {data.stack.map((el, i) => {
              return (
                <li key={i} className={style.cardStack}>
                  {el}
                </li>
              );
            })}
          </ul>
          <div className={style.update}>
            <p>Actualizado en {data.update}.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
