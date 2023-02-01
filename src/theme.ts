// src/theme.ts

import { createMakeAndWithStyles } from "tss-react"; //"tss-react/compat" if your project is using Typescript < 4.4

function useTheme() {
	return {
		"primaryColor": "#32CD32",
		palette:{
			white:"#FEFEFE",
			black:"#0F0F0F",
			gradient:"linear-gradient(90deg, #FF75C3 0%, #FFA647 9.4%, #FFE83F 18.27%, #9FFF5B 29.45%, #70E2FF 39.22%, #CD93FF 48.2%, #CD93FF 53.46%, #70E2FF 64.55%, #9FFF5B 72.65%, #FFE83F 81.94%, #FFA647 90.73%, #FF75C3 100.02%);"

		}
	};
}

export const {
	makeStyles,
	withStyles,
	useStyles
} = createMakeAndWithStyles({ useTheme });
