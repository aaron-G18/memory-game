import React from "react";
import "./style.css";

function Instructions(props) {
  return <div className="instructions justify-content-center">{props.children}</div>;
}

export default Instructions;
