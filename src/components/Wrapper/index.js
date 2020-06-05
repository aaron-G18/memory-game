import React from "react";
import "./style.css";

function Wrapper(props) {
  return <div className="wrapper justify-content-center">{props.children}</div>;
}

export default Wrapper;
