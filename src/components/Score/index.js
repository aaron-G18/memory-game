import React from "react";
import "./style.css";

function Score(props) {
  return (
    <div className="score">
  <span>Score: {props.score}</span><span className="high-score">High Score: {props.highscore}</span>
  </div>
  );
}

export default Score;
