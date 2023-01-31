import {makeStyles} from "theme";

export const useStyle = makeStyles()(()=> ({
	workExperienceContainer:{
		marginTop: 230,
		marginBottom: 50,
		position: "relative",
		"@media (max-width: 820px)":{
			marginTop: 200,
			div:{
				":nth-child(2n+3)":{
					svg:{
						marginLeft: 100,
					}
				}
			}
		}
	},
	titleContainer:{
		display: "flex",
		flexDirection: "column",
		alignItems: "flex-end",
		gap: 24,
		marginBottom: 40,
		"@media (max-width: 820px)":{
			gap: 0
		}
	},
	rowContainer:{
		display: "flex",
		justifyContent:"center",
		gap: 400,
		"@media (max-width: 820px)":{
			gap: 80
		}
	},
	yearsContainer:{
		display: "flex",
		flexDirection: "column",
		gap: 2,
		"@media (max-width: 820px)":{
		}
	},
	img:{
		position: "absolute",
		left: 90,
		top: -66,
		"@media (max-width: 480px)":{
			width: 392,
			left:"-45%"
		},
		"@media (max-width: 820px) and (min-width:481px)":{
			left: "0",
			width: "70%"
		}
	},
	projectContainer:{
		position: "relative",
		cursor: "pointer",
		display: "flex",
	},
	projectPack:{
		zIndex: 2,
	},
	firstSecondProject:{
		display: "flex",
		justifyContent: "center",
		gap: 90,
		"@media (max-width: 820px)":{
			flexDirection: "column-reverse"
		}
	},
	firstProjectContainer:{
		display: "flex",
		svg:{
			marginTop: 80,
		},
		"@media (max-width: 820px)":{
			flexDirection: "column",
			svg:{
				marginTop: 0
			}
		},
		span: {
			position: "absolute",
			left: "5%",
			bottom: "15%"
		}

	},
	firstProjectImage:{
		position: "absolute",
		top: "20%",
		left: "5%",
		width: "90%",
	},
	firstProjectPack:{
		width:"auto",
		"@media (max-width: 820px)":{
			width: "100%"
		}
	},
	secondProjectContainer:{
		position: "relative",
		top: 160,
		span: {
			position: "absolute",
			left: "5%",
			bottom: "5%"
		},
		"@media (max-width: 820px)":{
			top: 0,
		}
	},
	secondProjectImage:{
		position: "absolute",
		top: "10%",
		left: "5%",
		width: "90%",
	},
	secondProjectPack:{
		"@media (max-width:820px)":{
			width: "100%"
		}
	},
	thirdProjectContainer:{
		display: "flex",
		justifyContent: "center",
		paddingLeft: "20%",
		marginTop: 100,
		svg:{
			marginTop: 80,
		},
		"@media (max-width: 820px)":{
			flexDirection: "column",
			padding: 0,
			marginTop: 50,
			svg:{
				marginTop: 0
			}
		},
		span: {
			position: "absolute",
			left: "5%",
			bottom: "10%"
		}

	},
	thirdProjectImage:{
		position: "absolute",
		top: "10%",
		left: "5%",
		width: "90%",
		"@media (max-width: 820px)":{
			width: "80%"
		}
	},
	thirdProjectPack:{
		width:"auto",
		zIndex: 1,
		"@media (max-width: 820px)":{
			width: "100%"
		}
	},
	fourthProjectContainer:{
		display: "flex",
		justifyContent: "flex-start",
		marginTop: 100,
		svg:{
			marginTop: 80,
		},
		"@media (max-width: 820px)":{
			flexDirection: "column",
			padding: 0,
			marginTop: 50,
			svg:{
				marginTop: 0
			}
		},
		span: {
			position: "absolute",
			left: "5%",
			bottom: "5%"
		}

	},
	fourthProjectImage:{
		position: "absolute",
		top: "5%",
		left: "5%",
		width: "80%",
		"@media (max-width: 820px)":{
			width: "75%"
		}
	},
	fourthProjectPack:{
		width:"auto",
		zIndex: 1,
		"@media (max-width: 820px)":{
			width: "100%"
		}
	},
	fifthProjectContainer:{
		display: "flex",
		justifyContent:"flex-end",
		svg:{
			marginTop: 80,
		},
		"@media (max-width: 820px)":{
			flexDirection: "column",
			svg:{
				marginTop: 0
			}
		},
		span: {
			position: "absolute",
			left: "5%",
			bottom: "15%"
		}

	},
	fifthProjectImage:{
		position: "absolute",
		top: "20%",
		left: "5%",
		width: "90%",
	},
	fifthProjectPack:{
		width:"auto",
		"@media (max-width: 820px)":{
			width: "100%"
		}
	},
	sixthProjectContainer:{
		position: "relative",
		paddingLeft:"20%",
		top: -320,
		span: {
			position: "absolute",
			left: "1%",
			bottom: "5%"
		},
		"@media (max-width: 820px)":{
			top: 0,
			padding: 0,
			maxWidth: "100%",
		}
	},
	sixthProjectImage:{
		position: "absolute",
		top: "10%",
		left: "1%",
		width: "90%",
		maxWidth: 310,
		"@media (max-width:820px)":{
			left:"5%",
			maxWidth: "90%"
		}
	},
	sixthProjectPack:{
		"@media (max-width:820px)":{
			width: "100%"
		}
	},
	seventhProjectContainer:{
		display: "flex",
		justifyContent: "center",
		paddingLeft: "20%",
		marginTop: -250,
		svg:{
			marginTop: 80,
		},
		"@media (max-width: 820px)":{
			flexDirection: "column",
			padding: 0,
			marginTop: 50,
			svg:{
				marginTop: 0
			}
		},
		span: {
			position: "absolute",
			left: "5%",
			bottom: "10%"
		}

	},
	seventhProjectImage:{
		position: "absolute",
		top: "10%",
		left: "5%",
		width: "90%",
		"@media (max-width: 820px)":{
			width: "80%"
		}
	},
	seventhProjectPack:{
		width:"auto",
		zIndex: 1,
		"@media (max-width: 820px)":{
			width: "100%"
		}
	},
	projectImage:{
		position: "absolute",
		zIndex: 1,
	},
	workTitle:{
		"@media (max-width: 480px)":{
			width: 160
		},
		"@media (max-width: 820px) and (min-width:481px)":{
			width: 290
		}
	},
	experience:{
		marginRight: 122,
		"@media (max-width: 480px)":{
			width: 330,
			marginRight: 0,
			marginTop: -40
		},
		"@media (max-width: 820px) and (min-width:481px)":{
			width: 500
		}
	},
}));
