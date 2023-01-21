import { FC }  from "react";
import React from "react";
import { useStyle } from "./Greeting.styles";
import {Navigation} from "./Navigation";
import {Typography} from "../../../../ui-kit";

export const Greeting: FC = () => {
	const {classes} = useStyle();
	return (
		<div className={classes.greetContainer}>
			<Navigation/>
			<Typography variant='h1' color='black' block className={classes.greetText}>
				HELLO, <br/>I’M VLADIMIR
			</Typography>
			<img src='/images/greetCat.png' alt='Nice cat' className={classes.cat}/>
		</div>);
};
