import {makeStyles} from "theme";

export const useStyle = makeStyles()(()=> ({
	aboutContainer:{
		display: "flex",
		flexDirection: "column",
		gap: 90,
		padding: "0 140px",
		marginTop: 100,
		"@media (max-width: 820px)":{
			padding: 0,
			marginTop: 50,
			position: "relative",
		}
	},
	topContainer:{
		display: "flex",
		gap:90,
		width: "100%",
		maxWidth: "100%",
		justifyContent: "center",
	},
	titleWithDescription:{
		display: "flex",
		flexDirection: "column",
		gap: 35,
		maxWidth: 550,
		"@media (max-width: 820px)":{
			marginTop: "70%",
			maxWidth: "100%",
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
		"@media (max-width: 820px) and (min-width: 481px)":{
			maxWidth: "100%",
			width: "100%"
		}
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
		"@media (max-width: 820px)":{
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
		"@media (max-width: 820px)":{
			position: "absolute",
			top: "95%",
			width: 200,
			right: -10
		}
	},
	photo: {
		position: "relative",
		top: -160,
		right: -30,
		"@media (max-width: 820px)":{
			display:"none"
		}
	},
	photoMobile:{
		display:"none",
		"@media (max-width: 820px)":{
			display:"block",
			position: "absolute",
			transform:"rotate(20deg) translateX(-50%)",
			left: "70%",
			zIndex: 1,
			width: "40%",
			top: "10%"
		}
	},

	catInPc:{
		"@media (max-width: 820px)":{
			width: "60%",
			position:"absolute",
			transform:"rotate(-30deg) translateX(-50%)",
			left: "30%",
			zIndex: 2
		}
	},
	aboutTitle:{
		"@media (max-width: 480px)":{
			width: 184,
			zIndex: 2,
		},
		"@media (max-width: 820px) and (min-width: 481px)":{
			width: 360,
			zIndex: 2,
		}
	},
	languageSubcontainer:{
		display: "flex",
		gap: 40,
	}
}));
