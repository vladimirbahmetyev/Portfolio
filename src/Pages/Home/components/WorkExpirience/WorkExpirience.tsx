import {FC} from "react";
import {useStyle} from "./WorkExpirience.styles";
import {ExperienceTitle, WorkTitle, N1, N2 , N3, N4, N5, N6, N7} from "icons";
import {Typography} from "ui-kit";
import {useNavigate} from "react-router-dom";
import {ProjectUrlType} from "types";

export const WorkExpirience:FC= () => {
	const {classes, cx} = useStyle();
	const navigate = useNavigate();
	const onProjectClick = (projectUrl: ProjectUrlType) => navigate(`/project/${projectUrl}`);

	return (
		<div className={classes.workExperienceContainer} id='work'>
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
				<div className={cx(classes.projectContainer,classes.secondProject)} onClick={()=>onProjectClick("Jobswidget")}>
					<N2/>
					<img src='/images/workExperience/p2.png' className={classes.projectPack}/>
					<img src='/images/workExperience/pr2.jpg' className={classes.projectImage}/>
				</div>
				<div className={cx(classes.projectContainer, classes.firstProject)} onClick={()=>onProjectClick("Metamap")}>
					<N1/>
					<img src='/images/workExperience/p1.png' className={classes.projectPack}/>
					<img src='/images/workExperience/pr1.jpg'className={classes.projectImage}/>
				</div>
			</div>
			<div className={cx(classes.projectContainer, classes.thirdProject)} onClick={()=>onProjectClick("GameGreed")}>
				<N3/>
				<img src='/images/workExperience/p3.png' className={classes.projectPack}/>
				<img src='/images/workExperience/pr3.jpg'className={classes.projectImage}/>
			</div>
			<div className={cx(classes.projectContainer, classes.fourthProject)} onClick={()=>onProjectClick("Mugler")}>
				<N4/>
				<img src='/images/workExperience/p4.png' className={classes.projectPack}/>
				<img src='/images/workExperience/pr4.jpg'className={classes.projectImage}/>
			</div>
			<div className={cx(classes.projectContainer, classes.fifthProject)} onClick={()=>onProjectClick("MyGlo")}>
				<N5/>
				<img src='/images/workExperience/p5.png' className={classes.projectPack}/>
				<img src='/images/workExperience/pr5.jpg'className={classes.projectImage}/>
			</div>
			<div className={cx(classes.projectContainer, classes.sixthProject)} onClick={()=>onProjectClick("CorpPass")}>
				<N6/>
				<img src='/images/workExperience/p6.png' className={classes.projectPack}/>
				<img src='/images/workExperience/pr6.jpg'className={classes.projectImage}/>
			</div>
			<div className={cx(classes.projectContainer, classes.seventhProject)} onClick={()=>onProjectClick("Shopic")}>
				<N7/>
				<img src='/images/workExperience/p7.png' className={classes.projectPack}/>
				<img src='/images/workExperience/pr7.jpg'className={classes.projectImage}/>
			</div>
		</div>);
};
