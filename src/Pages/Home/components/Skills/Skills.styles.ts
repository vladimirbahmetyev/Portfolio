import {makeStyles} from "theme";

export const useStyle = makeStyles()(()=> ({
	skillsContainer:{
		padding:"0 140px",
		display: "flex",
		gap: 35,
		"@media (max-width: 1100px)":{
			flexDirection: "column",
			gap: 0,
			padding: 0,
		},
		"@media (min-width: 1101px) and (max-width: 1400px)":{
			padding: "130px 0 0 0 ",
		},
	},
	skillsTitle:{
		marginTop: 120,
		marginBottom: 122,
		"@media (max-width: 480px)":{
			width: 187,
			height: 33,
			marginBottom: 32
		},
		"@media (min-width: 480px) and (max-width: 1400px)":{
			width: 360,
			marginBottom: 32,
			height: 63
		},
	},
	skillsColumn:{
		display: "flex",
		flexDirection: "column",
		width: "calc(50% - 18px)",
		"@media (max-width: 1100px)":{
			width: "100%"
		},
	},
	button:{
		marginTop: 24
	}
}));
