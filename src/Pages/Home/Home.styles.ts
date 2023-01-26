import {makeStyles} from "theme";

export const useStyle = makeStyles<{isScrollVisible: boolean}>()((theme,{isScrollVisible}) => ({
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
	},
	backArrow:{
		position: "fixed",
		top: "40vh",
		right: 54,
		transform: "rotate(90deg)",
		transitionDuration: "300ms",
		opacity: isScrollVisible ? 1 : 0,
	}
}));
