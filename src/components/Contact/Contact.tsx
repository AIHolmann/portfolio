import { useState, useRef, useEffect } from "react";
import style from "./contact.module.css";
import Link from "next/link";

const Contact = () => {
  const myRef = useRef<HTMLDivElement>(null);
  const [myElementIsVisible, setMyElementIsVisible] = useState(Boolean);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setMyElementIsVisible(entry.isIntersecting);
    });
    if (myRef.current) observer.observe(myRef.current);
  }, []);

  return (
    <div className={style.container}>
      <h2>Contact me</h2>
      <h4 className={myElementIsVisible ? style.animatedCard : style.hidden}>
        If you are interested in <b>hiring me</b>, let me know, <b>send me</b>{" "}
        an email or <b>connect</b> and write to me via LinkedIn.
      </h4>
      <div
        className={`${style.card} ${
          myElementIsVisible ? style.animatedCard : style.hidden
        }`}
        ref={myRef}
      >
        <div>
          <Link
            href={"mailto:alejoholmann99@gmail.com"}
            target="_blank"
            className={style.link}
          >
            <svg
              viewBox="0 0 32 32"
              data-name="Layer 1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
              width="35"
              height="35"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M16.58,19.1068l-12.69-8.0757A3,3,0,0,1,7.1109,5.97l9.31,5.9243L24.78,6.0428A3,3,0,0,1,28.22,10.9579Z"
                  fill="#ea4435"
                ></path>
                <path
                  d="M25.5,5.5h4a0,0,0,0,1,0,0v18a3,3,0,0,1-3,3h0a3,3,0,0,1-3-3V7.5a2,2,0,0,1,2-2Z"
                  fill="#00ac47"
                  transform="translate(53.0001 32.0007) rotate(180)"
                ></path>
                <path
                  d="M29.4562,8.0656c-.0088-.06-.0081-.1213-.0206-.1812-.0192-.0918-.0549-.1766-.0823-.2652a2.9312,2.9312,0,0,0-.0958-.2993c-.02-.0475-.0508-.0892-.0735-.1354A2.9838,2.9838,0,0,0,28.9686,6.8c-.04-.0581-.09-.1076-.1342-.1626a3.0282,3.0282,0,0,0-.2455-.2849c-.0665-.0647-.1423-.1188-.2146-.1771a3.02,3.02,0,0,0-.24-.1857c-.0793-.0518-.1661-.0917-.25-.1359-.0884-.0461-.175-.0963-.267-.1331-.0889-.0358-.1837-.0586-.2766-.0859s-.1853-.06-.2807-.0777a3.0543,3.0543,0,0,0-.357-.036c-.0759-.0053-.1511-.0186-.2273-.018a2.9778,2.9778,0,0,0-.4219.0425c-.0563.0084-.113.0077-.1689.0193a33.211,33.211,0,0,0-.5645.178c-.0515.022-.0966.0547-.1465.0795A2.901,2.901,0,0,0,23.5,8.5v5.762l4.72-3.3043a2.8878,2.8878,0,0,0,1.2359-2.8923Z"
                  fill="#ffba00"
                ></path>
                <path
                  d="M5.5,5.5h0a3,3,0,0,1,3,3v18a0,0,0,0,1,0,0h-4a2,2,0,0,1-2-2V8.5a3,3,0,0,1,3-3Z"
                  fill="#4285f4"
                ></path>
                <path
                  d="M2.5439,8.0656c.0088-.06.0081-.1213.0206-.1812.0192-.0918.0549-.1766.0823-.2652A2.9312,2.9312,0,0,1,2.7426,7.32c.02-.0475.0508-.0892.0736-.1354A2.9719,2.9719,0,0,1,3.0316,6.8c.04-.0581.09-.1076.1342-.1626a3.0272,3.0272,0,0,1,.2454-.2849c.0665-.0647.1423-.1188.2147-.1771a3.0005,3.0005,0,0,1,.24-.1857c.0793-.0518.1661-.0917.25-.1359A2.9747,2.9747,0,0,1,4.3829,5.72c.089-.0358.1838-.0586.2766-.0859s.1853-.06.2807-.0777a3.0565,3.0565,0,0,1,.357-.036c.076-.0053.1511-.0186.2273-.018a2.9763,2.9763,0,0,1,.4219.0425c.0563.0084.113.0077.169.0193a2.9056,2.9056,0,0,1,.286.0888,2.9157,2.9157,0,0,1,.2785.0892c.0514.022.0965.0547.1465.0795a2.9745,2.9745,0,0,1,.3742.21A2.9943,2.9943,0,0,1,8.5,8.5v5.762L3.78,10.9579A2.8891,2.8891,0,0,1,2.5439,8.0656Z"
                  fill="#c52528"
                ></path>
              </g>
            </svg>
            <h5 className={style.email}>alejoholmann99@gmail.com</h5>
          </Link>
        </div>
        <div>
          <Link
            href={"https://www.linkedin.com/in/alejo-holmann-a51262221/"}
            target="_blank"
            className={style.link}
          >
            <svg
              fill="#0077B5"
              width="35"
              height="35"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 24 24"
              xmlSpace="preserve"
              stroke="#0077B5"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
                stroke="#ffffff"
                strokeWidth="4.8"
              >
                {" "}
                <g id="social-linkedin">
                  {" "}
                  <path d="M22.2,0H1.8C0.8,0,0,0.8,0,1.8v20.5c0,1,0.8,1.8,1.8,1.8h20.5c1,0,1.8-0.8,1.8-1.8V1.8C24,0.8,23.2,0,22.2,0z M7.2,20.4 H3.5V9h3.6V20.4z M5.3,7.4c-1.1,0-2.1-0.9-2.1-2.1s0.9-2.1,2.1-2.1s2.1,0.9,2.1,2.1S6.5,7.4,5.3,7.4z M20.5,20.5h-3.6v-6.3 c0-1.8-0.8-2.4-1.8-2.4c-1.1,0-2.1,0.8-2.1,2.5v6.2H9.3V9h3.5v1.6h0c0.3-0.7,1.6-1.9,3.4-1.9c2,0,4.2,1.2,4.2,4.7V20.5z"></path>{" "}
                </g>{" "}
              </g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <g id="social-linkedin">
                  {" "}
                  <path d="M22.2,0H1.8C0.8,0,0,0.8,0,1.8v20.5c0,1,0.8,1.8,1.8,1.8h20.5c1,0,1.8-0.8,1.8-1.8V1.8C24,0.8,23.2,0,22.2,0z M7.2,20.4 H3.5V9h3.6V20.4z M5.3,7.4c-1.1,0-2.1-0.9-2.1-2.1s0.9-2.1,2.1-2.1s2.1,0.9,2.1,2.1S6.5,7.4,5.3,7.4z M20.5,20.5h-3.6v-6.3 c0-1.8-0.8-2.4-1.8-2.4c-1.1,0-2.1,0.8-2.1,2.5v6.2H9.3V9h3.5v1.6h0c0.3-0.7,1.6-1.9,3.4-1.9c2,0,4.2,1.2,4.2,4.7V20.5z"></path>{" "}
                </g>{" "}
              </g>
            </svg>

            <h5>Alejo Holmann</h5>
          </Link>
        </div>
        <div>
          <Link
            href={"https://github.com/AIHolmann"}
            target="_blank"
            className={style.link}
          >
            <svg
              width="35"
              height="35"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#000000"
                d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"
              />
            </svg>
            <h5>AIHolmann</h5>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
