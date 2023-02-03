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
					"> img":{
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
		},
		"@media (max-width: 1150px) and (min-width: 821px)":{
			gap: 250
		}
	},
	yearsContainer:{
		display: "flex",
		flexDirection: "column",
		gap: 2,
	},
	img:{
		position: "absolute",
		right: 666,
		top: -66,
		"@media (max-width: 480px)":{
			width: 392,
			right: 150
		},
		"@media (max-width: 820px) and (min-width:481px)":{
			right: 180,
			width: 374
		},
		"@media (max-width: 1400px) and (min-width:1151px)":{
			right: 666,
		},
		"@media (max-width: 1150px) and (min-width:821px)":{
			right: 400,
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
		"@media (max-width: 1150px)":{
			flexDirection: "column-reverse"
		},
		"@media (max-width: 820px)":{
			"> div:first-of-type":{
				"> img":{
					marginLeft: 100
				}
			}
		}
	},
	firstProjectContainer:{
		display: "flex",
		"> img":{
			maxWidth: 60,
			marginTop: 80,
			maxHeight: 40,
		},
		":hover div":{
			"img:first-of-type":{
				transform: "translateY(10%)",
				transitionDuration: "300ms"
			},
			"img:last-of-type":{
				top: "10%",
				transitionDuration: "300ms"
			},
			span:{
				bottom: "25%",
				transitionDuration: "300ms"
			}
		},
		"@media (max-width: 820px)":{
			flexDirection: "column",
			"> img" :{
				marginTop: 0,
				marginLeft: 20
			}
		},
		span: {
			position: "absolute",
			left: "5%",
			bottom: "15%",
			transitionDuration: "300ms"
		}

	},
	firstProjectImage:{
		position: "absolute",
		top: "20%",
		left: "5%",
		width: "90%",
		transitionDuration: "300ms"
	},
	firstProjectPack:{
		width:"auto",
		zIndex: 2,
		"@media (max-width: 820px)":{
			width: "100%"
		},
		transitionDuration: "300ms"
	},
	secondProjectContainer:{
		position: "relative",
		top: 160,
		"> img":{
			maxWidth: 60,
			maxHeight: 40
		},
		span: {
			position: "absolute",
			left: "5%",
			bottom: "5%",
			transitionDuration: "300ms",
			zIndex: 0
		},
		"@media (max-width: 820px)":{
			top: 0,
		},
		"@media (max-width: 1150px) and (min-width: 821px)":{
			top: 0,
			justifyContent: "flex-end",
			display: "flex",
			paddingRight: 100,
			"> img":{
				marginTop: 80
			}
		},
		":hover div":{
			"img:first-of-type":{
				transform: "translateY(10%)",
				transitionDuration: "300ms"
			},
			"img:last-of-type":{
				top: "0%",
				transitionDuration: "300ms"
			},
			span:{
				bottom: "15%",
				transitionDuration: "300ms",
			}
		},
	},
	secondProjectImage:{
		position: "absolute",
		top: "10%",
		left: "5%",
		width: "90%",
		"@media (max-width: 1150px) and (min-width: 821px)":{
			height: "70%",
			width: "auto"
		},
		transitionDuration: "300ms"
	},
	secondProjectPack:{
		zIndex: 2,
		"@media (max-width:820px)":{
			width: "100%"
		},
		transitionDuration: "300ms"
	},
	thirdProjectContainer:{
		display: "flex",
		justifyContent: "center",
		paddingLeft: "20%",
		marginTop: 100,
		"> img":{
			maxWidth: 60,
			marginTop: 80,
			maxHeight: 40
		},
		"@media (max-width: 820px)":{
			flexDirection: "column",
			padding: 0,
			marginTop: 50,
			"> img":{
				marginTop: 0,
				marginLeft: 20
			}
		},
		span: {
			position: "absolute",
			left: "5%",
			bottom: "10%",
			transitionDuration: "300ms",
		},
		"@media (max-width: 1150px) and (min-width: 821px)":{
			padding: 0
		},
		":hover div":{
			"img:first-of-type":{
				transform: "translateX(-10%)",
				transitionDuration: "300ms"
			},
			"img:last-of-type":{
				left: "15%",
				transitionDuration: "300ms"
			},
			span:{
				left: "15%",
				transitionDuration: "300ms",
			}
		},

	},
	thirdProjectImage:{
		position: "absolute",
		top: "10%",
		left: "5%",
		width: "90%",
		"@media (max-width: 820px)":{
			width: "80%"
		},
		"@media (max-width: 1150px) and (min-width: 821px)":{
			width: "auto",
			height: "70%"
		},
		transitionDuration: "300ms",
	},
	thirdProjectPack:{
		width:"auto",
		zIndex: 1,
		"@media (max-width: 820px)":{
			width: "100%"
		},
		"@media (max-width: 1150px) and (min-width: 821px)":{
			width: "80%"
		},
		transitionDuration: "300ms",
	},
	fourthProjectContainer:{
		display: "flex",
		justifyContent: "flex-start",
		marginTop: 100,
		"> img":{
			maxWidth: 60,
			marginTop: 80,
			maxHeight: 40
		},
		"@media (max-width: 820px)":{
			flexDirection: "column",
			padding: 0,
			marginTop: 50,
			"> img":{
				marginTop: 0
			}
		},
		span: {
			position: "absolute",
			left: "5%",
			bottom: "5%",
			transitionDuration: "300ms",
		},
		"@media (max-width: 1150px) and (min-width: 821px)":{
			justifyContent: "flex-end"
		},
		":hover div":{
			"img:first-of-type":{
				transform: "translateY(10%)",
				transitionDuration: "300ms"
			},
			"img:last-of-type":{
				top: "-5%",
				transitionDuration: "300ms"
			},
			span:{
				bottom: "15%",
				transitionDuration: "300ms",
			}
		},

	},
	fourthProjectImage:{
		position: "absolute",
		top: "5%",
		left: "5%",
		width: "80%",
		"@media (max-width: 820px)":{
			width: "75%"
		},
		transitionDuration: "300ms",
	},
	fourthProjectPack:{
		width:"auto",
		zIndex: 1,
		"@media (max-width: 820px)":{
			width: "100%"
		},
		transitionDuration: "300ms",
	},
	fifthProjectContainer:{
		display: "flex",
		justifyContent:"flex-end",
		"> img":{
			maxWidth: 60,
			marginTop: 80,
			maxHeight: 40
		},
		"@media (max-width: 820px)":{
			marginTop: 50,
			flexDirection: "column",
			"> img":{
				marginTop: 0,
				marginLeft: 20
			}
		},
		span: {
			position: "absolute",
			left: "5%",
			bottom: "15%",
			transitionDuration: "300ms"
		},
		"@media (max-width: 1150px) and (min-width: 821px)":{
			justifyContent: "flex-start"
		},
		":hover div":{
			"img:first-of-type":{
				transform: "translateY(10%)",
				transitionDuration: "300ms"
			},
			"img:last-of-type":{
				top: "10%",
				transitionDuration: "300ms"
			},
			span:{
				bottom: "25%",
				transitionDuration: "300ms"
			}
		},
	},
	fifthProjectImage:{
		position: "absolute",
		top: "20%",
		left: "5%",
		width: "90%",
		transitionDuration: "300ms"
	},
	fifthProjectPack:{
		transitionDuration: "300ms",
		width:"auto",
		"@media (max-width: 820px)":{
			width: "100%"
		}
	},
	sixthProjectContainer:{
		position: "relative",
		"> img":{
			maxWidth: 60,
			maxHeight: 40
		},
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
			marginTop: 50
		},
		"@media (max-width: 1150px) and (min-width: 821px)":{
			top: 0,
			display: "flex",
			justifyContent: "center"
		},
		":hover div":{
			"img:first-of-type":{
				transform: "translateY(10%)",
				transitionDuration: "300ms"
			},
			"img:last-of-type":{
				top: "0%",
				transitionDuration: "300ms"
			},
			span:{
				bottom: "15%",
				transitionDuration: "300ms",
			}
		},
	},
	sixthProjectImage:{
		position: "absolute",
		top: "10%",
		left: "1%",
		width: "90%",
		maxWidth: 310,
		transitionDuration: "300ms",
		"@media (max-width:820px)":{
			left:"5%",
			maxWidth: "90%"
		}
	},
	sixthProjectPack:{
		"@media (max-width:820px)":{
			width: "100%"
		},
		transitionDuration: "300ms",
		zIndex: 2
	},
	seventhProjectContainer:{
		"> img":{
			maxWidth: 60,
			marginTop: 80,
			maxHeight: 40
		},
		display: "flex",
		justifyContent: "center",
		paddingLeft: "20%",
		marginTop: -250,
		"@media (max-width: 820px)":{
			flexDirection: "column",
			padding: 0,
			marginTop: 50,
			"> img":{
				marginTop: 0,
				marginLeft: 20
			}
		},
		span: {
			position: "absolute",
			left: "5%",
			bottom: "10%",
			transitionDuration: "300ms",
		},
		"@media (max-width: 1150px) and (min-width: 821px)":{
			marginTop: 0,
			padding: 0,
			justifyContent: "flex-start"
		},
		":hover div":{
			"img:first-of-type":{
				transform: "translateX(-10%)",
				transitionDuration: "300ms"
			},
			"img:last-of-type":{
				left: "15%",
				transitionDuration: "300ms"
			},
			span:{
				left: "15%",
				transitionDuration: "300ms",
			}
		},
	},
	seventhProjectImage:{
		transitionDuration: "300ms",
		position: "absolute",
		top: "10%",
		left: "5%",
		width: "90%",
		"@media (max-width: 820px)":{
			width: "80%"
		},
		"@media (max-width: 1150px) and (min-width: 821px)":{
			width: "auto",
			height: "72%"
		}
	},
	seventhProjectPack:{
		transitionDuration: "300ms",
		width:"auto",
		zIndex: 1,
		"@media (max-width: 820px)":{
			width: "100%"
		},
		"@media (max-width: 1150px) and (min-width: 821px)":{
			width: "80%"
		}
	},
	projectImage:{
		position: "absolute",
		zIndex: 1,
	},
	workTitle:{
		"@media (max-width: 480px)":{
			width: 160,
			height: 33
		},
		"@media (max-width: 820px) and (min-width:481px)":{
			width: 200,
			height: 41
		},
		"@media (max-width: 1150px) and (min-width:821px)":{
			width: 340,
			height: 70
		}
	},
	experience:{
		marginRight: 122,
		"@media (max-width: 480px)":{
			width: 330,
			marginRight: 0,
			marginTop: 0
		},
		"@media (max-width: 820px) and (min-width:481px)":{
			width: 400,
			marginRight: 0,
			marginTop: 0
		},
		"@media (max-width: 1150px) and (min-width:821px)":{
			width: 700
		}
	},
}));
