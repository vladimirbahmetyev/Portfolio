import { makeStyles } from "theme";
import {keyframes} from "tss-react";

export const useStyle = makeStyles()(() => ({
	navigationContainer:{
		display: "flex",
		gap: 32,
		justifyContent: "flex-end",
		position: "relative",
		zIndex: 10,
		"@media (max-width: 820px)":{
			gap: 16,
			justifyContent: "center",
		},
		"@media (max-width: 820px) and (min-width: 480px)":{
			gap: 64
		}
	},
	itemContainer:{
		span: {
			"animation": `${keyframes(`
				0%{
					transform:rotate(30deg);
				}
				33% {
					transform:rotate(-10deg);
				}
				66% {
					transform:rotate(10deg);
				}
				100%{
					transform:rotate(0deg);
				}
			`)} 400ms linear forwards`,
		},
		":hover":{
			span: {
				"animation":`${keyframes(`
						0%{
							transform:rotate(0deg);
						}
						33% {
							transform:rotate(40deg);
						}
						66% {
							transform:rotate(20deg);
						}
						100%{
							transform:rotate(30deg);
						}
					`)} 400ms linear forwards`
			}
		}

	}
}));
