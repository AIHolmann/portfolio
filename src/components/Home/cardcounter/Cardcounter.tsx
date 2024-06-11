import style from "./cardcounter.module.css";
import { useEffect, useRef, useState } from "react";
const Cardcounter = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [intervalo, setIntervalo] = useState(100);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (count < 10) {
        setCount(count + 1);
        if (count === 5) {
          setIntervalo(250);
        }
        if (count === 8) {
          setIntervalo(320);
        }
      } else {
        clearInterval(intervalId);
      }
    }, intervalo);
    return () => clearInterval(intervalId);
  }, [count]);

  useEffect(() => {
    const intervalId2 = setInterval(() => {
      if (count2 < 3) {
        setCount2(count2 + 1);
      } else {
        clearInterval(intervalId2);
      }
    }, 320);
    return () => clearInterval(intervalId2);
  }, [count2]);

  return (
    <div className={style.container}>
      <div className={style.subcontainer}>
        <span>+ {count}</span>
        <div>Finished projects</div>
      </div>
      <div className={style.line}></div>
      <div className={style.subcontainer}>
        <span>+ {count2}</span>
        <div>Countries I have worked</div>
      </div>
    </div>
  );
};
export default Cardcounter;
