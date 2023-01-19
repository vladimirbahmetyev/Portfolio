import { FC }  from "react";
import React from "react";
import { useStyle } from "./Greeting.styles";
import {Navigation} from "./Navigation";

export const Greeting: FC = () => {
	const {classes} = useStyle();
	return (
		<div className={classes.greetContainer}>
			<Navigation/>
		</div>);
};
