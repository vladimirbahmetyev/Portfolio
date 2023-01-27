import {makeStyles} from "theme";

export const useStyle = makeStyles()(()=> ({
	aboutContainer:{
		display: "flex",
		flexDirection: "column",
		gap: 90,
		padding: "0 140px",
		marginTop: 100,
		"@media (max-width: 480px)":{
			padding: 0,
			marginTop: 650,
			position: "relative"
		}
	},
	topContainer:{
		display: "flex",
		gap:90,
		width: "100%",
		justifyContent: "center"
	},
	titleWithDescription:{
		display: "flex",
		flexDirection: "column",
		gap: 35,
		maxWidth: 550,
		"@media (max-width: 480px)":{
			marginTop: 370,
			gap: 20
		}
	},
	bottomContainer:{
		display: "flex",
		width: "100%",
		justifyContent: "space-around",
		alignItems: "flex-start",
	},
	knowledgeContainer:{
		display: "flex",
		flexDirection: "column",
		gap: 40,
		maxWidth: 530,
	},
	educationContainer:{
		display: "flex",
		flexDirection: "column",
		gap: 4
	},

	educationTitleContainer:{
		display: "flex",
		gap: 16
	},
	itemContainer:{
		display: "flex",
		gap: 40,
		"@media (max-width: 480px)":{
			flexDirection: "column",
			gap: 20
		}
	},
	languageContainer:{
		display: "flex",
		flexDirection: "column",
		gap:2
	},
	starContainer:{
		display: "flex",
		gap: 9,
		marginTop: 10,
	},
	tap:{
		position: "relative",
		top: -75,
		"@media (max-width: 480px)":{
			position: "absolute",
			top: "100%"
		}
	},
	photo: {
		position: "relative",
		top: -160,
		right: -30,
		"@media (max-width: 480px)":{
			position: "absolute",
			right: -35,
			top: 0,
			width: 247,
			zIndex: 1,
			transform: "rotate(20deg)"
		}
	},
	catInPc:{
		"@media (max-width: 480px)":{
			width: 360,
			position:"absolute",
			transform:"rotate(-30deg)",
			left: -85
		}
	},
	aboutTitle:{
		"@media (max-width: 480px)":{
			width: 184,
			zIndex: 2,
		}
	}

}));
