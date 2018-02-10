import React from "react";
import "./ClickItem.css";

const ClickItem = ({setClicked, id, image }) => (
	<div onClick={() => setClicked(id)} className = "picture">
		<div className = "picture-container">
			<img src = {image}  />
		</div>
	</div>
	);
export default ClickItem