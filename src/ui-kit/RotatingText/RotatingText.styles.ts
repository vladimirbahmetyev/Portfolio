import {makeStyles} from "theme";

const labelLength = 42;
const step =  (360/ labelLength);

export const useStyle= makeStyles()(()=>{
	const angleList = new Array(42).fill(null).map((_, index) => (index * step).toFixed(1));
	const angleStyles = angleList.map((angle, index) => ({[`char-${index}`]:{
		transform: `rotate3d(0,1,0.2, ${angle}deg) translateZ(180px)`,
		position:"absolute"
	}})).reduce((acc, curr) => ({...curr, ...acc}),{});

	return {
		labelContainer:{
			position: "relative",
			marginLeft: 300,
			fontSize: 32,
			fontWeight: "bold",
		},
		...angleStyles,
	};
});
