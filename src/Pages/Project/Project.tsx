import {FC} from "react";
import {useStyle} from "./Project.styles";
import {useNavigate, useParams} from "react-router-dom";
import {Button, List, Navigation, Typography} from "ui-kit";
import {Back} from "icons";
import {ProjectUrlType} from "types";
import {projectsData} from "./projectsData";

const Description:FC<{description: string | string[]}> = ({description}) => {
	if(typeof description === "string"){
		return <Typography variant='body' block>{description}</Typography>;
	}
	return <>{description.map((item,index) => {
		return <>
			{index !== 0 && (<><br/><br/></>)}
			<Typography variant='body' block key={item}>{item}</Typography></>;
	})}</>;
};

const manMap: Record<ProjectUrlType, string> = {
	Mugler: "/images/project/m4.png",
	Metamap: "/images/project/m1.png",
	Jobswidget: "/images/project/m2.png",
	CorpPass: "/images/project/m6.png",
	GameGreed: "/images/project/m3.png",
	MyGlo: "/images/project/m5.png",
	Shopic:"/images/project/m7.png"
};

export const Project: FC = () => {
	const {classes} = useStyle();
	const {projectName} = useParams<{projectName: ProjectUrlType}>();
	const navigate = useNavigate();
	if(projectName === undefined){
		return null;
	}
	const {name, description, roleDescription, listOfResp, siteUrl} = projectsData[projectName];
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
			<img className={classes.manImgMobile} src={manMap[projectName]} alt='Man with tv'/>
			{siteUrl && (
				<a href={siteUrl} target='_blank' rel="noreferrer">
					<div className={classes.mobileLinkButton}>
						<Typography variant='h4'>
					Open site
						</Typography>
					</div>
				</a>)}
			<div className={classes.contentContainer}>
				<div className={classes.projectInfoContainer}>
					<Typography variant='h2' block className={classes.title}>{name}</Typography>
					<Description description={description}/>
					<Typography variant='h4' block className={classes.roleDescription}>{roleDescription}</Typography>
					<div className={classes.listContainer}>
						<List options={listOfResp}/>
					</div>
				</div>
				<div className={classes.sideContainer}>
					{siteUrl && (
						<a href={siteUrl} target='_blank' rel="noreferrer">
							<Button className={classes.button}>
								Open site
							</Button>
						</a>
					)}
					<img className={classes.manImg} src={manMap[projectName]} alt='Man with tv'/>
				</div>
			</div>

		</div>);
};
