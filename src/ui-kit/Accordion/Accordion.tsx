import {FC, useState} from "react";
import {useStyle} from "./Accordion.styles";
import {Typography} from "../Typography";
import {FilledStar, Minus, Plus, Star} from "icons";
import {List} from "../List";

type SkillLevelType = 1 | 2 | 3

interface IAccordionProps {
	skillName: string;
	subSkillList: string[];
	skillLevel: SkillLevelType,
	isOpenDefault?:boolean
}

const Level = ({level}:{level: number}) => {
	if(level === 1) {
		return (<><FilledStar/><Star/><Star/></>);
	}
	if(level === 2) {
		return (<><FilledStar/><FilledStar/><Star/></>);
	}
	return <><FilledStar/><FilledStar/><FilledStar/></>;
};

export const Accordion: FC<IAccordionProps> = ({skillName, skillLevel, subSkillList, isOpenDefault = false}) => {
	const [isOpen, setIsOpen] = useState<boolean>(isOpenDefault);
	const {classes} = useStyle({isOpen});
	return (
		<div className={classes.accordionContainer}>
			<div className={classes.accordionHead}>
				<div className={classes.starContainer}>
					<Level level={skillLevel}/>
				</div>
				<Typography variant='h3' block>{skillName}</Typography>
				{isOpen ? <Minus className={classes.icon} onClick={() => setIsOpen(false)}/> : <Plus className={classes.icon} onClick={() => setIsOpen(true)}/>}
			</div>
			<div className={classes.subskillContainer}>
				<List options={subSkillList}/>
			</div>
		</div>);
};
