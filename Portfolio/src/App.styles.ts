import {makeStyles} from "./theme";

export const useStyle = makeStyles()(() => ({
	appContainer:{
		width:"100%",
	},
	contentContainer:{
		backgroundImage:"url('/images/background/paperBackground.png')",
		backgroundColor: "black",
		backgroundSize: "cover",
		paddingTop: 100,
	}
}));
