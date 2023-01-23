import {useStyle} from "./RotatingText.styles";
import {FC} from "react";

const label = "* frontend developer * frontend developer ";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const labelArray = [...label];

export const RotatingText:FC = () => {
	const {classes, cx} = useStyle();
	return <div className={classes.labelContainer}>
		{labelArray.map((value, index) => {
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			return <div key={value + index} className={cx(classes[`char-${index}`], classes[""])}>{value}</div>;
		}
		)}
	</div>;
};
