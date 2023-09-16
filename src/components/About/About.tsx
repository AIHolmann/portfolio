import style from "./about.module.css";

const About = () => {
  return (
    <div className="min-h-screen flex">
      <div className={style.main}>
        <aside>
          <article>
            <h2>Desarrollador Web Full Stack</h2>
            <p>Mi nombre es </p>
            <h3>Alejo Holmann. </h3>
            <p>
              Oriundo de Córdoba, a mis 23 años me dedico al desarrollo web de
              aplicaciones dinámicas. Me enfoco en darles un {"toque"}{" "}
              minimalista, una buena experiencia de usuario y un diseño acorde a
              las necesidades.
            </p>
          </article>
        </aside>
      </div>
    </div>
  );
};

export default About;
