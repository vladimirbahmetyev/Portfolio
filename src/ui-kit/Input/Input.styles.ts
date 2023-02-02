import {makeStyles} from "theme";

export const useStyle = makeStyles<{isLabelUp: boolean}>()((theme, {isLabelUp})=> ({
	input:{
		fontFamily: "inherit",
		fontSize: "inherit",
		lineHeight: "inherit",
		fontWeight: "inherit",
		backgroundColor: "transparent",
		borderBottom: `1px solid ${theme.palette.white}`,
		borderLeft: "none",
		borderRight: "none",
		borderTop: "none",
		color: "inherit",
		":focus-visible":{
			outline: "none",
			borderBottom: "1px solid transparent",
			transitionDuration: "300ms"
		},
		width: "100%",
		padding: "2px 0 10px 0",
		borderRadius: 0,
		boxSizing: "border-box",
		margin: 0,
		// padding: 0
	},
	inputContainer:{
		position: "relative",
		boxSizing: "border-box"
	},
	inputLabel:{
		position: "absolute",
		top: isLabelUp ? "-100%" : 0,
		transitionDuration: "300ms"
	},
	inputSubcontainer:{
		width: "100%"
	}
}));
