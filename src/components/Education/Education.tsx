import style from "./education.module.css";

const Education = () => {
  return (
    <div className={style.container}>
      <h2>Educación</h2>
      <div className={style.subcontainer}>
        <details className={style.principales}>
          <summary>Educación Profesional</summary>
          <details className={style.secundarios}>
            <summary>Full Stack Web Developer</summary>
            <p>Henry Bootcamp. 700 horas de cursado teórico-práctico. 2023.</p>
          </details>
          <details className={style.secundarios}>
            <summary>Ingeniería Industrial - EN CURSO -</summary>
            <p>
              Tercer año, Universidad Tecnológica Nacional - Facultad Regional
              Córdoba. 2021.
            </p>
          </details>
          <details className={style.secundarios}>
            <summary>Bachiller en comercio y economía</summary>
            <p>IPEM 168 Diego de Rojas. 2012 - 2017</p>
          </details>
        </details>
        <details className={style.principales}>
          <summary>Educación Complementaria</summary>
          <details className={style.secundarios}>
            <summary>Escuela de Idiomas</summary>
            <p>Set Idiomas. 2018.</p>
          </details>
          <details className={style.secundarios}>
            <summary>
              Fundamentos profesionales del desarrollo de software
            </summary>
            <p>Microsoft y LinkedIn. 2023.</p>
          </details>
        </details>
        <details className={style.principales}>
          <summary>Idiomas</summary>
          <details className={style.secundarios}>
            <summary>Inglés C1</summary>
            <p>Advanced - Nivel conversacional: Intermedio</p>
          </details>
          <details className={style.secundarios}>
            <summary>Italiano A1</summary>
            <p>Basic - Nivel conversacional: Bajo</p>
          </details>
        </details>
        {/* <details className={style.principales}>
        <summary>Libros</summary>
        <details className={style.secundarios}>
          <summary>Secundario</summary>
          <p>Diego de rojas</p>
        </details>
      </details> */}
      </div>
    </div>
  );
};

export default Education;
