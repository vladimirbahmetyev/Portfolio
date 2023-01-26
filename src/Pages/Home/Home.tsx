import {About, Contacts, Greeting, Skills, WorkExpirience} from "./components";
import React, {FC, useEffect, useState} from "react";
import {useStyle} from "./Home.styles";
import {HashLink} from "react-router-hash-link";
import {Back} from "icons";

export const Home: FC = () => {
	const [scrollPosition, setScrollPosition] = useState(0);
	const handleScroll = () => {
		const position = window.scrollY;
		setScrollPosition(position);
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const {classes} = useStyle({isScrollVisible: scrollPosition > 1000});

	return(
		<div className={classes.appContainer}>
			<div className={classes.contentContainer}>
				<Greeting/>
				<About/>
				<Skills/>
				<WorkExpirience/>
			</div>
			<Contacts/>
			<HashLink to='/#greeting'>
				<Back className={classes.backArrow}/>
			</HashLink>
		</div>
	);
};
