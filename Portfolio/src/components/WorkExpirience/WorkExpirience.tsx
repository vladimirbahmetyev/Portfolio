import {FC} from "react";
import {useStyle} from "./WorkExpirience.styles";
import {ExperienceTitle, WorkTitle} from "../../icons";
import {Typography} from "../../ui-kit";

export const WorkExpirience:FC= () => {
	const {classes} = useStyle();
	return (
		<div className={classes.workExperienceContainer}>
			<img src='/images/expTap.png' className={classes.img}/>
			<div className={classes.titleContainer}>
				<div className={classes.rowContainer}>
					<div className={classes.yearsContainer}>
						<Typography variant='h2'>3,5</Typography>
						<Typography variant='h3'>years</Typography>
					</div>
					<WorkTitle/>
				</div>
				<ExperienceTitle className={classes.experience}/>
			</div>

		</div>);
};
