import style from "./arrowdown.module.css";

const Arrowdown = () => {
  return (
    <div className={style.container}>
      <a href="#mainsection" className={style.a}>
        <span>scroll down</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="40px"
          height="40px"
          viewBox="0 0 32.00 32.00"
          version="1.1"
          fill="#000000"
          className={style.arrowdown}
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0" />

          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke="#CCCCCC"
            stroke-width="0.704"
          />

          <g id="SVGRepo_iconCarrier">
            {" "}
            <title>arrow-down-square</title>{" "}
            <desc>Created with Sketch Beta.</desc> <defs> </defs>{" "}
            <g
              id="Page-1"
              stroke="none"
              stroke-width="1"
              fill="none"
              fill-rule="evenodd"
            >
              {" "}
              <g
                id="Icon-Set"
                transform="translate(-568.000000, -983.000000)"
                fill="#000000"
              >
                {" "}
                <path
                  d="M598,1011 C598,1012.1 597.104,1013 596,1013 L572,1013 C570.896,1013 570,1012.1 570,1011 L570,987 C570,985.896 570.896,985 572,985 L596,985 C597.104,985 598,985.896 598,987 L598,1011 L598,1011 Z M596,983 L572,983 C569.791,983 568,984.791 568,987 L568,1011 C568,1013.21 569.791,1015 572,1015 L596,1015 C598.209,1015 600,1013.21 600,1011 L600,987 C600,984.791 598.209,983 596,983 L596,983 Z M589.121,999.465 L585,1003.59 L585,993 C585,992.447 584.553,992 584,992 C583.448,992 583,992.447 583,993 L583,1003.59 L578.879,999.465 C578.488,999.074 577.855,999.074 577.465,999.465 C577.074,999.855 577.074,1000.49 577.465,1000.88 L583.121,1006.54 C583.361,1006.78 583.689,1006.85 584,1006.79 C584.311,1006.85 584.639,1006.78 584.879,1006.54 L590.535,1000.88 C590.926,1000.49 590.926,999.855 590.535,999.465 C590.146,999.074 589.512,999.074 589.121,999.465 L589.121,999.465 Z"
                  id="arrow-down-square"
                >
                  {" "}
                </path>{" "}
              </g>{" "}
            </g>{" "}
          </g>
        </svg>
      </a>
    </div>
  );
};
export default Arrowdown;
