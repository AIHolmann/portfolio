import { useState } from "react";
import Modal from "../Modal/Modal";
import style from "./btnModal.module.css";

const BtnModal = () => {
  const [estadoModal, SetEstadoModal] = useState(false);

  return (
    <div>
      <div>
        <button
          onClick={() => SetEstadoModal(!estadoModal)}
          className={style.btn}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2em"
            height="2em"
            viewBox="0 0 14 14"
          >
            <g
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="7" cy="7" r="6.5"></circle>
              <path d="M7 7v3.5"></path>
              <circle cx="7" cy="4.5" r=".5"></circle>
            </g>
          </svg>
        </button>
      </div>
      <Modal estado={estadoModal} cambiarEstado={SetEstadoModal} />
    </div>
  );
};

export default BtnModal;
