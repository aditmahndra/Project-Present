import "./ShinyText.css";
import "./App.css"

const ShinyText = ({ text, disabled = false, speed = 3, className = "" }) => {
  return (
    <span
      className={`${disabled ? "" : "shiny"} ${className}`}
      style={{ animationDuration: `${speed}s` }}
    >
      {text}
    </span>
  );
};

export default ShinyText;
