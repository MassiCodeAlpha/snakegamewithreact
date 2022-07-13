import React from "react";
import "./index.css";
export default (props) => {
  const style = {
    top: `${props.dot[0]}%`,
    left: `${props.dot[1]}%`,
  };
  console.log(props.dot);
  return <div className="snake-food" style={style}></div>;
};
