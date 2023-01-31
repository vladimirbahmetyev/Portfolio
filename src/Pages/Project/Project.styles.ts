import {makeStyles} from "theme";

export const useStyle = makeStyles()((theme)=>({
	projectContainer:{
		paddingTop: 48,
		boxSizing: "border-box",
		width: "100%",
		backgroundImage: "url('/images/background/paperBackground.png')",
		minHeight: "100vh",
		backgroundColor: theme.palette.black,
		backgroundSize: "cover",
		"@media (max-width: 480px)":{
			paddingBottom: 80
		}
	},
	contentContainer:{
		width: 1400,
		display:"flex",
		gap: 100,
		margin: "50px auto 0 auto",
		"@media (max-width: 480px)":{
			width: "calc(100% - 40px)",
			padding: "0 20px"
		}
	},
	navigationContainer:{
		width: "100%",
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		padding: "0 200px",
		boxSizing:"border-box",
		"@media (max-width: 480px)":{
			padding:"0 20px",
			flexDirection: "column-reverse",
			alignItems: "flex-start",
			gap: 45
		}
	},
	backContainer:{
		display: "flex",
		gap:8,
		cursor:"pointer",
		alignItems: "center"
	},
	projectInfoContainer:{
		display: "flex",
		flexDirection: "column",
		maxWidth: 700,
	},
	title:{
		marginBottom: 20,
	},
	roleDescription: {
		marginTop: 42,
	},
	listContainer:{
		marginTop: 24,
		paddingLeft: 5
	},
	sideContainer:{
		position:"relative",
		paddingTop: 90,
		"@media (max-width: 480px)":{
			display:"none"
		}
	},
	button:{
		width: 360
	},
	manImg:{
		position: "fixed",
		right: 0,
		bottom: 0,
	},
	manImgMobile: {
		display: "none",
		"@media (max-width: 480px)":{
			display:"block",
			width: "100%",
			marginTop: 24,
		}
	},
	mobileLinkButton: {
		display: "none",
		"@media (max-width: 480px)":{
			display:"flex",
			padding:"25px 0",
			boxSizing:"border-box",
			width: "100%",
			justifyContent: "center",
			alignItems: "center",
			borderTop: `1px solid ${theme.palette.white}`,
			borderBottom: `1px solid ${theme.palette.white}`,
		}
	}
}));
