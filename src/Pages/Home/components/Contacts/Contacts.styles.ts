import {makeStyles} from "theme";

export const useStyle = makeStyles()((theme)=>({
	container:{
		backgroundImage:"url('/images/background/contacts.png')",
		paddingTop: 200,
		paddingBottom: 150,
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		mixBlendMode: "lighten",
		paddingLeft:"calc((100% - 1400px)/2)",
		paddingRight:"calc((100% - 1400px)/2)",
		position: "relative",
		"@media (max-width: 820px)":{
			padding:"120px 20px 60px 20px"
		}
	},
	description:{
		maxWidth: 600
	},
	contactsTitle:{
		marginBottom: 70,
		"@media (max-width: 480px)":{
			width: 300,
			marginBottom: 0
		},
		"@media (min-width: 481px) and (max-width: 820px)":{
			width: 450,
			marginBottom: 0
		}
	},
	catEnd:{
		position: "absolute",
		right: 0,
		bottom: 0,
		"@media (max-width: 820px)":{
			width: 360,
			zIndex: -1
		}
	},
	formContainer:{
		marginTop: 100,
		width: 600,
		display: "flex",
		flexDirection: "column",
		gap: 46,
		position: "relative",
		"@media (max-width: 820px)":{
			width: "100%",
			marginTop: 60
		}
	},
	animationTrack:{
		path:{
			stroke: "url(#g)",
			strokeWidth: 2,
			strokeDasharray: "50% 2000%",
			// strokeDashoffset: 100,
			fill:"none"
		},
		position: "absolute",
		top: "14%",

	},
	infoContainer:{
		width: "100%",
		display: "flex",
		gap: 20,
		"@media (max-width: 820px)":{
			flexDirection: "column",
			gap: 60,
		}
	},
	inputContainer:{
		borderBottom:`1px solid ${theme.palette.white}`,
		paddingBottom: 10,
		"@media (max-width: 820px)":{
			width: "100%"
		}
	},
	button:{
		marginTop: 9
	},
	contentContainer:{
		display: "flex",
		gap: 200,
		"@media (max-width: 820px)":{
			gap: 50,
			flexDirection: "column"
		}
	},
	contactsContainer:{
		paddingTop: 110,
		display:"flex",
		flexDirection: "column",
		gap: 30,
		"@media (max-width: 820px)":{
			paddingTop: 30
		}
	},
	contact:{
		display:"flex",
		flexDirection: "column",
		gap: 10
	},
	socialContainer:{
		display:"flex",
		gap: 40,
		svg:{
			cursor: "pointer"
		},
		"@media (max-width: 820px)":{
			gap: 20
		}
	}
}));

