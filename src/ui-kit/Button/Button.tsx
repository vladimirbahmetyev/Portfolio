import React, {FC} from "react";
import {useStyle} from "./Button.styles";
import {Typography} from "../Typography";

interface IButtonProps {
  children: React.ReactNode,
  className?:string
	onClick?:() => void,
	transparent?: boolean
	onMouseEnter?:() => void,
	onMouseLeave?:() => void,
}

export const Button:FC<IButtonProps> = ({
	children,
	className="",
	onClick,
	transparent= false,
	...rest
}) => {
	const {classes, cx} = useStyle({transparent});
	return <button type='button' className={cx(className, classes.button)} onClick={onClick} {...rest}>
		<Typography variant='h4'>
			{children}
		</Typography>
	</button>;
};
