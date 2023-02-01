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
		paddingBottom: 10,
		borderRadius: 0,
	},
	inputContainer:{
		position: "relative"
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
