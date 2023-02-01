import {makeStyles} from "theme";

export const useStyle = makeStyles<{transparent:boolean}>()((theme,{transparent})=>({
	button:{
		border: transparent? "1px solid transparent": `1px solid ${theme.palette.white}`,
		transitionDuration: "300ms",
		borderRadius: 50,
		padding: "25px 50px",
		backgroundColor: "transparent",
		cursor: "pointer"
	}
}));
