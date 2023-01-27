import {makeStyles} from "theme";

export const useStyle = makeStyles<{isScrollVisible: boolean}>()((theme,{isScrollVisible}) => ({
	appContainer:{
		backgroundImage:"url('/images/background/greeting.webp'), url('/images/background/paperBackground.png')",
		backgroundRepeat: "no-repeat, repeat",
		backgroundColor: theme.palette.black,
		backgroundSize: "contain, contain",
		"@media (max-width: 480px)":{
			padding: "0 20px",
			backgroundSize: "cover"
		}
	},
	contentContainer: {
		maxWidth: 1400,
		marginLeft: "auto",
		marginRight: "auto",
		"@media (max-width:480px)":{
			maxWidth: "100%",
			width: "100%",
			margin: 0,
		}

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
