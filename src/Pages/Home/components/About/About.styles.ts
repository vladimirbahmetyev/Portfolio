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
		justifyContent: "space-around",
		alignItems: "flex-start",
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
		gap: 16
	},
	itemContainer:{
		display: "flex",
		gap: 40
	},
	languageContainer:{
		display: "flex",
		flexDirection: "column",
		gap:2
	},
	starContainer:{
		display: "flex",
		gap: 9,
		marginTop: 10,
	},
	tap:{
		position: "relative",
		top: -75,
	},
	photo: {
		position: "relative",
		top: -160,
		right: -30
	},
}));
