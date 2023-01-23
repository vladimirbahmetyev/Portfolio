import {makeStyles} from "theme";

export const useStyle = makeStyles()(()=> ({
	skillsContainer:{
		padding:"0 140px",
		display: "flex",
		gap: 35
	},
	skillsTitle:{
		marginTop: 120,
		marginBottom: 167
	},
	skillsColumn:{
		display: "flex",
		flexDirection: "column",
		width: "calc(50% - 18px)"
	}
}));
