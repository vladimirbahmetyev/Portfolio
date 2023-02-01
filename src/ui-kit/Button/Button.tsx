import React, {FC} from "react";
import {useStyle} from "./Button.styles";
import {Typography} from "../Typography";

interface IButtonProps {
  children: React.ReactNode,
  className?:string
	onClick?:() => void,
	transparent?: boolean
}

export const Button:FC<IButtonProps> = ({
	children,
	className="",
	onClick,
	transparent= false
}) => {
	const {classes, cx} = useStyle({transparent});
	return <button type='button' className={cx(className, classes.button)} onClick={onClick}>
		<Typography variant='h4'>
			{children}
		</Typography>
	</button>;
};
