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
		top: 23,
		zIndex: 0,
	}
}));
