import {FC} from "react";
import {useStyle} from "./WorkExpirience.styles";
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
			<img src='/images/expTap.webp' className={classes.img}/>
			<div className={classes.titleContainer}>
				<div className={classes.rowContainer}>
					<div className={classes.yearsContainer}>
						<Typography variant='h2'>{yearsOfExp}</Typography>
						<Typography variant='h3'>years</Typography>
					</div>
					<img src='/images/titles/work.webp' className={classes.workTitle} alt='Work title'/>
				</div>
				<img src='/images/titles/experience.webp' className={classes.experience} alt='Experience title'/>
			</div>
			<div className={classes.firstSecondProject}>
				<div className={classes.secondProjectContainer} onClick={()=>onProjectClick("Jobswidget")}>
					<img src='/images/workExperience/n2.webp' alt='n2 number'/>
					<div className={classes.projectContainer}>
						<img src='/images/workExperience/p2.webp' className={classes.secondProjectPack}/>
						<img src='/images/workExperience/pr2.jpg' className={ classes.secondProjectImage}/>
						<Typography variant='h3' block>JobsWidget</Typography>
					</div>
				</div>
				<div className={classes.firstProjectContainer  } onClick={()=>onProjectClick("Metamap")}>
					<img src='/images/workExperience/n1.webp' alt='n1 number'/>
					<div className={classes.projectContainer}>
						<img src='/images/workExperience/p1.webp' className={classes.firstProjectPack}/>
						<img src='/images/workExperience/pr1.jpg'className={classes.firstProjectImage}/>
						<Typography variant='h3' block>Metamap</Typography>
					</div>
				</div>
			</div>
			<div className={classes.thirdProjectContainer} onClick={()=>onProjectClick("GameGreed")}>
				<img src='/images/workExperience/n3.webp' alt='n3 number'/>
				<div className={classes.projectContainer}>
					<img src='/images/workExperience/p3.webp' className={classes.thirdProjectPack}/>
					<img src='/images/workExperience/pr3.jpg' className={classes.thirdProjectImage}/>
					<Typography variant='h3' block>Game Greed</Typography>
				</div>
			</div>
			<div className={classes.fourthProjectContainer} onClick={()=>onProjectClick("Mugler")}>
				<img src='/images/workExperience/n4.webp' alt='n4 number'/>
				<div className={classes.projectContainer}>
					<img src='/images/workExperience/p4.webp' className={classes.fourthProjectPack}/>
					<img src='/images/workExperience/pr4.jpg'className={classes.fourthProjectImage}/>
					<Typography variant='h3' block>Mugler</Typography>
				</div>
			</div>
			<div className={classes.fifthProjectContainer} onClick={()=>onProjectClick("MyGlo")}>
				<img src='/images/workExperience/n5.webp' alt='n5 number'/>
				<div className={classes.projectContainer}>
					<img src='/images/workExperience/p5.webp' className={classes.fifthProjectPack}/>
					<img src='/images/workExperience/pr5.jpg'className={classes.fifthProjectImage}/>
					<Typography variant='h3' block>MyGlo</Typography>
				</div>
			</div>
			<div className={classes.sixthProjectContainer} onClick={()=>onProjectClick("CorpPass")}>
				<img src='/images/workExperience/n6.webp' alt='n6 number'/>
				<div className={classes.projectContainer}>
					<img src='/images/workExperience/p6.webp' className={classes.sixthProjectPack}/>
					<img src='/images/workExperience/pr6.jpg'className={classes.sixthProjectImage}/>
					<Typography variant='h3' block>CorpPass</Typography>
				</div>
			</div>
			<div className={classes.seventhProjectContainer} onClick={()=>onProjectClick("Shopic")}>
				<img src='/images/workExperience/n7.webp' alt='n7 number'/>
				<div className={classes.projectContainer}>
					<img src='/images/workExperience/p7.webp' className={classes.seventhProjectPack}/>
					<img src='/images/workExperience/pr7.jpg'className={classes.seventhProjectImage}/>
					<Typography variant='h3' block>Shopic</Typography>
				</div>
			</div>
		</div>);
};
