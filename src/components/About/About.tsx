"use client";
import { useRef, useEffect, useState } from "react";
import style from "./about.module.css";

const About = () => {
  const el = useRef<HTMLDivElement>(null);
  const [windowWidth, setWindowWidth] = useState<number>(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleMouseMove = (event: any) => {
    if (el.current) {
      const { clientHeight, clientWidth } = el.current;
      const { clientX, clientY } = event;

      const yRotation = ((clientX - clientWidth / 2) / clientWidth) * 20;
      const xRotation = ((clientY - clientHeight / 2) / clientHeight) * 20;

      let string = `perspective(500px) scale(1.01) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;

      el.current.style.transform = string;
    }
  };

  const handleMouseOut = () => {
    if (el.current) {
      el.current.style.transform = `perspective(500px) scale(1) rotateX(0) rotateY(0)`;
    }
  };

  return windowWidth > 1024 ? (
    <div className={style.main}>
      <div
        className={style.back}
        id="tarjeta"
        onMouseMove={handleMouseMove}
        onMouseOut={handleMouseOut}
        ref={el}
      >
        <section className={style.card}>
          <div>
            <svg
              width="280px"
              height="280px"
              viewBox="0 0 50 50"
              enable-background="new 0 0 50 50"
              id="Layer_1"
              version="1.1"
              xmlSpace="preserve"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <g>
                <path
                  d="M46.8942,5.31252H3.10575c-1.16296,0-2.10577,0.94275-2.10577,2.10571V34.6894   c0,1.16296,0.94281,2.10571,2.10577,2.10571H46.8942c1.16302,0,2.10577-0.94275,2.10577-2.10571V7.41823   C48.99997,6.25526,48.05722,5.31252,46.8942,5.31252z"
                  fill="#E7E3E6"
                />

                <rect
                  fill="#656766"
                  height="23.74885"
                  width="42.6767"
                  x="3.66171"
                  y="7.83474"
                />

                <g>
                  <rect
                    fill="#806292"
                    height="11.87442"
                    width="21.33945"
                    x="24.99903"
                    y="7.83476"
                  />
                </g>

                <g>
                  <rect
                    fill="#4E4C4D"
                    height="11.87442"
                    width="21.33945"
                    x="24.99903"
                    y="19.70918"
                  />
                </g>

                <g>
                  <rect
                    fill="#656766"
                    height="11.87442"
                    width="21.33945"
                    x="3.66179"
                    y="7.83476"
                  />
                </g>

                <g>
                  <rect
                    fill="#656766"
                    height="11.87442"
                    width="21.33945"
                    x="3.66179"
                    y="19.70918"
                  />
                </g>

                <g>
                  <path
                    d="M39.7464,13.51671l-1.22293-1.22293c-0.14081-0.14081-0.36892-0.14081-0.50973,0    c-0.14081,0.14081-0.14081,0.36892,0,0.50973l0.96806,0.96806l-0.96806,0.96806c-0.14081,0.14081-0.14081,0.36892,0,0.50973    c0.0704,0.07041,0.16263,0.10561,0.25486,0.10561c0.09223,0,0.18446-0.0352,0.25486-0.10561l1.22293-1.22293    C39.88721,13.88563,39.88721,13.65752,39.7464,13.51671z"
                    fill="#FFFFFF"
                  />
                </g>

                <g>
                  <path
                    d="M33.56346,12.29378c-0.14081-0.14081-0.36892-0.14081-0.50973,0l-1.22363,1.22293    c-0.06759,0.06759-0.10561,0.15911-0.10561,0.25486c0,0.09575,0.03802,0.18728,0.10561,0.25486l1.22363,1.22293    c0.0704,0.07041,0.16263,0.10561,0.25486,0.10561c0.09223,0,0.18446-0.0352,0.25486-0.10561    c0.14081-0.14081,0.14081-0.36892,0-0.50973l-0.96877-0.96806l0.96877-0.96806    C33.70427,12.6627,33.70427,12.43459,33.56346,12.29378z"
                    fill="#FFFFFF"
                  />
                </g>

                <g>
                  <path
                    d="M37.14424,11.12788c-0.17742-0.09012-0.39427-0.02042-0.48579,0.1563l-2.38179,4.64601    c-0.09082,0.17742-0.02042,0.39497,0.1563,0.48579c0.0528,0.02675,0.10913,0.03943,0.16475,0.03943    c0.13095,0,0.25698-0.07181,0.32104-0.19572l2.38179-4.64601C37.39136,11.43625,37.32096,11.2187,37.14424,11.12788z"
                    fill="#FFFFFF"
                  />
                </g>

                <g>
                  <path
                    d="M36.62082,22.39944h-6.43956c-0.19925,0-0.36047-0.16123-0.36047-0.36047s0.16123-0.36047,0.36047-0.36047    h6.43956c0.19925,0,0.36047,0.16123,0.36047,0.36047S36.82007,22.39944,36.62082,22.39944z"
                    fill="#85BD57"
                  />
                </g>

                <g>
                  <path
                    d="M41.39532,22.39944h-2.88694c-0.19925,0-0.36047-0.16123-0.36047-0.36047s0.16122-0.36047,0.36047-0.36047    h2.88694c0.19925,0,0.36047,0.16123,0.36047,0.36047S41.59456,22.39944,41.39532,22.39944z"
                    fill="#E7E3E6"
                  />
                </g>

                <g>
                  <path
                    d="M33.14917,24.20321h-2.96791c-0.19925,0-0.36047-0.16123-0.36047-0.36047s0.16123-0.36047,0.36047-0.36047    h2.96791c0.19925,0,0.36047,0.16123,0.36047,0.36047S33.34842,24.20321,33.14917,24.20321z"
                    fill="#E7E3E6"
                  />
                </g>

                <g>
                  <path
                    d="M41.39532,24.20321h-6.35895c-0.19925,0-0.36047-0.16123-0.36047-0.36047s0.16122-0.36047,0.36047-0.36047    h6.35895c0.19925,0,0.36047,0.16123,0.36047,0.36047S41.59456,24.20321,41.39532,24.20321z"
                    fill="#53B1E2"
                  />
                </g>

                <g>
                  <path
                    d="M31.26162,26.00698h-1.08036c-0.19925,0-0.36047-0.16123-0.36047-0.36047    c0-0.19924,0.16123-0.36047,0.36047-0.36047h1.08036c0.19925,0,0.36047,0.16123,0.36047,0.36047    C31.62209,25.84575,31.46087,26.00698,31.26162,26.00698z"
                    fill="#BA8C5C"
                  />
                </g>

                <g>
                  <path
                    d="M41.39532,26.00698h-8.24615c-0.19925,0-0.36047-0.16123-0.36047-0.36047    c0-0.19924,0.16123-0.36047,0.36047-0.36047h8.24615c0.19925,0,0.36047,0.16123,0.36047,0.36047    C41.75579,25.84575,41.59456,26.00698,41.39532,26.00698z"
                    fill="#E7E3E6"
                  />
                </g>

                <g>
                  <path
                    d="M36.32829,27.81075h-6.14703c-0.19925,0-0.36047-0.16123-0.36047-0.36047    c0-0.19924,0.16123-0.36047,0.36047-0.36047h6.14703c0.19925,0,0.36047,0.16123,0.36047,0.36047    C36.68877,27.64952,36.52754,27.81075,36.32829,27.81075z"
                    fill="#FFC966"
                  />
                </g>

                <g>
                  <path
                    d="M41.39532,27.81075h-3.17947c-0.19925,0-0.36047-0.16123-0.36047-0.36047    c0-0.19924,0.16123-0.36047,0.36047-0.36047h3.17947c0.19925,0,0.36047,0.16123,0.36047,0.36047    C41.75579,27.64952,41.59456,27.81075,41.39532,27.81075z"
                    fill="#9A7CA8"
                  />
                </g>

                <g>
                  <path
                    d="M33.40122,29.61381h-3.21996c-0.19925,0-0.36047-0.16123-0.36047-0.36047s0.16123-0.36047,0.36047-0.36047    h3.21996c0.19925,0,0.36047,0.16123,0.36047,0.36047S33.60046,29.61381,33.40122,29.61381z"
                    fill="#E7E3E6"
                  />
                </g>

                <g>
                  <path
                    d="M41.39532,29.61381h-6.10655c-0.19925,0-0.36047-0.16123-0.36047-0.36047s0.16123-0.36047,0.36047-0.36047    h6.10655c0.19925,0,0.36047,0.16123,0.36047,0.36047S41.59456,29.61381,41.39532,29.61381z"
                    fill="#E7E3E6"
                  />
                </g>

                <g>
                  <path
                    d="M7.38695,9.40017H5.81158c-0.6698,0-1.21283,0.54303-1.21283,1.21283v18.19232    c0,0.66986,0.54303,1.21283,1.21283,1.21283h1.57538c0.66986,0,1.21283-0.54297,1.21283-1.21283V10.613    C8.59978,9.9432,8.05681,9.40017,7.38695,9.40017z"
                    fill="#4E4C4D"
                  />

                  <path
                    d="M7.24993,10.2795H5.9486c-0.30511,0-0.55249,0.24738-0.55249,0.55249v1.30127    c0,0.30518,0.24738,0.55255,0.55249,0.55255h1.30133c0.30511,0,0.55249-0.24738,0.55249-0.55255v-1.30127    C7.80242,10.52688,7.55504,10.2795,7.24993,10.2795z"
                    fill="#D2D2D2"
                  />

                  <path
                    d="M7.24993,13.57009H5.9486c-0.30511,0-0.55249,0.24738-0.55249,0.55249v1.30127    c0,0.30518,0.24738,0.55261,0.55255,0.55261h1.30127c0.30511,0,0.55249-0.24738,0.55249-0.55255v-1.30133    C7.80242,13.81746,7.55504,13.57009,7.24993,13.57009z"
                    fill="#D2D2D2"
                  />

                  <path
                    d="M7.24987,16.86068H5.9486c-0.30511,0-0.55249,0.24738-0.55249,0.55249v1.30133    c0,0.30518,0.24738,0.55255,0.55249,0.55255h1.30133c0.30511,0,0.55249-0.24738,0.55249-0.55255v-1.30127    C7.80242,17.10805,7.55504,16.86068,7.24987,16.86068z"
                    fill="#D2D2D2"
                  />

                  <path
                    d="M7.24993,20.15133H5.9486c-0.30511,0-0.55249,0.24738-0.55249,0.55249v1.30127    c0,0.30518,0.24738,0.55255,0.55249,0.55255h1.30133c0.30511,0,0.55249-0.24738,0.55249-0.55255v-1.30127    C7.80242,20.3987,7.55504,20.15133,7.24993,20.15133z"
                    fill="#D2D2D2"
                  />

                  <path
                    d="M7.24993,23.44191H5.9486c-0.30511,0-0.55249,0.24738-0.55249,0.55249v1.30127    c0,0.30518,0.24738,0.55261,0.55255,0.55261h1.30121c0.30518,0,0.55255-0.24744,0.55255-0.55261V23.9944    C7.80242,23.68929,7.55504,23.44191,7.24993,23.44191z"
                    fill="#D2D2D2"
                  />

                  <path
                    d="M7.24993,26.7325H5.9486c-0.30511,0-0.55249,0.24738-0.55249,0.55249v1.30133    c0,0.30518,0.24738,0.55255,0.55249,0.55255h1.30133c0.30511,0,0.55249-0.24738,0.55249-0.55255v-1.30133    C7.80242,26.97988,7.55504,26.7325,7.24993,26.7325z"
                    fill="#D2D2D2"
                  />
                </g>

                <path
                  d="M19.8386,28.34957l1.53751-1.53751c0.17083-0.17083,0.17083-0.4478,0-0.61863l-1.75513-1.75514   l1.58382-0.65605c0.48512-0.20094,0.42679-0.90604-0.08475-1.02453l-6.10993-1.41537   c-0.38898-0.09011-0.73776,0.25867-0.64765,0.64766l1.41606,6.11286c0.11843,0.51125,0.82297,0.56989,1.02429,0.08525   l0.66203-1.59369l1.75513,1.75514C19.3908,28.5204,19.66777,28.5204,19.8386,28.34957z"
                  fill="#EC6E62"
                />

                <rect
                  fill="#D2D2D2"
                  height="4.33882"
                  width="17.95184"
                  x="16.02405"
                  y="36.7951"
                />

                <path
                  d="M35.04778,41.13393H14.95216c-0.98129,0-1.77678,0.79549-1.77678,1.77678v0   c0,0.98129,0.79549,1.77678,1.77678,1.77678h20.09562c0.98129,0,1.77678-0.79549,1.77678-1.77678v0   C36.82456,41.92942,36.02907,41.13393,35.04778,41.13393z"
                  fill="#E7E3E6"
                />
              </g>
            </svg>
            <h2>Alejo Holmann</h2>

            <h3>Full Stack Web Developer.</h3>
          </div>
          <article>
            <p>
              Residing in Córdoba, at 23 years old, I dedicate myself to the
              development of dynamic web applications. I focus on giving them a
              semi-minimalistic appearance, a good user experience, and a design
              tailored to the requirements. I seek the constant growth and
              development of my technical skills and myself as an individual.
            </p>
          </article>
        </section>
      </div>
    </div>
  ) : (
    <div className={style.main}>
      <div className={style.cardplane}>
        <p>
          Residing in Córdoba, at 23 years old, I dedicate myself to the
          development of dynamic web applications. I focus on giving them a
          semi-minimalistic appearance, a good user experience, and a design
          tailored to the requirements. I seek the constant growth and
          development of my technical skills and myself as an individual.
        </p>
      </div>
    </div>
  );
};

export default About;
