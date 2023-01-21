import {FC} from "react";
import {useStyle} from "./Project.styles";
import {useParams} from "react-router-dom";

export const Project: FC = () => {
	const {classes} = useStyle();
	const {projectName} = useParams<{projectName: string}>();
	return <div>{projectName}</div>;
};
