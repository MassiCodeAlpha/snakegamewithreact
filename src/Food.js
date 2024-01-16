import React from "react";
import "./index.css";
export default const  Food=(props) => {
  const style = {
    top: `${props.dot[0]}%`,
    left: `${props.dot[1]}%`,
  };
  return <div className="snake-food" style={style}></div>;
};
