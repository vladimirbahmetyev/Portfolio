import {About, Contacts, Greeting, Skills, WorkExpirience} from "./components";
import React, {FC} from "react";
import {useStyle} from "./Home.styles";

export const Home: FC = () => {
	const {classes} = useStyle();
	return(
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
};
