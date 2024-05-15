import style from "./btndownload.module.css";
import Link from "next/link";

const BtnDownload = () => {
  return (
    <button className={style.btn}>
      <Link
        className={style.link}
        href="/CVResume_AlejoHolmann.pdf"
        download="CVResume_AlejoHolmann.pdf"
        title="Download my resume"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          height="30px"
          width="30px"
        >
          <g strokeWidth="0" id="SVGRepo_bgCarrier"></g>
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            id="SVGRepo_tracerCarrier"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <g id="Interface / Download">
              {" "}
              <path
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2"
                stroke="#000"
                d="M6 21H18M12 3V17M12 17L17 12M12 17L7 12"
                id="Vector"
              ></path>{" "}
            </g>{" "}
          </g>
        </svg>
        Download Resume
      </Link>
    </button>
  );
};

export default BtnDownload;
