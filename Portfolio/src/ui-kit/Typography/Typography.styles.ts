import {makeStyles} from "theme";
import {TypoColorType, TypoVariantType} from "./Typography";
import {CSSObject} from "tss-react";

export const useStyle = makeStyles<{variant:TypoVariantType, color: TypoColorType, block: boolean}>()((theme, {variant, color, block})=>{
	const typographyMap: Record<TypoVariantType, CSSObject> = {
		h1:{},
		h2:{},
		h3:{},
		h4:{
			fontSize: 18,
			fontWeight: 400,
			lineHeight: "24px"
		},
		body:{},
		description:{}
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
