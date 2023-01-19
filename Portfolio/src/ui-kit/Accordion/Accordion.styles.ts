import {makeStyles} from "theme";

export const useStyle = makeStyles<{isOpen: boolean}>()((theme, {isOpen})=>({
	accordionContainer:{
		borderTop: `1px solid ${theme.palette.white}`,
		width: "100%",
		padding: "32px 0px"
	},
	accordionHead:{
		display: "flex",
		width: "100%",
		gap: 25,
		alignItems: "center",
		marginBottom: isOpen ? 20 : 0
	},
	starContainer:{
		display: "flex",
		gap:9
	},
	subskillContainer:{
		width: "100%",
		overflow: "hidden",
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
	},
	icon:{
		marginLeft: "auto",
		marginRight: 0
	}
}));
