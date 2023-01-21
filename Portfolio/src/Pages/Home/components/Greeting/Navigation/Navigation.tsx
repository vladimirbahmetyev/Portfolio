import { FC } from "react";
import React from "react";
import {useStyle} from "./Navigation.styles";
import {Typography} from "ui-kit";

export const Navigation: FC = () => {
	const {classes} = useStyle();
	return (<div className={classes.navigationContainer}>
		<a href='#about'><Typography variant='h4' color='black' block className={classes.item}>About</Typography></a>
		<a href='#skills'><Typography variant='h4' color='black' block className={classes.item}>Skills</Typography></a>
		<a href='#work'><Typography variant='h4' color='black' block className={classes.item}>Work</Typography></a>
		<a href='#contacts'><Typography variant='h4' color='black' block className={classes.item}>Contacts</Typography></a>
	</div>);
};
