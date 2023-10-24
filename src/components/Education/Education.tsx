import style from "./education.module.css";

const Education = () => {
  return (
    <div className={style.container}>
      <h2>Education</h2>
      <div className={style.subcontainer}>
        <details className={style.principales}>
          <summary>Professional Education</summary>
          <details className={style.secundarios}>
            <summary>Full Stack Web Developer</summary>
            <p>
              Henry Bootcamp. 700 hours of theoretical-practical courses. 2023.
            </p>
          </details>
          <details className={style.secundarios}>
            <summary>Industrial Engineering - IN PROGRESS -</summary>
            <p>
              Third year, National Technological University - Regional Faculty
              Córdoba. 2021.
            </p>
          </details>
          <details className={style.secundarios}>
            <summary>Bachelor in commerce and economics</summary>
            <p>IPEM 168 Diego de Rojas. 2017.</p>
          </details>
        </details>
        <details className={style.principales}>
          <summary>Supplementary Education</summary>
          <details className={style.secundarios}>
            <summary>Language School</summary>
            <p>Set Idiomas. 2018.</p>
          </details>
          <details className={style.secundarios}>
            <summary>Professional Fundamentals of Software Development</summary>
            <p>Microsoft y LinkedIn. 2023.</p>
          </details>
        </details>
        <details className={style.principales}>
          <summary>Languages</summary>
          <details className={style.secundarios}>
            <summary>English C1</summary>
            <p>Advanced - Conversational level: Intermediate</p>
          </details>
          <details className={style.secundarios}>
            <summary>Italian A1</summary>
            <p>Basic - Conversational level: Low</p>
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
