import { makeStyles } from "theme";

export const useStyle = makeStyles()(() => ({
	greetContainer:{
		paddingTop: 48,
		height:"110vh",
		width: "100%",
		position: "relative"
	},
	greetText:{
		marginTop: 140,
		textAlign: "left",
		position: "relative",
		zIndex: 2,
	},
	cat:{
		position: "absolute",
		right: 0,
		bottom: -600,
	},
	catContainer:{
		position:"relative",
		zIndex: 1
	},
	rotatingText:{
		position: "absolute",
		top: 200,
		right: 350,
		zIndex: 2
	},
	catEnd:{
		position: "absolute",
		right: 0,
		bottom: -600,
		zIndex: 3,
	},
	mouseContainer:{
		marginTop: 250,
		display: "flex",
		alignItems: "center",
		gap: 12
	}
}));
