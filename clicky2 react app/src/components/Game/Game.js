import React, { Component } from "react";
import Nav from "../Nav";
import Header from "../Header";
import Container from "../Container";
import ClickItem from "../ClickItem";
import Footer from "../Footer";
import data from "data.json";

class Game extends Component {
	state = {
		matches,
		score: 0,
		highScore:0
		clickMessage
	};
clicky = id => {
	//copies the state matches array
const matches = this.state.matches;
// filter function to set id of picture
const clicked = matches.filter(match => match.id === id); 
// check if clicked already with ids in json
if (clicked[0].clicked = true){
	score = 0;
	NavMessage = "You Lose!!"
// for loop to make all image clicked properties false
for (i=0; i<matches.length; i++){
	matches[i].clicked = false;
}
// reset the application
	this.setState({newGameMessage});
	this.setState({score});
	// else statement for correct answer
}else{
	// change the state to true for clicked
	clicked[0].clicked=true;
	score++;

	// to set high score
	if (score>highScore){
		highScore = score;
		this.setState({ highScore });
	}

	// shuffle array to mix up the pictures
matches.sort(function(a,b){return 0.5 - Math.random()});

// change the state in the new mixed array
this.setState({ matches });
this.setState({ score });

}
};

// render the game to the container here






export default Game;
