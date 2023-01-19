import React from "react";
import "./App.css";
import { Greeting } from "./components";
import {useStyle} from "./App.styles";


function App() {
	const {classes} = useStyle();
	return (
		<div className={classes.appContainer}>
			<Greeting/>
		</div>
	);
}

export default App;
