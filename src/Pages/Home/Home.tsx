import {About, Contacts, Greeting, Skills, WorkExpirience} from "./components";
import React, {FC, useEffect, useState} from "react";
import {useStyle} from "./Home.styles";
import {HashLink} from "react-router-hash-link";
import {Back} from "icons";
import {useScreenWidth} from "shared";
import {motion} from "framer-motion";

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
		<motion.div
			initial={{opacity: 0}}
			animate={{opacity: 1}}
			exit={{opacity: 0}}
			transition={{duration: 0.5}}
			className={classes.appContainer}>
			<div className={classes.contentContainer}>
				<Greeting/>
				<About/>
				<Skills/>
				<WorkExpirience/>
			</div>
			<Contacts/>
			<HashLink to='/#greeting'>
				{isMobile ?
					<img src='/images/backBtn.webp' alt='backbtn' className={classes.backArrowImg}/>
					: <Back className={classes.backArrow}/>}
			</HashLink>
		</motion.div>
	);
};
