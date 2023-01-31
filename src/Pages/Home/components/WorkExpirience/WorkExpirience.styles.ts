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
	experience:{
		marginRight: 122,
		"@media (max-width: 820px)":{
			width: 330,
			marginRight: 0,
			marginTop: -40
		}
	},
	img:{
		position: "absolute",
		left: 90,
		top: -66,
		"@media (max-width: 820px)":{
			width: 392,
			left:"-45%"
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
	fourthProject:{
		marginTop: 30,
		marginLeft: 180,
		div:{
			position: "relative",
			minHeight: 400,
			":hover":{
				"img:first-of-type":{
					top: 75,
					transitionDuration: "300ms"
				},
				"img:last-of-type":{
					top: 0,
					transitionDuration: "300ms"
				},
				span:{
					top: 315,
					transitionDuration: "300ms"
				}
			}
		},
		"img:first-of-type":{
			minWidth: 400,
			minHeight: 300,
			top: 25,
			left: 0,
			zIndex: 2,
			position: "absolute",
			transitionDuration: "300ms"
		},
		"img:last-of-type":{
			width: 400,
			height: 300,
			left: 40,
			top: 50,
			zIndex: 1,
			position: "absolute",transitionDuration: "300ms"
		},
		span:{
			left: 40,
			top: 365,
			transitionDuration: "300ms",
			position: "absolute"
		},
		"@media (max-width: 820px)":{
			margin: 0,
			width: "100%",
			div:{
				minHeight: 250
			},
			"img:first-of-type":{
				minWidth: 0,
				minHeight: 0,
				width:"105%",
				left: -10,
				top: 0,
				position: "absolute",
				transitionDuration: "300ms",
			},
			"img:last-of-type":{
				width:"80%",
				height: "auto",
				minWidth: 0,
				minHeight: 0,
				left: 10,
				top: 40,
				transitionDuration: "300ms",
			},
			span: {
				position: "absolute",
				left: 170,
				top: -35,
				transitionDuration: "300ms",
			},
		}
	},
	fifthProject:{
		div:{
			position: "relative",
			minHeight: 400,
			":hover":{
				"img:first-of-type":{
					top: 50,
					transitionDuration: "300ms",
				},
				"img:last-of-type":{
					top: 40,
					transitionDuration: "300ms"
				},
				span:{
					top: 355,
					transitionDuration: "300ms"
				}
			}
		},
		justifyContent:"center",
		marginLeft: 250,
		marginTop: -40,
		"img:last-of-type":{
			minWidth: 560,
			minHeight: 300,
			position: "absolute",
			top: 90,
			left: 30,
			transitionDuration: "300ms"
		},
		"img:first-of-type":{
			position: "absolute",
			top: 0,
			transitionDuration: "300ms"
		},
		span: {
			position: "absolute",
			transitionDuration: "300ms",
			left: 30,
			top: 405,
		},
		"@media (max-width: 820px)":{
			margin: 0,
			width: "100%",
			div:{
				minHeight: 250
			},
			"img:first-of-type":{
				minWidth: 0,
				minHeight: 0,
				width:"105%",
				left: -10,
				top: 0,
				position: "absolute",
				transitionDuration: "300ms",
			},
			"img:last-of-type":{
				width:"94%",
				height: "auto",
				minWidth: 0,
				minHeight: 0,
				left: 10,
				top: 60,
				transitionDuration: "300ms",
			},
			span: {
				position: "absolute",
				left: 70,
				top: -35,
				transitionDuration: "300ms",
			},
		}
	},
	sixthProject:{
		marginTop: -140,
		justifyContent:"center",
		marginRight: 700,
		minHeight: 400,
		div:{
			position: "relative",
			":hover":{
				"img:last-of-type":{
					top: -20,
					transitionDuration: "300ms",
				},
				"img:first-of-type":{
					top: 50,
					transitionDuration: "300ms",
				},
				span:{
					transitionDuration: "300ms",
					top: 295
				}
			}
		},

		"img:last-of-type":{
			width: 300,
			height: 300,
			position: "absolute",
			transitionDuration: "300ms",
			left: 20,
			top: 30,
		},
		"img:first-of-type":{
			position: "absolute",
			transitionDuration: "300ms",
			top: 0
		},
		span: {
			top: 345,
			position: "absolute",
			left: 20,
			transitionDuration: "300ms",
		},
		"@media (max-width: 820px)":{
			margin: 0,
			width: "100%",
			div:{
				minHeight: 250
			},
			"img:first-of-type":{
				minWidth: 0,
				minHeight: 0,
				width:"105%",
				left: -10,
				top: 0,
				position: "absolute",
				transitionDuration: "300ms",
			},
			"img:last-of-type":{
				width:"100%",
				height: "auto",
				minWidth: 0,
				minHeight: 0,
				left: 0,
				top: 40,
				transitionDuration: "300ms",
			},
			span: {
				position: "absolute",
				left: 170,
				top: -35,
				transitionDuration: "300ms",
			},
		}
	},
	seventhProject:{
		justifyContent: "center",
		marginTop: 60,
		minHeight: 800,
		marginLeft: -100,
		div:{
			position: "relative",
			":hover":{
				"img:last-of-type":{
					transitionDuration: "300ms",
					left: 75,
				},
				"img:first-of-type":{
					transitionDuration: "300ms",
					left: -50
				},
				span:{
					transitionDuration: "300ms",
					left: 75,
				}
			}
		},
		"img:last-of-type":{
			width: 760,
			height: 450,
			position: "absolute",
			top: 40,
			left: 25,
			transitionDuration: "300ms",

		},
		"img:first-of-type":{
			position: "absolute",
			transitionDuration: "300ms",
			left: 0,
		},
		span:{
			position: "absolute",
			transitionDuration: "300ms",
			top: 505,
			left: 25
		},
		"@media (max-width: 820px)":{
			margin: 0,
			width: "100%",
			div:{
				minHeight: 100
			},
			"img:first-of-type":{
				minWidth: 0,
				minHeight: 0,
				width:"105%",
				left: -10,
				top: 0,
				position: "absolute",
				transitionDuration: "300ms",
			},
			"img:last-of-type":{
				width:"100%",
				height: "auto",
				minWidth: 0,
				minHeight: 0,
				left: 0,
				top: 40,
				transitionDuration: "300ms",
			},
			span: {
				position: "absolute",
				left: 70,
				top: -35,
				transitionDuration: "300ms",
			},
		}
	},
	projectImage:{
		position: "absolute",
		zIndex: 1,
	},
	workTitle:{
		"@media (max-width: 820px)":{
			width: 160
		}
	}

}));
