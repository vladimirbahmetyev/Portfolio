import {FC} from "react";
import {useStyle} from "./Project.styles";
import {useNavigate, useParams} from "react-router-dom";
import {Navigation, Typography} from "ui-kit";
import {Back} from "icons";

export const Project: FC = () => {
	const {classes} = useStyle();
	const {projectName} = useParams<{projectName: string}>();
	const navigate = useNavigate();
	return (
		<div className={classes.projectContainer}>
			<div className={classes.navigationContainer}>
				<div onClick={() => navigate(-1)} className={classes.backContainer}>
					<Back/>
					<Typography block variant='h4'>
						Back
					</Typography>
				</div>
				<Navigation isWhite/>
			</div>

			<div className={classes.contentContainer}>
				<div className={classes.projectInfoContainer}>
					<Typography variant='h2' block>{projectName}</Typography>
				</div>
			</div>

		</div>);
};
