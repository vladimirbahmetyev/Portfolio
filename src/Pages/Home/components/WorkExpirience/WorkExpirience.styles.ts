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
		position: "relative",
		cursor: "pointer",
		display: "flex",
		svg:{
			marginTop: 80,
		}
	},
	projectPack:{
		mixBlendMode: "lighten",
		zIndex: 2,
	},
	firstSecondProject:{
		display: "flex",
		justifyContent: "space-between",
		gap: 90,
		"div:first-of-type":{
			marginLeft: 250,
			marginTop: 250,
		},
	},
	firstProject:{
		"img:first-of-type":{
			width: 617,
			height: 520,
		},
		"img:last-of-type":{
			width: 560,
			height: 300,
			right: 28,
			top: 100
		}
	},
	secondProject:{
		"img:first-of-type":{
			width: 403,
			height: 348,
		},
		"img:last-of-type":{
			width: 300,
			height: 300,
			right: 50,
			top: 25
		}
	},
	thirdProject:{
		justifyContent:"flex-end",
		marginTop: 30,
		"img:last-of-type":{
			width: 760,
			height: 450,
			right: 25,
			top: 55
		}
	},
	fourthProject:{
		marginTop: 30,
		marginLeft: 120,
		"img:last-of-type":{
			width: 400,
			height: 300,
			left: 110,
			top: 25
		}
	},
	fifthProject:{
		justifyContent:"flex-end",
		marginTop: -70,
		"img:last-of-type":{
			width: 560,
			height: 300,
			right: 30,
			top: 95
		}
	},
	sixthProject:{
		marginTop: -270,
		paddingLeft: 250,
		"img:last-of-type":{
			width: 300,
			height: 300,
			left: 340,
			top: 30
		}
	},
	seventhProject:{
		justifyContent: "flex-end",
		marginTop: 60,
		"img:last-of-type":{
			width: 760,
			height: 450,
			right: 30,
			top: 35
		}
	},
	projectImage:{
		position: "absolute",
		zIndex: 1,
	}
}));
