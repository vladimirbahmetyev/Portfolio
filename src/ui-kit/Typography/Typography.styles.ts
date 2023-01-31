import {makeStyles} from "theme";
import {TypoColorType, TypoVariantType} from "./Typography";
import {CSSObject} from "tss-react";

export const useStyle = makeStyles<{variant:TypoVariantType, color: TypoColorType, block: boolean}>()((theme, {variant, color, block})=>{
	const typographyMap: Record<TypoVariantType, CSSObject> = {
		h1:{
			fontSize: 120,
			lineHeight: "132px",
			fontWeight: 400,
			fontFamily: "Krona One,Nunito, sans-serif",
			"@media (max-width: 820px) and (min-width: 481px)":{
				fontSize: 60,
				lineHeight: "66px"
			},
			"@media (max-width: 480px)":{
				fontSize: 40,
				lineHeight: "44px"
			}
		},
		h2:{
			fontSize: 60,
			lineHeight: "66px",
			fontWeight: 400,
			fontFamily: "Krona One,Nunito, sans-serif",
			"@media (max-width: 820px)":{
				fontSize: 24,
				lineHeight: "32px"
			}
		},
		h3:{
			fontSize: 24,
			lineHeight: "30px",
			fontWeight: 400,
			fontFamily: "Krona One,Nunito, sans-serif",
			"@media (max-width: 820px)":{
				fontSize: 20,
				lineHeight: "25px"
			}
		},
		h4:{
			fontSize: 18,
			fontWeight: 400,
			lineHeight: "24px",
			fontFamily: "Krona One,Nunito, sans-serif",
			"@media (max-width: 480px)":{
				fontSize: 16,
				lineHeight: "23px"
			},
		},
		body:{
			fontSize: 20,
			lineHeight:"27px",
			fontWeight: 400,
			fontFamily:"Montserrat, sans-serif",
			"@media (max-width: 480px)":{
				fontSize: 16,
				lineHeight: "22px"
			},
		},
		description:{
			fontSize: 14,
			lineHeight: "19px",
			fontWeight: 400,
			fontFamily:"Montserrat, sans-serif"
		},
		bodyBold:{
			fontSize: 30,
			lineHeight: "32px",
			fontWeight: 700,
			fontFamily:"Montserrat, sans-serif"
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
		}
	};
});
