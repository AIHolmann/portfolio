import styles from "./education.module.css";
const Education = () => {
  return (
    <section className={styles.section}>
      <div>
        <h4>educación</h4>
      </div>
      <ul>
        <li>
          <span>
            <b>Desarrollador web full stack.</b>
            Henry Bootcamp, 700 horas de cursada tehorica-práctica. 2023.
          </span>
        </li>
        <li>
          <span>
            <b>Ingeniería Industrial - EN PROGRESO.</b>
            Tercer año, UTN-FRC, Córdoba. 2021.
          </span>
        </li>
        <li>
          <span>
            <b>Colegio en comercio y economía.</b>
            IPEM Nº168 Diego de Rojas. 2017.
          </span>
        </li>
      </ul>
    </section>
  );
};
export default Education;
