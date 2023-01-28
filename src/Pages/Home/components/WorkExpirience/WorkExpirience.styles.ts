import {makeStyles} from "theme";

export const useStyle = makeStyles()(()=> ({
	workExperienceContainer:{
		marginTop: 230,
		marginBottom: 50,
		position: "relative",
		"@media (max-width:480px)":{
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
		"@media (max-width:480px)":{
			gap: 0
		}
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
		"@media (max-width: 480px)":{
			width: 330,
			marginRight: 0,
			marginTop: -40
		}
	},
	img:{
		position: "absolute",
		left: 90,
		top: -66,
		"@media (max-width: 480px)":{
			width: 392,
			left:"-45%"
		}
	},
	projectContainer:{
		position: "relative",
		cursor: "pointer",
		display: "flex",
		svg:{
			marginTop: 80,
		},
		"@media (max-width: 480px)":{
			flexDirection: "column",
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
		minHeight: 700,
		"> div:first-of-type":{
			marginLeft: 250,
			marginTop: 250,
		},
		"@media (max-width: 480px)":{
			div:{
				":first-child":{
					svg:{
						marginLeft: 100
					},
				},
				":last-child":{
					svg:{
						marginLeft: 0
					},

				},
			},

			minHeight: 0,
			flexDirection: "column-reverse",
			gap: 80,
			"> div:first-of-type":{
				marginLeft: 0,
				marginTop: 0,
			},
		}
	},
	firstProject:{
		marginLeft: 400,
		marginRight: "auto",
		div:{
			position: "relative",
		},
		"img:first-of-type":{
			minWidth: 617,
			minHeight: 520,
			top: 0,
			transitionDuration: "300ms",
			position: "absolute",
		},
		"img:last-of-type":{
			minWidth: 560,
			minHeight: 300,
			left: 30,
			top: 100,
			position: "absolute",
			transitionDuration: "300ms",
		},
		span:{
			position: "absolute",
			left: 30,
			top: 415,
			transitionDuration: "300ms",
		},
		":hover":{
			"img:first-of-type":{
				top: 50,
				transitionDuration: "300ms"
			},
			"img:last-of-type":{
				transitionDuration: "300ms",
				top: 50
			},
			span:{
				top: 365
			}
		},
		"@media (max-width: 480px)":{
			margin: 0,
			minHeight:330,
			div:{
				"img:first-of-type":{
					minHeight:0,
					minWidth: 0,
					width: "110%",
					left: "-5%",
					position: "absolute",
				},
				"img:last-of-type":{
					minWidth: 0,
					minHeight:0,
					left:0,
					top: 80,
					width: "100%",
					position: "absolute",
				},
				span:{
					top: -34,
					left: 70
				}
			}
		}
	},
	secondProject:{
		div:{
			position: "relative"
		},
		"img:first-of-type":{
			minWidth: 403,
			minHeight: 348,
			top: 0,
			position: "absolute",
			transitionDuration: "300ms",
		},
		"img:last-of-type":{
			minWidth: 300,
			minHeight: 300,
			left: 50,
			top: 50,
			transitionDuration: "300ms",
		},
		span: {
			position: "absolute",
			left: 50,
			top: 365,
			transitionDuration: "300ms",
		},
		":hover":{
			"img:first-of-type":{
				minWidth: 403,
				minHeight: 348,
				top: 50,
			},
			"img:last-of-type":{
				transitionDuration: "300ms",
				top: 0
			},
			span: {
				transitionDuration: "300ms",
				top: 315
			},
		},
		"@media (max-width: 480px)":{
			minHeight: 300,
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
				width:"90%",
				minWidth: 0,
				minHeight: 0,
				left: 20,
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
	thirdProject:{
		justifyContent: "center",
		minHeight: 600,
		marginLeft: 170,
		div:{
			minWidth: 300,
			position: "relative",
			":hover":{
				"img:first-of-type":{
					position: "absolute",
					transitionDuration: "300ms",
					left: -30,
				},
				"img:last-of-type":{
					width: 760,
					height: 450,
					position: "absolute",
					transitionDuration: "300ms",
					left: 70
				},
				span:{
					position: "absolute",
					left: 70,
					transitionDuration: "300ms"
				},
			},
		},
		marginTop: 30,
		"img:first-of-type":{
			position: "absolute",
			transitionDuration: "300ms",
			left: 0,
			top: 0,
		},
		"img:last-of-type":{
			width: 760,
			height: 450,
			position: "absolute",
			transitionDuration: "300ms",
			top: 30,
			left: 20
		},
		span:{
			position: "absolute",
			left: 20,
			top: 495,
			transitionDuration: "300ms"
		},
		"@media (max-width: 480px)":{
			margin: 0,
			width: "100%",
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
		"@media (max-width: 480px)":{
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
		"@media (max-width: 480px)":{
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
		"@media (max-width: 480px)":{
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
		"@media (max-width: 480px)":{
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
		"@media (max-width: 480px)":{
			width: 160
		}
	}

}));
