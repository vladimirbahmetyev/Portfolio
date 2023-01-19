import { makeStyles } from "theme";

export const useStyle = makeStyles()(() => ({
	greetContainer:{
		backgroundImage:"url('/images/background/greeting.jpg')",
		backgroundRepeat: "no-repeat",
		backgroundSize: "cover",
		height: "100vh",
		width: "100%",
	}
}));
