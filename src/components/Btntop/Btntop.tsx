import style from "./btntop.module.css";
import { useEffect, useState } from "react";

const Btntop = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    let ubiPrinc = window.scrollY;

    const handleScroll = () => {
      let ubiAct = window.scrollY;

      setScroll(ubiAct);
      if (ubiAct > 300) {
        setScroll(1);
      } else {
        setScroll(0);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      className={scroll === 0 ? style.btn : style.btnOn}
      id="btn_scrolltop"
    >
      <a id="scroll-up" className={style.scroll_up} href="#">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0h24v24H0z" fill="none"></path>
          <path
            fill="rgba(255,255,255,1)"
            d="M11.9997 10.8284L7.04996 15.7782L5.63574 14.364L11.9997 8L18.3637 14.364L16.9495 15.7782L11.9997 10.8284Z"
          ></path>
        </svg>
      </a>
    </button>
  );
};

export default Btntop;
