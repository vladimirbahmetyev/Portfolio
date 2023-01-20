import {makeStyles} from "theme";

export const useStyle = makeStyles()(()=>({
	contactsContainer:{
		backgroundImage:"url('/images/background/contacts.png')",
		paddingTop: 200,
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		mixBlendMode: "lighten",
		paddingLeft:"calc((100% - 1400px)/2)",
		paddingRight:"calc((100% - 1400px)/2)",
		height: 930,
		position: "relative"
	},
	description:{
		maxWidth: 600
	},
	contactsTitle:{
		marginBottom: 70,
	},
	catEnd:{
		position: "absolute",
		right: 0,
		bottom: 0
	}
}));
