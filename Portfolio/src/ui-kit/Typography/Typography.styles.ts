import {makeStyles} from "theme";
import {TypoColorType, TypoVariantType} from "./Typography";
import {CSSObject} from "tss-react";

export const useStyle = makeStyles<{variant:TypoVariantType, color: TypoColorType}>()((theme, {variant, color})=>{
	const typographyMap: Record<TypoVariantType, CSSObject> = {
		h1:{},
		h2:{},
		h3:{},
		h4:{
			fontSize: 18,
			fontWeight: 400,
			lineHeight: 24
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
		colorfull:{}
	};

	return {
		typo:{
			...typographyMap[variant],
			...colorMap[color],
			fontFamily: "Krona One,Nunito, sans-serif"
		}
	};
});
