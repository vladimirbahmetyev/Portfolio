import {makeStyles} from "theme";

export const useStyle = makeStyles()((theme)=>({
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
}));
