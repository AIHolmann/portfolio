"use client";
import style from "./navbar.module.css";
import { useState, useEffect } from "react";
import { light, dark } from "../../store/slices/theme";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@/store";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(0);
  const [scroll, setScroll] = useState(0);
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
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="38.966"
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
          <a href="#aboutme">About me</a>
        </li>
        <li>
          <a href="#stack">Stack</a>
        </li>
        <li>
          <a href="#proyects">Proyects</a>
        </li>
        <li>
          <a href="#education">Education</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
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
