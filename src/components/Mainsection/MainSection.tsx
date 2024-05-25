import styles from "./mainsection.module.css";

const MainSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.maincontainer}>
        <div className={styles.firstcontainer}>
          <div className={styles.firstsubcont}></div>
          <div className={styles.secondsubcont}>
            <div className={styles.time}></div>
            <div className={styles.stack}></div>
          </div>
        </div>
        <div className={styles.secondcontainer}>
          <div className={styles.firstwrap}>
            <div className={styles.phrase}></div>
            <div className={styles.contact}></div>
          </div>
          <div className={styles.secwrap}></div>
        </div>
      </div>
    </section>
  );
};
export default MainSection;
