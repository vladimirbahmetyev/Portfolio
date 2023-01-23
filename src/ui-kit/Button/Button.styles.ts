import {makeStyles} from "theme";

export const useStyle = makeStyles()((theme)=>({
	button:{
		border: `1px solid ${theme.palette.white}`,
		borderRadius: 50,
		padding: "25px 50px",
		backgroundColor: "transparent",
		cursor: "pointer"
	}
}));
