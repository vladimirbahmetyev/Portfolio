import {makeStyles} from "theme";
import {keyframes} from "tss-react";

const labelLength = 42;
const step =  (360/ labelLength);

export const useStyle= makeStyles()(()=>{
	const angleList = new Array(42).fill(null).map((_, index) => (index * step).toFixed(1));
	const charAnimations = angleList.map((angle, index) => {
		return {
			[`char-${index}`]: {
				"animation": `${keyframes(`
            0% {
							transform:rotate3d(-1,2,0.2, ${+angle}deg) translateZ(180px) rotate(30deg);
            }
            100% {
							transform: rotate3d(-1,2,0.2, ${+angle + 180}deg) translateZ(180px) rotate(25deg);
            }
            `)} 3s infinite linear`,
				position: "absolute"
			}
		};
	}).reduce((acc, curr) => ({...curr, ...acc}),{});
	return {
		labelContainer:{
			position: "relative",
			marginTop: 100,
			marginLeft: 600,
			fontSize: 32,
			fontWeight: "bold",
		},
		...charAnimations
	};
});
