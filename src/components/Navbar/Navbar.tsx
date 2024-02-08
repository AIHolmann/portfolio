"use client";
import style from "./navbar.module.css";
import { useState, useEffect } from "react";
import { light, dark } from "../../store/slices/theme";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@/store";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(0);
  const [scroll, setScroll] = useState(0);
  let [unic, setUnic] = useState("\u2630");
  const dispatch = useDispatch();
  const mode = useSelector((state: RootState) => state.mode.value);

  useEffect(() => {
    let ubiPrinc = window.scrollY;

    const handleScroll = () => {
      let ubiAct = window.scrollY;
      if (ubiPrinc === ubiAct) {
        setIsSticky(0);
      } else if (ubiPrinc > ubiAct) {
        setIsSticky(1);
      } else {
        setIsSticky(2);
      }
      ubiPrinc = ubiAct;
      setScroll(ubiPrinc);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const unicode = () => {
    if (unic === "\u2630") {
      setUnic("\u2715");
    } else {
      setUnic("\u2630");
    }
  };

  const closemenu = () => {
    const inputElement: HTMLElement | null = document.getElementById("check");
    inputElement?.focus();
    inputElement?.click();
    unicode();
  };
/*
  const menuHamburguesa: HTMLElement | null = document.querySelector(".list");
  const botonCerrar: HTMLElement | null = document.querySelector(".checkbtn");
  /*
  botonCerrar?.addEventListener("click", () => {
    menuHamburguesa?.classList.toggle("activo");
  });
  let posInicialX: any = null;
  let posActualX: any = null;
  
  menuHamburguesa?.addEventListener("mousedown", (e) => {
    posInicialX = e.clientX;
  });

  let diferenciaX: any;
  menuHamburguesa?.addEventListener("mousemove", (e) => {
    if (posInicialX !== null) {
      posActualX = e.clientX;
      diferenciaX = posActualX - posInicialX;
      menuHamburguesa.style.left = `${diferenciaX}px`;
    }
  });

  menuHamburguesa?.addEventListener("mouseup", () => {
    if (posActualX < 0 && Math.abs(diferenciaX) > 50) {
      menuHamburguesa.classList.remove("activo");
    }
    posInicialX = null;
    posActualX = null;
  });
  *//*
  let diferenciaX: any;
  menuHamburguesa?.addEventListener("drag", (e) => {
    diferenciaX = e.clientX - e.offsetX;
    console.log(diferenciaX);
    menuHamburguesa.style.left = `${diferenciaX}px`;
  });

  menuHamburguesa?.addEventListener("dragend", (e) => {
    if (e.clientX < 0 && Math.abs(diferenciaX) > 50) {
      // Guardar la configuración del menú como cerrado
      // ...
      menuHamburguesa.classList.remove("activo");
    }
  });
  */
  /*
  botonCerrar?.addEventListener("click", () => {
    menuHamburguesa?.classList.toggle("activo");
  });*/
  return (
    <nav
      className={
        scroll >= 0 && scroll <= 300
          ? style.container
          : isSticky === 1
          ? style.sticky
          : style.hidden
      }
    >
      <input type="checkbox" id="check" className={style.check} />
      <label htmlFor="check" className={style.checkbtn}>
        <i onClick={unicode}>{unic}</i>
      </label>
      <a href="#home">
        <div className={style.logo}>
          <svg
            width="50"
            height="50"
            version="1.1"
            viewBox="0 0 500.00001 500.00001"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g
              transform="translate(0 -552.36)"
              fill="none"
              stroke="#555"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="38.966"
            >
              <path d="m125.28 700.91-101.56 101.56 101.56 101.56" />
              <path d="m376.97 700.91 101.56 101.56-101.56 101.56" />
              <path d="m274.86 670.23-54.621 265.77" />
            </g>
          </svg>
          <span>AH</span>
        </div>
      </a>
      <ul className={style.list}>
        <li>
          <a href="#aboutme" onClick={closemenu}>
            About me
          </a>
        </li>
        <li>
          <a href="#stack" onClick={closemenu}>
            Stack
          </a>
        </li>
        <li>
          <a href="#proyects" onClick={closemenu}>
            Proyects
          </a>
        </li>
        <li>
          <a href="#education" onClick={closemenu}>
            Education
          </a>
        </li>
        <li>
          <a href="#contact" onClick={closemenu}>
            Contact
          </a>
        </li>
        <li>
          <input
            aria-checked={true}
            type="checkbox"
            className={style.switch}
            onClick={
              mode === "light"
                ? () => dispatch(dark())
                : () => dispatch(light())
            }
          ></input>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
