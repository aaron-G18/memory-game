import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Card from "./components/Card";
import Instructions from "./components/Instructions";
import characters from "./characters.json";
import Score from "./components/Score";


let charArr = characters;


function shuffle(arr) {
  arr.sort(() => Math.random() - 0.5);
};


class App extends Component {
  // Setting the component's initial state.
  state = {
    score: 0,
    highscore: 0

  };

  // When the component mounts, shuffle the array the cards pull from.
  componentDidMount() {
    shuffle(charArr);
  }

  // Event handler for when a card is clicked.
  handleClick = (event) => {
    event.preventDefault();
    let thisCharId = event.target.id;
    let index = charArr.findIndex(function(element) { 
      return element.id === parseInt(thisCharId, 10)} );

    if (charArr[index].isclicked === "true") {
      alert("You already clicked that one! Game over, try again!");
      charArr.map( x => {
        return x.isclicked = "false"
      });
      if (this.state.highscore < this.state.score) {
        this.setState({
          highscore: this.state.score
        });
      }
      this.setState({
        score: 0
      });
      shuffle(charArr);
    } else{
      charArr[index].isclicked = "true";
      this.setState({
        score: this.state.score + 1
      });
      shuffle(charArr);
    }
   };
  

render() {
  return ( <div className="d-flex justify-content-center">
  <Wrapper>
    <Title >Clicky Memory Game!</Title> 
    <br />
    <Instructions>Click a character and get a point. Don't click the same character twice!</Instructions>
    <br />
    <Score score={this.state.score} highscore={this.state.highscore}></Score>
    {charArr.map( x => (
      <Card
      id={x.id}
      key={x.id}
      name={x.name}
      image={x.image}
      onClick={this.handleClick}
    />
    ))}
    </Wrapper>
    </div>
  );
}
}

export default App;