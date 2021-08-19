import { useEffect, useState } from "react";
import "./ProgressBar.css";

const ProgressBar = ({ done, name }) => {
  const [style, setStyle] = useState({});

  useEffect(() => {
    setTimeout(() => {
      const newStyle = {
        opacity: 1,
        width: `${done}%`,
      };

      setStyle(newStyle);
    }, 200);
  }, [done]);

  return (
    <>
      <div className="progress-info">
        <span>{name}</span> <span>{done}%</span>
      </div>
      <div className="progress">
        <div className="progress-done" style={style}></div>
      </div>
    </>
  );
};

export default ProgressBar;
