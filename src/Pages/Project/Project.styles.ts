import {makeStyles} from "../../theme";

export const useStyle = makeStyles()((theme)=>({
	projectContainer:{
		paddingTop: 48,
		boxSizing: "border-box",
		width: "100%",
		backgroundImage: "url('/images/background/paperBackground.png')",
		minHeight: "100vh",
		backgroundColor: theme.palette.black,
		backgroundSize: "cover",
	},
	contentContainer:{
		width: 1400,
		display:"flex",
		gap: 100,
		margin: "50px auto 0 auto"
	},
	navigationContainer:{
		width: "100%",
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		padding: "0 200px",
		boxSizing:"border-box"
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
		paddingTop: 90
	},
	button:{
		width: 360
	},
	manImg:{
		position: "fixed",
		right: 0,
		bottom: 0
	}

}));