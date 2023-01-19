import { FC }  from "react";
import React from "react";
import { useStyle } from "./Greeting.styles";
import {Typography} from "ui-kit";
import {Navigation} from "./Navigation";

export const Greeting: FC = () => {
	const {classes} = useStyle();
	return <div className={classes.greetContainer}>
		<Navigation/>
		<Typography>
			some content
		</Typography>

		t</div>;
};
