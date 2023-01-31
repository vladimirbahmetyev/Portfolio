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
							transform:rotate3d(-0.44,0.8,0.4, ${+angle}deg) translate3d(0,0, 180px) rotate(30deg);
            }
            50% {
            	transform: rotate3d(-0.44,0.8,0.4, ${+angle + 90}deg) translateZ(180px) rotate(30deg);
            }
            100% {
							transform: rotate3d(-0.44,0.8,0.4, ${+angle + 180}deg) translateZ(180px) rotate(30deg);
            }
            `)} 3s infinite linear`,
				position: "absolute",
			}
		};
	}).reduce((acc, curr) => ({...curr, ...acc}),{});
	return {
		labelContainer:{
			fontSize: 30,
			fontWeight: "bold",
		},
		...charAnimations
	};
});
