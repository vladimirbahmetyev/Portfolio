import { FC }  from "react";
import React from "react";
import { useStyle } from "./Greeting.styles";
import {Typography, Navigation, RotatingText} from "ui-kit";

export const Greeting: FC = () => {
	const {classes} = useStyle();
	return (
		<div className={classes.greetContainer}>
			<Navigation/>
			<Typography variant='h1' color='black' block className={classes.greetText}>
				HELLO, <br/>I’M VLADIMIR
			</Typography>
			<RotatingText/>
			<img src='/images/greetCat.png' alt='Nice cat' className={classes.cat}/>
		</div>);
};
