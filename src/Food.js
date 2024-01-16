import React from "react";
import "./index.css";
export default function Food(props) {
  const style = {
    top: `${props.dot[0]}%`,
    left: `${props.dot[1]}%`,
  };
  return <div className="snake-food" style={style}></div>;
};
