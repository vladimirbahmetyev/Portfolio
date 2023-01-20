import {makeStyles} from "theme";

export const useStyle = makeStyles()(()=> ({
	workExperienceContainer:{
		marginTop: 230,
		marginBottom: 300,
		position: "relative"
	},
	titleContainer:{
		display: "flex",
		flexDirection: "column",
		alignItems: "flex-end",
		gap: 24,
		marginBottom: 40,
	},
	rowContainer:{
		display: "flex",
		justifyContent:"center",
		gap: 400
	},
	yearsContainer:{
		display: "flex",
		flexDirection: "column",
		gap: 2
	},
	experience:{
		marginRight: 122,
	},
	img:{
		position: "absolute",
		left: 90,
		top: -66
	},
	projectContainer:{
		display: "flex",
		svg:{
			marginTop: 80,
		}
	},
	projectPack:{
		mixBlendMode: "lighten"
	},
	firstSecondProject:{
		display: "flex",
		justifyContent: "space-between",
		gap: 90,
		"div:first-of-type":{
			marginLeft: 250,
			marginTop: 250,
		},
		"div:last-of-type":{
			img:{
				height: 520,
				width: 617
			}
		}
	},
	thirdProject:{
		justifyContent:"flex-end",
		marginTop: 30,
	},
	fourthProject:{
		marginTop: 30,
		marginLeft: 120,
	},
	fifthProject:{
		justifyContent:"flex-end",
		marginTop: -70,
	},
	sixthProject:{
		marginTop: -270,
		paddingLeft: 250
	},
	seventhProject:{
		justifyContent: "flex-end",
		marginTop: 60
	}
}));
