import {About, Contacts, Greeting, Skills, WorkExpirience} from "./components";
import React, {FC, useEffect, useState} from "react";
import {useStyle} from "./Home.styles";
import {HashLink} from "react-router-hash-link";
import {Back} from "icons";
import {useScreenWidth} from "../../shared";

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
	const width = useScreenWidth();
	const isMobile = width <= 480;
	const {classes} = useStyle({isScrollVisible: scrollPosition > (isMobile ? 500 : 1000)});

	return(
		<div className={classes.appContainer}>
			<div className={classes.contentContainer}>
				<Greeting/>
				<About/>
				<Skills/>
				{/*<WorkExpirience/>*/}
			</div>
			{/*<Contacts/>*/}
			{/*<HashLink to='/#greeting'>*/}
			{/*	{isMobile ?*/}
			{/*		<img src='/images/backBtn.png' alt='backbtn' className={classes.backArrowImg}/>*/}
			{/*		: <Back className={classes.backArrow}/>}*/}
			{/*</HashLink>*/}
		</div>
	);
};
