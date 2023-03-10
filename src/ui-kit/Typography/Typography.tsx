import {FC} from "react";
import React from "react";
import {useStyle} from "./Typography.styles";

export type TypoVariantType = "h1" | "h4" | "h2"| "h3" | "body" | "description"| "bodyBold"
export type TypoColorType = "black" | "white"| "colorful"

interface ITypographyProps {
  variant?: TypoVariantType
  color?: TypoColorType
  children?:React.ReactNode,
  block?:boolean
  className?:string
  onClick?:()=> void
}

export const Typography:FC<ITypographyProps> = ({
	variant = "body",
	color = "white", children,
	block = false,
	className="", onClick
}) => {
	const {classes, cx} = useStyle({variant, color, block});
	return <span className={cx(classes.typo, className)} onClick={onClick}>{children}</span>;

};
