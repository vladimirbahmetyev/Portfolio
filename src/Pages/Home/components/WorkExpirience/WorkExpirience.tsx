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
	const currentDate = new Date();
	const startDate = (new Date("2019-09-10"));

	const yearsOfExp = ((Number(currentDate) - Number(startDate))/1000/3600/24/365)
		.toFixed(1)
		.replace(".", ",");

	return (
		<div className={classes.workExperienceContainer} id='work'>
			<img src='/images/expTap.png' className={classes.img}/>
			<div className={classes.titleContainer}>
				<div className={classes.rowContainer}>
					<div className={classes.yearsContainer}>
						<Typography variant='h2'>{yearsOfExp}</Typography>
						<Typography variant='h3'>years</Typography>
					</div>
					<WorkTitle className={classes.workTitle}/>
				</div>
				<ExperienceTitle className={classes.experience}/>
			</div>
			<div className={classes.firstSecondProject}>
				<div className={classes.secondProjectContainer} onClick={()=>onProjectClick("Jobswidget")}>
					<N2/>
					<div className={classes.projectContainer}>
						<img src='/images/workExperience/p2.png' className={cx(classes.projectPack, classes.secondProjectPack)}/>
						<img src='/images/workExperience/pr2.jpg' className={cx(classes.projectImage, classes.secondProjectImage)}/>
						<Typography variant='h3' block>JobsWidget</Typography>
					</div>
				</div>
				<div className={classes.firstProjectContainer  } onClick={()=>onProjectClick("Metamap")}>
					<N1/>
					<div className={classes.projectContainer}>
						<img src='/images/workExperience/p1.png' className={cx(classes.projectPack, classes.firstProjectPack)}/>
						<img src='/images/workExperience/pr1.jpg'className={cx(classes.projectImage, classes.firstProjectImage)}/>
						<Typography variant='h3' block>Metamap</Typography>
					</div>
				</div>
			</div>
			<div className={classes.thirdProjectContainer} onClick={()=>onProjectClick("GameGreed")}>
				<N3/>
				<div className={classes.projectContainer}>
					<img src='/images/workExperience/p3.png' className={classes.thirdProjectPack}/>
					<img src='/images/workExperience/pr3.jpg' className={classes.thirdProjectImage}/>
					<Typography variant='h3' block>Game Greed</Typography>
				</div>
			</div>
			{/*<div className={cx(classes.projectContainer, classes.fourthProject)} onClick={()=>onProjectClick("Mugler")}>*/}
			{/*	<N4/>*/}
			{/*	<div>*/}
			{/*		<img src='/images/workExperience/p4.png' className={classes.projectPack}/>*/}
			{/*		<img src='/images/workExperience/pr4.jpg'className={classes.projectImage}/>*/}
			{/*		<Typography variant='h3' block>Mugler</Typography>*/}
			{/*	</div>*/}
			{/*</div>*/}
			{/*<div className={cx(classes.projectContainer, classes.fifthProject)} onClick={()=>onProjectClick("MyGlo")}>*/}
			{/*	<N5/>*/}
			{/*	<div>*/}
			{/*		<img src='/images/workExperience/p5.png' className={classes.projectPack}/>*/}
			{/*		<img src='/images/workExperience/pr5.jpg'className={classes.projectImage}/>*/}
			{/*		<Typography variant='h3' block>MyGlo</Typography>*/}
			{/*	</div>*/}
			{/*</div>*/}
			{/*<div className={cx(classes.projectContainer, classes.sixthProject)} onClick={()=>onProjectClick("CorpPass")}>*/}
			{/*	<N6/>*/}
			{/*	<div>*/}
			{/*		<img src='/images/workExperience/p6.png' className={classes.projectPack}/>*/}
			{/*		<img src='/images/workExperience/pr6.jpg'className={classes.projectImage}/>*/}
			{/*		<Typography variant='h3' block>CorpPass</Typography>*/}
			{/*	</div>*/}
			{/*</div>*/}
			{/*<div className={cx(classes.projectContainer, classes.seventhProject)} onClick={()=>onProjectClick("Shopic")}>*/}
			{/*	<N7/>*/}
			{/*	<div>*/}
			{/*		<img src='/images/workExperience/p7.png' className={classes.projectPack}/>*/}
			{/*		<img src='/images/workExperience/pr7.jpg'className={classes.projectImage}/>*/}
			{/*		<Typography variant='h3' block>Shopic</Typography>*/}
			{/*	</div>*/}
			{/*</div>*/}
		</div>);
};
