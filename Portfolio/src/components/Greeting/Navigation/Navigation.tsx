import { FC } from "react";
import React from "react";
import {useStyle} from "./Navigation.styles";
import {Typography} from "ui-kit";

export const Navigation: FC = () => {
	const {classes} = useStyle();
	return (<div className={classes.navigationContainer}>
		<Typography variant='h4' color='black' block className={classes.item}>About</Typography>
		<Typography variant='h4' color='black' block className={classes.item}>Skills</Typography>
		<Typography variant='h4' color='black' block className={classes.item}>Work</Typography>
		<Typography variant='h4' color='black' block className={classes.item}>Contacts</Typography>
	</div>);
};
