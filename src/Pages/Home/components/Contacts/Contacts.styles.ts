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
		"@media (max-width: 480px)":{
			paddingTop: 120
		}
	},
	description:{
		maxWidth: 600
	},
	contactsTitle:{
		marginBottom: 70,
		"@media (max-width: 480px)":{
			width: 300
		}
	},
	catEnd:{
		position: "absolute",
		right: 0,
		bottom: 0,
		"@media (max-width: 480px)":{
			width: 360,
			zIndex: -1
		}
	},
	formContainer:{
		marginTop: 100,
		width: 600,
		display: "flex",
		flexDirection: "column",
		gap: 60,
		"@media (max-width: 480px)":{
			width: "100%"
		}
	},
	infoContainer:{
		width: "100%",
		display: "flex",
		gap: 20,
		"@media (max-width: 480px)":{
			flexDirection: "column",
			gap: 60,
		}
	},
	inputContainer:{
		flexGrow: 1,
		borderBottom:`1px solid ${theme.palette.white}`,
		paddingBottom: 10,
		"@media (max-width: 480px)":{
			width: "100%"
		}
	},
	button:{
		border: `1px solid ${theme.palette.white}`,
		borderRadius: 50,
		padding: "25px 50px",
		backgroundColor: "transparent",
		cursor: "pointer"

	},
	contentContainer:{
		display: "flex",
		gap: 200,
		"@media (max-width: 480px)":{
			gap: 50,
			flexDirection: "column"
		}
	},
	contactsContainer:{
		paddingTop: 110,
		display:"flex",
		flexDirection: "column",
		gap: 30
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
		"@media (max-width: 480px)":{
			gap: 20
		}
	}
}));
