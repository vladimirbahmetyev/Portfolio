import React, {FC} from "react";
import {useStyle} from "./Button.styles";
import {Typography} from "../Typography";

interface IButtonProps {
  children: React.ReactNode,
  className?:string
}

export const Button:FC<IButtonProps> = ({children, className=""}) => {
	const {classes, cx} = useStyle();
	return <button type='button' className={cx(className, classes.button)}>
		<Typography variant='h4'>
			{children}
		</Typography>
	</button>;
};
