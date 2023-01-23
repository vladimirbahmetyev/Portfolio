import {useStyle} from "./RotatingText.styles";
import {FC} from "react";

const label = "* frontend developer * frontend developer ";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const labelArray = [...label];

export const RotatingText:FC = () => {
	const {classes} = useStyle();
	return <div className={classes.labelContainer}>
		{labelArray.map((value, index) => {
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			return <div key={value} className={classes[`char-${index}`]}>{value}</div>;
		}
		)}
	</div>;
};
