import style from "./proyects.module.css";
import Card from "../Card/Card";

const data = [
  {
    name: "Die Lavendel",
    description:
      "Diseñé y desarrollé la página profesional del campo de lavandas 'Die Lavendel'.",
    stack: ["HTML", "CSS", "JavaScript", "Next.14", "Cloudinary"],
    link: "https://www.dielavendel.com/",
    image:
      "https://res.cloudinary.com/datlb3rvw/image/upload/v1743545528/AlejoPortfolio/imagenes04-2025/etjjbkotqnn1xngvnzzw.webp",
    id: 10,
    update: "Marzo, 2025",
    team: false,
  },
  {
    name: "Cabañas & Suites Vista Hermosa",
    description:
      "Diseñé y desarrollé la página profesional del complejo de cabañas 'Vista Hermosa'.",
    stack: ["HTML", "CSS", "JavaScript", "Next.14", "Cloudinary"],
    link: "https://www.cabañasvistahermosa.com/",
    image:
      "https://res.cloudinary.com/datlb3rvw/image/upload/v1743545530/AlejoPortfolio/imagenes04-2025/hfwivlclfpn12gkfxhpo.webp",
    id: 9,
    update: "Marzo, 2025",
    team: false,
  },
  {
    name: "desing-darkui-1",
    description:
      "Proyecto/desafío técnico para un puesto de desarrollador web frontend.",
    stack: ["HTML", "CSS", "JavaScript", "Next.14"],
    link: "https://desing-darkui-1.vercel.app/",
    image:
      "https://res.cloudinary.com/datlb3rvw/image/upload/v1743545479/AlejoPortfolio/imagenes04-2025/m42xz9vm9xtyfw7w28pj.webp",
    id: 8,
    update: "Mayo, 2024",
    repo: "https://github.com/AIHolmann/desing-darkui-1",
    team: false,
  },
  {
    name: "NextCRUD",
    description:
      "Aplicación de gestión de tareas. Permite crearlas, visualizarlas, actualizarlas y eliminarlas. Utiliza el ORM Prisma y tiene una API REST integrada en el proyecto (una opción que Next.js ofrece para proyectos pequeños).",
    stack: [
      "HTML",
      "CSS",
      "JavaScript",
      "Next.14",
      "Tailwind",
      "Prisma",
      "PostgreSQL",
      "VercelCLI",
    ],
    link: "https://nextjs-prisma-crud-nbds3ylg8-alejo-s-projects.vercel.app/",
    image:
      "https://res.cloudinary.com/datlb3rvw/image/upload/v1743545467/AlejoPortfolio/imagenes04-2025/mlvuf1nm4boaebr376uy.webp",
    id: 7,
    update: "Abril, 2024",
    repo: "https://github.com/AIHolmann/nextjs-prisma-crud",
    team: false,
  },
  {
    name: "PerdonApp",
    description:
      "'PerdonApp', una aplicación amigable para disculparte con tu persona favorita de una forma única y especial. ¡Probala ahora!",
    stack: [
      "HTML",
      "CSS",
      "JavaScript",
      "Next.14",
      "react-toastify",
      "react-hook-form",
    ],
    link: "https://perdonapp.vercel.app/",
    image:
      "https://res.cloudinary.com/datlb3rvw/image/upload/v1743545496/AlejoPortfolio/imagenes04-2025/iflshujk4amcpz46n8wf.webp",
    id: 6,
    update: "Abril, 2024",
    team: false,
  },
  {
    name: "Jalil Barber",
    description:
      "Diseñé y desarrollé la página profesional de la barbería 'Jalil Barber'.",
    stack: ["HTML", "CSS", "JavaScript", "Next.14"],
    link: "https://jalil-barber.vercel.app/",
    image:
      "https://res.cloudinary.com/datlb3rvw/image/upload/v1743545528/AlejoPortfolio/imagenes04-2025/dajtetnrgxntnry16apv.webp",
    id: 5,
    update: "Febrero, 2024",
    team: false,
  },
  {
    name: "Portfolio",
    description:
      "Tercera versión de mi portafolio personal, diseñado y desarrollado por mí.",
    stack: [
      "HTML",
      "CSS",
      "TypeScript",
      "Next.14",
      "Redux Toolkit",
      "Cloudinary",
    ],
    link: "https://github.com/AIHolmann/portfolio",
    image:
      "https://res.cloudinary.com/datlb3rvw/image/upload/v1743545496/AlejoPortfolio/imagenes04-2025/f2csemihjrtfnqdfasnk.webp",
    id: 4,
    update: "Abril, 2025",
    repo: "https://github.com/AIHolmann/portfolio",
    team: false,
  },
  {
    name: "LaPilcha",
    description:
      "Experiencia académica final en equipo, en Henry Bootcamp. Diseñé y desarrollé: base de datos, servidor y API REST, búsquedas, filtrados combinados, ordenamientos, carrito de compras, pasarela de pagos, ventanas por pago aceptado o denegado.",
    stack: [
      "HTML",
      "TailwindCSS",
      "TypeScript",
      "Next.13",
      "ReduxToolkit",
      "Node.js",
      "MongoDB",
    ],
    link: "https://pf-la-pilcha.vercel.app/",
    image:
      "https://res.cloudinary.com/datlb3rvw/image/upload/v1743545450/AlejoPortfolio/imagenes04-2025/gw06teqowi7qvexf6jlm.webp",
    id: 3,
    update: "Septiembre, 2023",
    repo: "https://github.com/AIHolmann/LaPilchaPF",
    team: true,
  },
  {
    name: "Rick and Morty App",
    description:
      "Experiencia académica de Henry Bootcamp. Diseñé y desarrollé una aplicación de visualización de tarjetas de información que incluye: autenticación, búsquedas, filtrados combinados, ordenamientos, creación y manejo de datos de una API, sección de favoritos, etc.",
    stack: [
      "HTML",
      "CSS",
      "JavaScript",
      "create-react-app",
      "Redux",
      "Node.js",
      "PostgreSQL",
    ],
    link: "https://github.com/AIHolmann/Rick_and_Morty_new",
    image:
      "https://res.cloudinary.com/datlb3rvw/image/upload/v1743545517/AlejoPortfolio/imagenes04-2025/hrv8lcuvtix9nmuoeyic.webp",
    id: 2,
    update: "Abril, 2023",
    repo: "https://github.com/AIHolmann/Rick_and_Morty_new/",
    team: false,
  },
  {
    name: "VideoGames App",
    description:
      "Experiencia académica de Henry Bootcamp. Diseñé y desarrollé una aplicación de visualización de videojuegos que incluye: autenticación, búsquedas, filtrados combinados, ordenamientos, creación y manejo de datos de una API, etc.",
    stack: [
      "HTML",
      "CSS",
      "JavaScript",
      "create-react-app",
      "Redux",
      "Node.js",
      "PostgreSQL",
    ],
    link: "https://github.com/AIHolmann/PI_VideoGames",
    image:
      "https://res.cloudinary.com/datlb3rvw/image/upload/v1743545491/AlejoPortfolio/imagenes04-2025/lqcy1kodsq14gwb0v9zg.webp",
    id: 1,
    update: "Junio, 2023",
    repo: "https://github.com/AIHolmann/PI_VideoGames",
    team: false,
  },
];

const Proyects = () => {
  return (
    <div className={style.all}>
      <h2>proyectos que he realizado</h2>

      <div className={style.cardCont}>
        {data.map((item) => {
          return <Card key={item.id} data={item} />;
        })}
      </div>
    </div>
  );
};

export default Proyects;
