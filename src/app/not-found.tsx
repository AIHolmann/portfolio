import Hamster, { Shape } from "@/components/Hamster/Hamster";
import Link from "next/link";
import "./notfound.css";

const notFound = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "#ffffff",
        backgroundImage:
          "radial-gradient(rgba(12, 12, 12, 0.171) 2px, transparent 0)",
        backgroundSize: "30px 30px",
        backgroundPosition: "-5px -5px",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        alignItems: "center",
        padding: "10px",
      }}
    >
      <div
        style={{
          height: "auto",
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "column",
          justifyContent: "space-evenly",
          alignItems: "flex-start",
        }}
      >
        <h1 style={{ fontSize: "2.2rem", fontWeight: "bold" }}>
          404 - Not found
        </h1>
        <h2 style={{ fontSize: "1.4rem" }}>
          Lost? there is nothing to see here...
        </h2>
        <Link
          href={"/"}
          style={{
            fontSize: "1.6rem",
            marginTop: "1.5rem",
            border: "1px solid #282828",
            padding: "1rem",
            borderRadius: "4px",
          }}
          className="hoverdelLink"
        >
          Go Back!
        </Link>
      </div>
      <div>
        <Hamster />
      </div>
      <Shape />
    </div>
  );
};
export default notFound;
