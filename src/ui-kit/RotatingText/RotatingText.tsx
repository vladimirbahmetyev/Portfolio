import {useStyle} from "./RotatingText.styles";
import {FC} from "react";
import {Typography} from "../Typography";

const label = " * FRONTEND DEVELOPER * FRONTEND DEVELOPER";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const labelArray = [...label];

interface  IRotatingTextProps{
	className?:string
}

export const RotatingText:FC<IRotatingTextProps> = ({className= ""}) => {
	const {classes, cx} = useStyle();
	return <div className={cx(classes.labelContainer, className)}>
		{labelArray.map((value, index) => {
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			return <Typography variant='bodyBold' color='black' key={value + index} className={cx(classes[`char-${index}`], classes[""])}>{value}</Typography>;
		}
		)}
	</div>;
};
