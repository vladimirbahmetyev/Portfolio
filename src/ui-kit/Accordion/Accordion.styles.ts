import {makeStyles} from "theme";

export const useStyle = makeStyles<{isOpen: boolean, elementsCount: number}>()((theme, {isOpen, elementsCount})=>({
	accordionContainer:{
		borderTop: `1px solid ${theme.palette.white}`,
		borderBottom: `1px solid ${theme.palette.white}`,
		width: "100%",
		padding: "32px 0px"
	},
	accordionHead:{
		display: "flex",
		width: "100%",
		gap: 25,
		alignItems: "center",
		marginBottom: isOpen ? 20 : 0,
		cursor: "pointer"
	},
	starContainer:{
		display: "flex",
		gap:9
	},
	subskillContainer:{
		width: "100%",
		overflow: "hidden",
		transitionDuration: "300ms",
		height: isOpen ? 34 * elementsCount : 0,
		paddingLeft: 105,
		display: "flex",
		flexDirection: "column",
		gap:  8
	},
	icon:{
		marginLeft: "auto",
		marginRight: 0
	}
}));
