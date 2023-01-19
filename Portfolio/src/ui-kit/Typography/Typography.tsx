import {FC} from "react";
import React from "react";
import {useStyle} from "./Typography.styles";

export type TypoVariantType = "h1" | "h4" | "h2"| "h3" | "body" | "description"
export type TypoColorType = "black" | "white"| "colorfull"

interface ITypographyProps {
  variant?: TypoVariantType
  color?: TypoColorType
  children?:React.ReactNode
}

export const Typography:FC<ITypographyProps> = ({variant = "body", color = "white", children}) => {
	const {classes} = useStyle({variant, color});
	return <span className={classes.typo}>{children}</span>;

};
