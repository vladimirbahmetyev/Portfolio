import { makeStyles } from "theme";

export const useStyle = makeStyles()(() => ({
	navigationContainer:{
		width: "calc(100% - 280px)",
		padding: "48px 140px",
		display: "flex",
		gap: 32,
		justifyContent: "flex-end"
	},
	item:{
		cursor:"pointer"
	}
}));
