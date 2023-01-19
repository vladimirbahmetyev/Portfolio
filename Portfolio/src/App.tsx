import React from "react";
import "./App.css";
import {About, Greeting} from "./components";
import {useStyle} from "./App.styles";


function App() {
	const {classes} = useStyle();
	return (
		<div className={classes.appContainer}>
			<Greeting/>
			<div className={classes.contentContainer}>
				<About/>
			</div>
		</div>
	);
}

export default App;
