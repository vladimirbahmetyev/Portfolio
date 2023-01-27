import { makeStyles } from "theme";

export const useStyle = makeStyles()(() => ({
	greetContainer:{
		paddingTop: 48,
		height:"110vh",
		width: "100%",
		position: "relative",
		"@media (max-width: 480px)":{
			paddingTop: "38px",
			height: "fit-content"
		}
	},
	greetText:{
		marginTop: 140,
		textAlign: "left",
		position: "relative",
		zIndex: 2,
		"@media (max-width: 480px)":{
			marginTop: 63,
		}
	},
	cat:{
		position: "absolute",
		right: 0,
		bottom: -600,
		"@media (max-width: 480px)":{
			width: "435px",
			right: -20
		}
	},
	catContainer:{
		position:"relative",
		zIndex: 1,
	},
	rotatingText:{
		position: "absolute",
		top: 200,
		right: 350,
		zIndex: 2,
		"@media (max-width: 480px)":{
			right: "50%",
			top: 300,
		}
	},
	catEnd:{
		position: "absolute",
		right: 0,
		bottom: -600,
		zIndex: 3,
		"@media (max-width: 480px)":{
			width: 435,
			right: -20
		}
	},
	mouseContainer:{
		marginTop: 250,
		display: "flex",
		alignItems: "center",
		gap: 12
	}
}));
