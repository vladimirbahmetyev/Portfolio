import React from "react";
import "./App.css";
import {About, Contacts, Greeting, Skills, WorkExpirience} from "./components";
import {useStyle} from "./App.styles";


function App() {
	const {classes} = useStyle();
	return (
		<div className={classes.appContainer}>
			<div className={classes.contentContainer}>
				<Greeting/>
				<About/>
				<Skills/>
				<WorkExpirience/>
			</div>
			<Contacts/>
		</div>
	);
}

export default App;
