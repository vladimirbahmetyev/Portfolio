import {makeStyles} from "theme";
import {TypoColorType, TypoVariantType} from "./Typography";
import {CSSObject} from "tss-react";

export const useStyle = makeStyles<{variant:TypoVariantType, color: TypoColorType, block: boolean}>()((theme, {variant, color, block})=>{
	const typographyMap: Record<TypoVariantType, CSSObject> = {
		h1:{
			fontSize: 120,
			lineHeight: "132px",
			fontWeight: 400,
		},
		h2:{},
		h3:{
			fontSize: 24,
			lineHeight: "30px",
			fontWeight: 400
		},
		h4:{
			fontSize: 18,
			fontWeight: 400,
			lineHeight: "24px"
		},
		body:{
			fontSize: 20,
			lineHeight:"27px",
			fontWeight: 400,
		},
		description:{
			fontSize: 14,
			lineHeight: "19px",
			fontWeight: 400
		}
	};

	const colorMap:Record<TypoColorType, CSSObject> ={
		white: {
			color: theme.palette.white
		},
		black:{
			color: theme.palette.black
		},
		colorful:{}
	};

	return {
		typo:{
			...typographyMap[variant],
			...colorMap[color],
			display:block ? "inline-block" : "inline",
			fontFamily: "Krona One,Nunito, sans-serif"
		}
	};
});
