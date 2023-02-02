import { makeStyles } from "theme";

export const useStyle = makeStyles()(() => ({
	greetContainer:{
		paddingTop: 48,
		height:"110vh",
		width: "100%",
		position: "relative",
		"@media (max-width: 820px)":{
			paddingTop: "38px",
			height: "100vh"
		}
	},
	greetText:{
		marginTop: 140,
		textAlign: "left",
		position: "relative",
		zIndex: 2,
		"@media (max-width: 820px)":{
			marginTop: 63,
		},
		"@media (min-width: 821px) and (max-width: 1399px)":{
			marginTop: 50
		}
	},
	cat:{
		position: "absolute",
		right: 0,
		bottom: -600,
		"@media (max-width: 820px)":{
			right: "50%",
			transform: "translateX(50%)",
			height: "100%",
			top: 0
		},
		"@media (min-width: 821px) and (max-width: 1399px)":{
			right: "20%",
			transform: "translateX(50%)",
			height: 400,
			top: -250
		}
	},
	catContainer:{
		position:"relative",
		zIndex: 1,
		"@media (max-width: 820px)":{
			minHeight: "60vh"
		},

	},
	rotatingText:{
		position: "absolute",
		top: 200,
		right: 350,
		zIndex: 2,
		"@media (max-width: 820px)":{
			right: "50%",
			transform:"translateX(50%)",
			top: "58%"
		},
		"@media (min-width: 821px) and (max-width: 1399px)":{
			right: "18%",
			transform: "scale(0.6) translateX(50%)",
			top: -31
		}
	},
	catEnd:{
		position: "absolute",
		right: 0,
		bottom: -600,
		zIndex: 3,
		"@media (max-width: 820px)":{
			right: "50%",
			transform: "translateX(50%)",
			height: "100%",
			top: 0
		},
		"@media (min-width: 821px) and (max-width: 1399px)":{
			right: "20%",
			transform: "translateX(50%)",
			height: 400,
			top: -250
		}
	},
	mouseContainer:{
		marginTop: 250,
		display: "flex",
		alignItems: "center",
		gap: 12
	}
}));
