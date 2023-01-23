import {FC} from "react";
import {useStyle} from "./List.styles";
import {Typography} from "../Typography";

interface IListOptions {
	options: string[]
}

export const List: FC<IListOptions> = ({options}) => {
	const {classes} = useStyle();
	return (
		<>
			{options.map((option) => (
				<div className={classes.item} key={option}>
					<div className={classes.dot}/>
					<Typography variant='body'>{option}</Typography>
				</div>))}
		</>);
};
