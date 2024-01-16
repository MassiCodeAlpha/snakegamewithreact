import react from "react";
export default function Snake(props) {
  return (
    <div>
      {props.snakeDots.map((dot, i) => {
        const style = {
          top: `${dot[0]}%`,
          left: `${dot[1]}%`,
        };
        return <div className="snake-dot" key={i} style={style}></div>;
      })}
    </div>
  );
};
