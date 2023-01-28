import {makeStyles} from "theme";

export const useStyle = makeStyles()(()=> ({
	skillsContainer:{
		padding:"0 140px",
		display: "flex",
		gap: 35,
		"@media (max-width: 480px)":{
			flexDirection: "column",
			gap: 32,
			padding: 0,
		}
	},
	skillsTitle:{
		marginTop: 120,
		marginBottom: 122,
		"@media (max-width: 480px)":{
			width: 187,
			marginBottom: 0
		}
	},
	skillsColumn:{
		display: "flex",
		flexDirection: "column",
		width: "calc(50% - 18px)",
		"@media (max-width: 480px)":{
			width: "100%"
		}
	}
}));
