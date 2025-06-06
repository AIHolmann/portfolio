import styles from "./about.module.css";

const About = () => {
  return (
    <div className={styles.main}>
      <span>alejoholmann / README.md</span>
      <div>
        <h2>Hola!</h2>
        <p>
          Como desarrollador web <i>fullstack</i> apasionado y versátil, me
          especializo en crear soluciones robustas y escalables. Mi experiencia
          abarca tanto proyectos corporativos como iniciativas personales,
          siempre manteniendo un enfoque en la modularidad y el crecimiento
          sostenible de los sistemas.
        </p>
        <p>
          Mi expertise se centra en el ecosistema <i>JavaScript</i> y siempre
          estoy dispuesto a aprender y compartir conocimientos con otros
          desarrolladores.
        </p>
      </div>
    </div>
  );
};

export default About;
