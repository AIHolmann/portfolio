import style from "./footer.module.css";

const Footer = () => {
  const ahora = new Date();
  const añoActual = ahora.getFullYear();

  return (
    <footer className={style.footer}>
      <section>
        <span>
          © {añoActual}. Todos los derechos reservados | Diseño y desarrollo{" "}
          <a href="mailto:alejoholmann99@gmail.com" className={style.alejo}>
            Alejo Holmann
          </a>
        </span>
      </section>
    </footer>
  );
};

export default Footer;
