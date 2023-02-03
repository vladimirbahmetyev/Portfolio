import {FC} from "react";
import {useStyle} from "./WorkExpirience.styles";
import {ExperienceTitle, WorkTitle, N1, N2 , N3, N4, N5, N6, N7} from "icons";
import {Typography} from "ui-kit";
import {useNavigate} from "react-router-dom";
import {ProjectUrlType} from "types";

export const WorkExpirience:FC= () => {
	const {classes} = useStyle();
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
			{/*<div className={classes.firstSecondProject}>*/}
			{/*	<div className={classes.secondProjectContainer} onClick={()=>onProjectClick("Jobswidget")}>*/}
			{/*		<N2/>*/}
			{/*		<div className={classes.projectContainer}>*/}
			{/*			<img src='/images/workExperience/p2.png' className={classes.secondProjectPack}/>*/}
			{/*			<img src='/images/workExperience/pr2.jpg' className={ classes.secondProjectImage}/>*/}
			{/*			<Typography variant='h3' block>JobsWidget</Typography>*/}
			{/*		</div>*/}
			{/*	</div>*/}
			{/*	<div className={classes.firstProjectContainer  } onClick={()=>onProjectClick("Metamap")}>*/}
			{/*		<N1/>*/}
			{/*		<div className={classes.projectContainer}>*/}
			{/*			<img src='/images/workExperience/p1.png' className={classes.firstProjectPack}/>*/}
			{/*			<img src='/images/workExperience/pr1.jpg'className={classes.firstProjectImage}/>*/}
			{/*			<Typography variant='h3' block>Metamap</Typography>*/}
			{/*		</div>*/}
			{/*	</div>*/}
			{/*</div>*/}
			{/*<div className={classes.thirdProjectContainer} onClick={()=>onProjectClick("GameGreed")}>*/}
			{/*	<N3/>*/}
			{/*	<div className={classes.projectContainer}>*/}
			{/*		<img src='/images/workExperience/p3.png' className={classes.thirdProjectPack}/>*/}
			{/*		<img src='/images/workExperience/pr3.jpg' className={classes.thirdProjectImage}/>*/}
			{/*		<Typography variant='h3' block>Game Greed</Typography>*/}
			{/*	</div>*/}
			{/*</div>*/}
			{/*<div className={classes.fourthProjectContainer} onClick={()=>onProjectClick("Mugler")}>*/}
			{/*	<N4/>*/}
			{/*	<div className={classes.projectContainer}>*/}
			{/*		<img src='/images/workExperience/p4.png' className={classes.fourthProjectPack}/>*/}
			{/*		<img src='/images/workExperience/pr4.jpg'className={classes.fourthProjectImage}/>*/}
			{/*		<Typography variant='h3' block>Mugler</Typography>*/}
			{/*	</div>*/}
			{/*</div>*/}
			{/*<div className={classes.fifthProjectContainer} onClick={()=>onProjectClick("MyGlo")}>*/}
			{/*	<N5/>*/}
			{/*	<div className={classes.projectContainer}>*/}
			{/*		<img src='/images/workExperience/p5.png' className={classes.fifthProjectPack}/>*/}
			{/*		<img src='/images/workExperience/pr5.jpg'className={classes.fifthProjectImage}/>*/}
			{/*		<Typography variant='h3' block>MyGlo</Typography>*/}
			{/*	</div>*/}
			{/*</div>*/}
			{/*<div className={classes.sixthProjectContainer} onClick={()=>onProjectClick("CorpPass")}>*/}
			{/*	<N6/>*/}
			{/*	<div className={classes.projectContainer}>*/}
			{/*		<img src='/images/workExperience/p6.png' className={classes.sixthProjectPack}/>*/}
			{/*		<img src='/images/workExperience/pr6.jpg'className={classes.sixthProjectImage}/>*/}
			{/*		<Typography variant='h3' block>CorpPass</Typography>*/}
			{/*	</div>*/}
			{/*</div>*/}
			{/*<div className={classes.seventhProjectContainer} onClick={()=>onProjectClick("Shopic")}>*/}
			{/*	<N7/>*/}
			{/*	<div className={classes.projectContainer}>*/}
			{/*		<img src='/images/workExperience/p7.png' className={classes.seventhProjectPack}/>*/}
			{/*		<img src='/images/workExperience/pr7.jpg'className={classes.seventhProjectImage}/>*/}
			{/*		<Typography variant='h3' block>Shopic</Typography>*/}
			{/*	</div>*/}
			{/*</div>*/}
		</div>);
};
