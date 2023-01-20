import React from "react";
import "./App.css";
import {About, Greeting, Skills} from "./components";
import {useStyle} from "./App.styles";


function App() {
	const {classes} = useStyle();
	return (
		<div className={classes.appContainer}>
			<div className={classes.contentContainer}>
				<Greeting/>
				<About/>
				<Skills/>
			</div>
		</div>
	);
}

export default App;
