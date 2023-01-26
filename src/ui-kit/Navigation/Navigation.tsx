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
			<div className={classes.itemContainer}>
				<HashLink to='/#about' smooth>
					<Typography
						variant='h4'
						color={isWhite? "white" : "black"}
						block
					>
			About
					</Typography>
				</HashLink>
			</div>
			<div className={classes.itemContainer}>
				<HashLink to='/#skills' smooth>
					<Typography variant='h4'
						color={isWhite? "white" : "black"}
						block
					>
			Skills
					</Typography>
				</HashLink>
			</div>
			<div className={classes.itemContainer}>
				<HashLink to='/#work' smooth>
					<Typography variant='h4'
						color={isWhite? "white" : "black"}
						block
					>
			Work
					</Typography>
				</HashLink>
			</div>
			<div className={classes.itemContainer}>
				<HashLink to='/#contacts' smooth>
					<Typography
						variant='h4'
						color={isWhite? "white" : "black"}
						block
					>
			Contacts
					</Typography>
				</HashLink>
			</div>
		</div>);
};
