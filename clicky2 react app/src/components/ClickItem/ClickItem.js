import React from "react";
import "./ClickItem.css";

const ClickItem = props => (
	<div onClick={() => props.setClicked(props.id)} className = "picture">
		<div className = "picture-container">
			<img src = {props.image} alt = {props.name} />
		</div>
	</div>
	);
export default ClickItem