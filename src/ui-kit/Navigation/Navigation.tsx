import { FC } from "react";
import React from "react";
import {useStyle} from "./Navigation.styles";
import {Typography} from "ui-kit";
import { HashLink } from "react-router-hash-link";

interface INavigationProps {
	isWhite?:boolean,
	className?:string
}

export const Navigation: FC<INavigationProps> = ({isWhite = false, className=""}) => {
	const {classes, cx} = useStyle();
	return (
		<div className={cx(classes.navigationContainer, className)}>
			<HashLink to='/#about' smooth>
				<Typography
					variant='h4'
					color={isWhite? "white" : "black"}
					block
					className={classes.item}
				>
			About
				</Typography>
			</HashLink>
			<HashLink to='/#skills' smooth>
				<Typography variant='h4'
					color={isWhite? "white" : "black"}
					block
					className={classes.item}
				>
			Skills
				</Typography>
			</HashLink>
			<HashLink to='/#work' smooth>
				<Typography variant='h4'
					color={isWhite? "white" : "black"}
					block
					className={classes.item}
				>
			Work
				</Typography>
			</HashLink>
			<HashLink to='/#contacts' smooth>
				<Typography
					variant='h4'
					color={isWhite? "white" : "black"}
					block
					className={classes.item}
				>
			Contacts
				</Typography>
			</HashLink>
		</div>);
};
