import {makeStyles} from "theme";

export const useStyle = makeStyles()(()=>({
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
		},
		"@media (max-width: 1400px) and (min-width: 821px)": {
			padding: "200px 20px 150px 20px"
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
		},
		"@media (max-width: 1150px) and (min-width: 821px)": {
			width: 600
		}
	},
	catEnd:{
		position: "absolute",
		right: 0,
		bottom: 0,
		"@media (max-width: 820px)":{
			width: 360,
			zIndex: -1
		},
		"@media (max-width: 1400px) and (min-width: 821px)": {
			bottom: 280
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
			maxWidth: 350,
			marginTop: 60,
			gap: 48
		}
	},
	animationTrack:{
		path:{
			stroke: "url(#g)",
			strokeWidth: 4,
			strokeDasharray: "1% 623%",
			strokeDashoffset: 6
		},
		position: "absolute",
		top: "14%",
		"@media (max-width: 820px)":{
			display: "none"
		}
	},
	nameTrackFocus:{
		path:{
			transitionDuration: "500ms",
			strokeDasharray: "64% 522%",
			strokeDashoffset: 0,
		}
	},
	emailFocus:{
		path:{
			transitionDuration: "500ms",
			strokeDasharray: "64% 522%",
			strokeDashoffset: -307,
		}
	},
	messageFocus:{
		path:{
			transitionDuration: "500ms",
			strokeDasharray: "132% 522%",
			strokeDashoffset: -686,
		}
	},
	buttonHover:{
		path:{
			transitionDuration: "500ms",
			strokeDasharray: "283% 522%",
			strokeDashoffset: -1377,
		}
	},
	topInput:{
		minWidth: "calc(50% - 10px)",
		"@media (max-width: 820px)":{
			width: "100%"
		}
	},
	bottomInput:{
		minWidth: "100%",
		"@media (max-width: 820px)":{
			width: "calc(100% - 20px)"
		}
	},
	infoContainer:{
		width: "100%",
		display: "flex",
		gap: 20,
		"@media (max-width: 820px)":{
			flexDirection: "column",
			gap: 48,
		}
	},
	button:{
		marginTop: 9,
		zIndex: 2,
		"@media (max-width: 820px)":{
			marginTop: -8
		}
	},
	contentContainer:{
		display: "flex",
		gap: 200,
		"@media (max-width: 1149px)":{
			gap: 50,
			flexDirection: "column"
		},
		"@media (min-width: 748px) and (max-width: 820px)":{
			gap: 0,
			justifyContent: "space-between",
			// alignItems: "flex-end"
		},
		"@media (max-width: 1200px)":{
			gap: 50
		}
	},
	contactsContainer:{
		paddingTop: 110,
		display:"flex",
		flexDirection: "column",
		gap: 30,
		"@media (max-width: 820px)":{
			paddingTop: 30
		},
		"@media (max-width: 1149px) and (min-width: 821px)":{
			padding: 0
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
	},
	animationTrackMobile:{
		display: "none",
		position: "absolute",
		marginTop: 40,
		path:{
			stroke: "url(#g1)",
			strokeWidth: 4,
			strokeDasharray: "0 626%",
			transitionDuration: "500ms",
			strokeDashoffset: 0,
		},
		"@media (max-width: 820px)":{
			display: "block",
			transform: " scaleX(1.1) translateX(4%)",
			left: 0
		}
	},
	nameFocusMobile:{
		path:{
			strokeDasharray: "104% 626%",
			transitionDuration: "500ms",
			strokeDashoffset: 0,
		}
	},
	emailFocusMobile:{
		path:{
			strokeDasharray: "105% 626%",
			transitionDuration: "500ms",
			strokeDashoffset: -400,
		}
	},
	messageFocusMobile:{
		path:{
			transitionDuration: "500ms",
			strokeDasharray: "105% 626%",
			strokeDashoffset: -802,
		}
	},
	buttonHoverMobile:{
		path:{
			transitionDuration: "500ms",
			strokeDasharray: "283% 522%",
			strokeDashoffset: -1206,
		}
	},
}));

