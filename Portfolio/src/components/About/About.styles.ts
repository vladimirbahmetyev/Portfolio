import {makeStyles} from "theme";

export const useStyle = makeStyles()(()=> ({
	aboutContainer:{
		display: "flex",
		flexDirection: "column",
		gap: 90,
		padding: "0 140px",
		marginTop: 100,
	},
	topContainer:{
		display: "flex",
		gap:90,
		width: "100%",
		justifyContent: "center"
	},
	titleWithDescription:{
		display: "flex",
		flexDirection: "column",
		gap: 35,
		maxWidth: 550,
	},
	bottomContainer:{
		display: "flex",
		width: "100%",
		justifyContent: "space-around"
	},
	knowledgeContainer:{
		display: "flex",
		flexDirection: "column",
		gap: 40,
		maxWidth: 530,
	},
	educationContainer:{
		display: "flex",
		flexDirection: "column",
		gap: 4
	},

	educationTitleContainer:{
		display: "flex",
		gap: 4
	},


	itemContainer:{
		display: "flex",
		gap: 40
	},
	languageContainer:{
		display: "flex",
		flexDirection: "column",
		gap:2
	}
}));
