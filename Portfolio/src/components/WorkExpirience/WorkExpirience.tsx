import {FC} from "react";
import {useStyle} from "./WorkExpirience.styles";
import {ExperienceTitle, WorkTitle, N1, N2 , N3, N4, N5, N6, N7} from "icons";
import {Typography} from "ui-kit";

export const WorkExpirience:FC= () => {
	const {classes, cx} = useStyle();
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
			<div className={classes.firstSecondProject}>
				<div className={classes.projectContainer}>
					<N2/>
					<img src='/images/workExperience/p2.png' className={classes.projectPack}/>
				</div>
				<div className={classes.projectContainer}>
					<N1/>
					<img src='/images/workExperience/p1.png' className={classes.projectPack}/>
				</div>
			</div>
			<div className={cx(classes.projectContainer, classes.thirdProject)}>
				<N3/>
				<img src='/images/workExperience/p3.png' className={classes.projectPack}/>
			</div>
			<div className={cx(classes.projectContainer, classes.fourthProject)}>
				<N4/>
				<img src='/images/workExperience/p4.png' className={classes.projectPack}/>
			</div>
			<div className={cx(classes.projectContainer, classes.fifthProject)}>
				<N5/>
				<img src='/images/workExperience/p5.png' className={classes.projectPack}/>
			</div>
			<div className={cx(classes.projectContainer, classes.sixthProject)}>
				<N6/>
				<img src='/images/workExperience/p6.png' className={classes.projectPack}/>
			</div>
			<div className={cx(classes.projectContainer, classes.seventhProject)}>
				<N7/>
				<img src='/images/workExperience/p7.png' className={classes.projectPack}/>
			</div>
		</div>);
};
