import { useState } from "react";
import style from "./customsummary.module.css";

interface CustomSummaryProps {
  title: string;
}

const CustomSummary: React.FC<CustomSummaryProps> = ({ title }) => {
  const [isAnimated, setIsAnimated] = useState(false);

  const toggleAnimation = () => {
    setIsAnimated(!isAnimated);
  };

  const animationClass = isAnimated ? style.slideIn : style.slideOut;

  return (
    <summary id="spin" onClick={toggleAnimation}>
      <svg
        className={animationClass}
        xmlns="http://www.w3.org/2000/svg"
        width="35"
        height="35"
        viewBox="0 0 12 12"
      >
        <path
          fill="currentColor"
          d="M6 8.825c-.2 0-.4-.1-.5-.2l-3.3-3.3c-.3-.3-.3-.8 0-1.1c.3-.3.8-.3 1.1 0l2.7 2.7l2.7-2.7c.3-.3.8-.3 1.1 0c.3.3.3.8 0 1.1l-3.2 3.2c-.2.2-.4.3-.6.3Z"
        />
      </svg>
      {title}
    </summary>
  );
};

export default CustomSummary;
