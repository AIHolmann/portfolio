import style from "./education.module.css";
import CustomSummary from "./customSummary/CustomSummary";

const Education = () => {
  const titles = {
    title1: "Professional Education",
    title2: "Supplementary Education",
    title3: "Languages",
  };

  return (
    <div className={style.container}>
      <h2>Education</h2>
      <div className={style.subcontainer}>
        <details className={style.principales}>
          <CustomSummary title={titles.title1} />
          <details className={style.secundarios}>
            <CustomSummary title="Full Stack Web Developer" />
            <p>
              Henry Bootcamp. 700 hours of theoretical-practical courses. 2023.
            </p>
          </details>
          <details className={style.secundarios}>
            <CustomSummary title="Industrial Engineering - IN PROGRESS -" />

            <p>
              Third year, National Technological University - Regional Faculty
              Córdoba. 2021.
            </p>
          </details>
          <details className={style.secundarios}>
            <CustomSummary title="Bachelor in commerce and economics" />
            <p>IPEM 168 Diego de Rojas. 2017.</p>
          </details>
        </details>
        <details className={style.principales}>
          <CustomSummary title={titles.title2} />
          <details className={style.secundarios}>
            <CustomSummary title="Language School" />

            <p>Set Idiomas. 2018.</p>
          </details>
          <details className={style.secundarios}>
            <CustomSummary title="Professional Fundamentals of Software Development" />

            <p>Microsoft y LinkedIn. 2023.</p>
          </details>
        </details>
        <details className={style.principales}>
          <CustomSummary title={titles.title3} />
          <details className={style.secundarios}>
            <CustomSummary title="English C1" />
            <p>Advanced - Conversational level: Intermediate</p>
          </details>
          <details className={style.secundarios}>
            <CustomSummary title="Italian A1" />
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
