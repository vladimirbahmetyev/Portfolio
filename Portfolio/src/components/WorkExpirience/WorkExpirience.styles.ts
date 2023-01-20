import {makeStyles} from "theme";

export const useStyle = makeStyles()(()=> ({
	workExperienceContainer:{
		marginTop: 230,
		marginBottom: 300,
		position: "relative"
	},
	titleContainer:{
		display: "flex",
		flexDirection: "column",
		alignItems: "flex-end",
		gap: 24,
	},
	rowContainer:{
		display: "flex",
		justifyContent:"center",
		gap: 400
	},
	yearsContainer:{
		display: "flex",
		flexDirection: "column",
		gap: 2
	},
	experience:{
		marginRight: 122,
	},
	img:{
		position: "absolute",
		left: 90,
		top: -66
	}
}));
