import React from "react";
import "./style.css";

function Title(props) {
  return (
    <div className="title-container">
      <h1 className="title">{props.children}</h1>
      <div className="button-container">
        <button onClick={props.onClick} type="button" id="southpark">Southpark</button>
        <button onClick={props.onClick} type="button" id="bobs">Bob's Burgers</button>
      </div>
    </div>
  );
}

export default Title;
