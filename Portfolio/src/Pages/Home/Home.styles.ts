import {makeStyles} from "theme";

export const useStyle = makeStyles()((theme) => ({
	appContainer:{
		backgroundImage:"url('/images/background/greeting.webp'), url('/images/background/paperBackground.png')",
		backgroundRepeat: "no-repeat, repeat",
		backgroundColor: theme.palette.black,
		backgroundSize: "contain, contain",
	},
	contentContainer: {
		maxWidth: 1400,
		marginLeft: "auto",
		marginRight: "auto",
	}
}));
