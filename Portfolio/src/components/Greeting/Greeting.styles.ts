import { makeStyles } from "theme";

export const useStyle = makeStyles()(() => ({
	greetContainer:{
		backgroundImage:"url('/images/background/greeting.jpg')",
		backgroundRepeat: "no-repeat",
		backgroundSize: "cover",
		height: "140vh",
		width: "100%",
		position: "relative"
	},
	greetText:{
		marginTop: 140,
		marginLeft: 140,
		textAlign: "left"
	},
	cat:{
		position: "absolute",
		top: 23,
		right: 200,
	}
}));
