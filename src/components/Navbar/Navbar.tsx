"use client";
import style from "./navbar.module.css";
import { useState, useEffect, useRef } from "react";
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

  const ulRef = useRef<HTMLUListElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [translateX, setTranslateX] = useState(0);

  const handleTouchStart = (e: React.TouchEvent<HTMLUListElement>) => {
    setIsDragging(true);
    setTranslateX(0);
  };
  const handleTouchMove = (e: React.TouchEvent<HTMLUListElement>) => {
    if (!isDragging) return;
    const touch = e.touches[0];
    const rect = ulRef.current?.getBoundingClientRect();

    if (rect && touch.clientX <= rect.right) {
      setTranslateX(touch.clientX - rect.left);
    }
  };
  const handleTouchEnd = () => {
    if (translateX >= 35) {
      setIsDragging(false);
      setTranslateX(0);
      closemenu();
    }
  };
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
      <ul
        className={style.list}
        id="draggableList"
        ref={ulRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{ transform: `translateX(-${translateX}px)` }}
      >
        <li>
          <a href="#aboutme" onClick={closemenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              viewBox="0 0 16 16"
            >
              <path
                fill="#000000"
                d="M4.75 7a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5zM5 4.75A.75.75 0 0 1 5.75 4h5.5a.75.75 0 0 1 0 1.5h-5.5A.75.75 0 0 1 5 4.75M6.75 10a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5z"
              />
              <path
                fill="#000000"
                d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25Z"
              />
            </svg>
            About me
          </a>
        </li>
        <li>
          <a href="#stack" onClick={closemenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              viewBox="0 0 256 256"
            >
              <path
                fill="#000000"
                d="M230.91 172a8 8 0 0 1-2.91 10.91l-96 56a8 8 0 0 1-8.06 0l-96-56A8 8 0 0 1 36 169.09l92 53.65l92-53.65a8 8 0 0 1 10.91 2.91M220 121.09l-92 53.65l-92-53.65a8 8 0 0 0-8 13.82l96 56a8 8 0 0 0 8.06 0l96-56a8 8 0 1 0-8.06-13.82M24 80a8 8 0 0 1 4-6.91l96-56a8 8 0 0 1 8.06 0l96 56a8 8 0 0 1 0 13.82l-96 56a8 8 0 0 1-8.06 0l-96-56A8 8 0 0 1 24 80m23.88 0L128 126.74L208.12 80L128 33.26Z"
              />
            </svg>
            Stack
          </a>
        </li>
        <li>
          <a href="#proyects" onClick={closemenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="6" r="1" fill="#000000" />
              <path
                fill="#000000"
                d="M6 17h12v2H6zm4-5.17l2.792 2.794l3.932-3.935L18 12V8h-4l1.31 1.275l-2.519 2.519L10 9l-4 4l1.414 1.414z"
              />
              <path
                fill="#000000"
                d="M19 3h-3.298a4.497 4.497 0 0 0-.32-.425l-.01-.012a4.426 4.426 0 0 0-2.89-1.518a2.577 2.577 0 0 0-.964 0a4.426 4.426 0 0 0-2.89 1.518l-.01.012a4.497 4.497 0 0 0-.32.424V3H5a3.003 3.003 0 0 0-3 3v14a3.003 3.003 0 0 0 3 3h14a3.003 3.003 0 0 0 3-3V6a3.003 3.003 0 0 0-3-3m1 17a1 1 0 0 1-1 1H5a1.001 1.001 0 0 1-1-1V6a1.001 1.001 0 0 1 1-1h4.55a2.5 2.5 0 0 1 4.9 0H19a1.001 1.001 0 0 1 1 1Z"
              />
            </svg>
            Proyects
          </a>
        </li>
        <li>
          <a href="#education" onClick={closemenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              viewBox="0 0 24 24"
            >
              <path
                fill="#000000"
                d="M12 .807L23.835 8.5L22 9.693V16h-2v-5.007l-1 .65V17.5c0 1.47-1.014 2.615-2.253 3.339c-1.265.737-2.945 1.16-4.747 1.16s-3.483-.423-4.747-1.16C6.013 20.115 5 18.969 5 17.499v-5.856L.165 8.5zM7 12.943V17.5c0 .463.33 1.067 1.261 1.61c.908.53 2.227.89 3.739.89s2.831-.36 3.739-.89c.932-.543 1.26-1.147 1.26-1.61v-4.557l-5 3.25zM20.165 8.5L12 3.193L3.835 8.5L12 13.807z"
              />
            </svg>
            Education
          </a>
        </li>
        <li>
          <a href="#contact" onClick={closemenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              viewBox="0 0 24 24"
            >
              <path
                fill="#000000"
                d="M14 11h7V6h-7zm3.5-1.25L15 8V7l2.5 1.75L20 7v1zM2 21q-.825 0-1.412-.587T0 19V5q0-.825.588-1.412T2 3h20q.825 0 1.413.588T24 5v14q0 .825-.587 1.413T22 21zm13.9-2H22V5H2v14h.1q1.05-1.875 2.9-2.937T9 15q2.15 0 4 1.063T15.9 19M9 14q1.25 0 2.125-.875T12 11q0-1.25-.875-2.125T9 8q-1.25 0-2.125.875T6 11q0 1.25.875 2.125T9 14m-4.45 5h8.9q-.85-.95-2.013-1.475T9 17q-1.275 0-2.425.525T4.55 19M9 12q-.425 0-.712-.288T8 11q0-.425.288-.712T9 10q.425 0 .713.288T10 11q0 .425-.288.713T9 12m3 0"
              />
            </svg>
            Contact
          </a>
        </li>
        <li className={style.liinput}>
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
