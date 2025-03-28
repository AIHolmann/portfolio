import Link from "next/link";
import styles from "./aditionalinfo.module.css";

const AditionalInfo = () => {
  return (
    <aside className={styles.aside}>
      <div>
        <h4>educación suplementaria</h4>
      </div>
      <ul>
        <li>
          <Link href={"https://cert.efset.org/91DywE"} target="_blank">
            <h5>Inglés</h5>
            <span>Set Idiomas. 2018.</span>
          </Link>
        </li>
        <li>
          <Link
            href={
              "https://www.linkedin.com/learning/certificates/8632c79f7eaa3a1d4b62f11361b03c598bea87347abb6263f70fdc78b46c2458?trk=share_certificate"
            }
            target="_blank"
          >
            <h5>Fundamentos Profesionales del Desarrollo de Software</h5>
          </Link>
          <span>Microsoft y LinkedIn. 2023.</span>
        </li>
        <li>
          <Link
            href={
              "https://www.linkedin.com/in/alejoholmann/overlay/1743200901758/single-media-viewer/?profileId=ACoAADe-oV0BkvvtF1m-fS_NHCF-vjOkv0FEiqw"
            }
            target="_blank"
          >
            <h5>Fundamentos de Python</h5>
          </Link>
          <span>Santander | Open Academy. 2024.</span>
        </li>
      </ul>
    </aside>
  );
};

export default AditionalInfo;
