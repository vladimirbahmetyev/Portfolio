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

const manMap: Record<ProjectUrlType, {manUrl:string, screenUrl: string}> = {
	Mugler:
		{
			manUrl:"/images/project/m4.png",
			screenUrl:"/images/project/s4.png"
		},
	Metamap: {
		manUrl:"/images/project/m1.png",
		screenUrl:"/images/project/s1.png"
	},
	Jobswidget: {
		manUrl:"/images/project/m2.png",
		screenUrl:"/images/project/s2.png"
	},
	CorpPass: {
		manUrl:"/images/project/m6.png",
		screenUrl:"/images/project/s6.png"
	},
	GameGreed: {
		manUrl:"/images/project/m3.png",
		screenUrl:"/images/project/s3.png"
	},
	MyGlo: {
		manUrl:"/images/project/m5.png",
		screenUrl:"/images/project/s5.png"
	},
	Shopic:{
		manUrl:"/images/project/m7.png",
		screenUrl:"/images/project/s7.png"
	},
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
			<div className={classes.mobileImgContainer}>
				<img className={classes.manImgMobile} src={manMap[projectName].manUrl} alt='Man with tv'/>
				<img className={classes.screenImgMobile} src={manMap[projectName].screenUrl} alt='Project screenshot'/>
			</div>
			{siteUrl && (
				<a href={siteUrl} target='_blank' rel="noreferrer" className={classes.mobileLink}>
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
					<img className={classes.manImg} src={manMap[projectName].manUrl} alt='Man with tv'/>
					<img className={classes.screenImg} src={manMap[projectName].screenUrl} alt='Project screen'/>
				</div>
			</div>

		</div>);
};
