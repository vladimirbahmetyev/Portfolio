import {makeStyles} from "theme";

export const useStyle = makeStyles<{isScrollVisible: boolean}>()((theme,{isScrollVisible}) => ({
	appContainer:{
		backgroundImage:"url('/images/background/greeting.webp'), url('/images/background/paperBackground.png')",
		backgroundRepeat: "no-repeat, repeat",
		backgroundColor: theme.palette.black,
		backgroundSize: "contain, contain",
		"@media (max-width: 820px)":{
			backgroundImage:"url('/images/background/glitterMobile.png'), url('/images/background/paperBackground.png')",
			backgroundSize: "100vw 100vh, contain"
		}
	},
	contentContainer: {
		maxWidth: 1400,
		marginLeft: "auto",
		marginRight: "auto",
		"@media (max-width: 1400px)":{
			maxWidth: "100%",
			width: "calc(100% - 40px)",
			margin: 0,
			padding: "0 20px"
		}

	},
	backArrow:{
		position: "fixed",
		top: "40vh",
		right: 54,
		transform: "rotate(90deg)",
		transitionDuration: "300ms",
		opacity: isScrollVisible ? 1 : 0,
	},
	backArrowImg:{
		position: "fixed",
		zIndex: 10,
		bottom: 40,
		right: 40,
		transitionDuration: "300ms",
		opacity: isScrollVisible ? 1 : 0,
	}
}));
