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
		minHeight: 700,
		"> div:first-of-type":{
			marginLeft: 250,
			marginTop: 250,
		},
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
		}
	},
	thirdProject:{
		justifyContent: "center",
		minHeight: 600,
		minWidth: 300,
		div:{
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
			}
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

	},
	fourthProject:{
		marginTop: 30,
		marginLeft: 120,
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
		marginLeft: 600,
		marginTop: -10,
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
