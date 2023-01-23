import {FC} from "react";
import {useStyle} from "./Project.styles";
import {useNavigate, useParams} from "react-router-dom";
import {Navigation, Typography} from "ui-kit";
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

			<div className={classes.contentContainer}>
				<div className={classes.projectInfoContainer}>
					<Typography variant='h2' block>{name}</Typography>
					<Description description={description}/>
					<Typography variant='h4' block>{roleDescription}</Typography>
				</div>
			</div>

		</div>);
};
