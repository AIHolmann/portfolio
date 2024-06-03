import styles from "./mainsection.module.css";
import Clients from "./Clients/Clients";
import Time from "./Time/Time";
import Stack from "./Stack/Stack";
import Me from "./Me/Me";
import Contact from "./Contactcard/Contactcard";
import Current from "./Current/Current";

const MainSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.maincontainer}>
        <div className={styles.firstcontainer}>
          <div className={styles.firstsubcont}>
            <Clients />
          </div>
          <div className={styles.secondsubcont}>
            <div className={styles.time}>
              <Time />
            </div>
            <div className={styles.stack}>
              <Stack />
            </div>
          </div>
        </div>
        <div className={styles.secondcontainer}>
          <div className={styles.firstwrap}>
            <div className={styles.phrase}>
              <Me />
            </div>
            <div className={styles.contact}>
              <Contact />
            </div>
          </div>
          <div className={styles.secwrap}>
            <Current />
          </div>
        </div>
      </div>
    </section>
  );
};
export default MainSection;
