import React from "react";
import "./Nav.css";
import Game from "../Game";

const Nav = props => (
	<h1 "Welcome to Jimmy Neutron Clicky!" />
<nav className = "navbar">
<NavMessage score = {props.score} highScore={props.highScore} />

</nav>
	);


export default Nav;

