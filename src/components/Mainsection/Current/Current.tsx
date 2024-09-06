import style from "./current.module.css";

const Current = () => {
  return (
    <div className={style.container}>
      <div className={style.layout}></div>
      <div className={style.secondlayout}></div>
      <div className={style.text}>
        <span>THE INSIDE SCOOP</span>
        <h2>Currently developing a WMS (Warehouse Management System)</h2>
      </div>
      <div className={style.card}>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
          <li>7</li>
        </ul>
        <div>
          <div>
            <p className={style.comment}>// Importing a single module</p>
            <div className={style.primertexto}>
              <p className={style.rojo}>import </p>
              <p className={style.morado}>moduleName </p>
              <p className={style.rojo}>from </p>
              <p className={style.naranja}>'modulePath'</p>
            </div>
          </div>
          <br />
          <div className={style.brakets}>
            <p className={style.comment}>// Importing multiple modules</p>
            <div className={style.primertexto}>
              <p className={style.rojo}>import</p>
              {" { "}
              <p className={style.morado}>module1</p>
              {" , "}
              <p className={style.morado}>module2</p>
              {" } "}
              <p className={style.rojo}>from</p>
              <p className={style.naranja}>'modulePath'</p>
            </div>
          </div>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Current;
