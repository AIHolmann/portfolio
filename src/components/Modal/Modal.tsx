import style from "./modal.module.css";

interface ModalProps {
  estado: boolean;
  cambiarEstado: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal: React.FC<ModalProps> = ({ estado, cambiarEstado }) => {
  const paleta = ["#2f4f4f", "#7aa1d2", "#dbd4b4", "#cc95c0", "#282828"];

  return (
    <>
      {estado && (
        <div className={style.overlay}>
          <div className={style.contenedormodal}>
            <div className={style.encabezadomodal}>
              <h3>Paleta de colores</h3>
            </div>
            <button
              className={style.botoncerrar}
              onClick={() => cambiarEstado(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
              </svg>
            </button>
            <div className={style.palette}>
              <div className={style.color}>
                <span>{paleta[0]}</span>
              </div>
              <div className={style.color}>
                <span>{paleta[1]}</span>
              </div>
              <div className={style.color}>
                <span>{paleta[2]}</span>
              </div>
              <div className={style.color}>
                <span>{paleta[3]}</span>
              </div>
              <div className={style.color}>
                <span>{paleta[4]}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
