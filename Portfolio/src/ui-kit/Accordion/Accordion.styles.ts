import {makeStyles} from "theme";

export const useStyle = makeStyles<{isOpen: boolean}>()((theme, {isOpen})=>({
	accordionContainer:{
		width: "100%",
		padding: "32px 0px"
	},
	accordionHead:{
		display: "flex",
		width: "100%",
		gap: 25,
		alignItems: "center"
	},
	starContainer:{
		display: "flex",
		gap:9
	},
	subskillContainer:{
		width: "100%",
		transitionDuration: "300ms",
		height: isOpen ? "content-fix" : 0,
		paddingLeft: 90,
		display: "flex",
		flexDirection: "column",
		gap: 12
	},
	dot:{
		width: 3,
		height: 3,
		backgroundColor:theme.palette.white,
		borderRadius: "50%"
	},
	item:{
		display: "flex",
		alignItems: "center",
		gap:15
	}
}));
