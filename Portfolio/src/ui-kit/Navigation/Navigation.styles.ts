import { makeStyles } from "theme";

export const useStyle = makeStyles()(() => ({
	navigationContainer:{
		display: "flex",
		gap: 32,
		justifyContent: "flex-end",
		position: "relative",
		zIndex: 10
	},
	item:{
		cursor:"pointer"
	}
}));
