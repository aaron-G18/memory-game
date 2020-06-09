import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Instructions from "./components/Instructions";
import Score from "./components/Score";
import bobCharacters from "./characters.json";
import spCharacters from "./southpark.json";
import Card from "./components/Card";




let spCharArr = spCharacters;
let bobCharArr = bobCharacters;
let charArr = bobCharArr;


function shuffle(arr) {
  arr.sort(() => Math.random() - 0.5);
};


class App extends Component {
  // Setting the component's initial state.
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      highscore: 0,
      arr: []
    };

  }
  

  // When the component mounts, shuffle the array the cards pull from.
  componentDidMount() {
    shuffle(charArr);
    this.setState({
      arr: charArr
    })
  }

  // Event handler for when a theme button is clicked.
  handleThemeClick = (event) => {
    event.preventDefault();
    console.log("event target class: ", event.target.id);
    if (event.target.id === "southpark") {
      charArr = spCharArr;
      charArr.map( x => {
        return x.isclicked = "false"
      });
      shuffle(charArr);
      this.setState({
        score: 0,
        arr: charArr
      })
    } else if (event.target.id === "bobs") {
      charArr = bobCharArr;
      shuffle(charArr);
      charArr.map( x => {
        return x.isclicked = "false"
      });
      this.setState({
        score: 0,
        arr: charArr
      })
    }
  };


  // Event handler for when a card is clicked.
  handleCardClick = (event) => {
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
      shuffle(charArr);
      this.setState({
        score: 0,
        arr: charArr
        
      });
      
    } else{
      if (this.state.score === 11) {
        alert("You got them all! Good work!");
        this.setState({
          highscore: 12
        });
        shuffle(charArr);
      this.setState({
        score: 0,
        arr: charArr
        
      });



      } else {
        charArr[index].isclicked = "true";
        shuffle(charArr);
        this.setState({
          score: this.state.score + 1,
          arr: charArr
        });

      }



    }
   };
  

render() {
  return ( <div className="d-flex justify-content-center">
  <Wrapper>
    <Title 
    onClick={this.handleThemeClick}
    >Clicky Memory Game!</Title> 
    <br />
    <Instructions>Click a character and get a point. Don't click the same character twice!</Instructions>
    <br />
    <Score score={this.state.score} highscore={this.state.highscore}></Score>
    {this.state.arr.map( x => (
      <Card
      id={x.id}
      key={x.id}
      name={x.name}
      image={x.image}
      onClick={this.handleCardClick}
    />
    ))}
    </Wrapper>
    </div>
  );
}
}

export default App;