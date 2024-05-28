import style from "./me.module.css";

const Me = () => {
  return (
    <div className={style.container}>
      <h2>
        Tech enthusiast with a<br /> passion for development
      </h2>
      <div className={style.card}>
        <div>
          <div className={style.uno}></div>
          <div className={style.dos}></div>
          <div className={style.tres}></div>
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
          }}
        >
          <div className={style.cuatro}></div>
          <div className={style.cinco}></div>
        </div>
      </div>
    </div>
  );
};
export default Me;
