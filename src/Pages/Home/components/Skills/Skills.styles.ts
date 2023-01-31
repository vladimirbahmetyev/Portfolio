import {makeStyles} from "theme";

export const useStyle = makeStyles()(()=> ({
	skillsContainer:{
		padding:"0 140px",
		display: "flex",
		gap: 35,
		"@media (max-width: 820px)":{
			flexDirection: "column",
			gap: 0,
			padding: 0,
		}
	},
	skillsTitle:{
		marginTop: 120,
		marginBottom: 122,
		"@media (max-width: 820px)":{
			width: 187,
			marginBottom: 32
		}
	},
	skillsColumn:{
		display: "flex",
		flexDirection: "column",
		width: "calc(50% - 18px)",
		"@media (max-width: 820px)":{
			width: "100%"
		}
	},
	button:{
		marginTop: 24
	}
}));
