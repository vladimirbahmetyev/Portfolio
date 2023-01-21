import { FC } from "react";
import React from "react";
import {useStyle} from "./Navigation.styles";
import {Typography} from "ui-kit/index";
import { HashLink } from "react-router-hash-link";

export const Navigation: FC = () => {
	const {classes} = useStyle();
	return (
		<div className={classes.navigationContainer}>
			<HashLink to='/#about' smooth>
				<Typography
					variant='h4'
					color='black'
					block
					className={classes.item}
				>
			About
				</Typography>
			</HashLink>
			<HashLink to='/#skills' smooth>
				<Typography variant='h4'
					color='black'
					block
					className={classes.item}
				>
			Skills
				</Typography>
			</HashLink>
			<HashLink to='/#work' smooth>
				<Typography variant='h4'
					color='black'
					block
					className={classes.item}
				>
			Work
				</Typography>
			</HashLink>
			<HashLink to='/#contacts' smooth>
				<Typography
					variant='h4'
					color='black'
					block
					className={classes.item}
				>
			Contacts
				</Typography>
			</HashLink>
		</div>);
};
