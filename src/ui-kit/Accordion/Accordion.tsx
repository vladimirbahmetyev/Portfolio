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
	isOpen:boolean,
	setIsOpen: (value: string) => void
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

export const Accordion: FC<IAccordionProps> = ({skillName, skillLevel, subSkillList, isOpen = false, setIsOpen}) => {
	const {classes} = useStyle({isOpen, elementsCount: subSkillList.length});
	return (
		<div className={classes.accordionContainer}>
			<div className={classes.accordionHead} onClick={() => isOpen? setIsOpen("") : setIsOpen(skillName)}>
				<div className={classes.starContainer}>
					<Level level={skillLevel}/>
				</div>
				<Typography variant='h3' block>{skillName}</Typography>
				{isOpen ? <Minus className={classes.icon} /> : <Plus className={classes.icon} />}
			</div>
			<div className={classes.subskillContainer}>
				<List options={subSkillList}/>
			</div>
		</div>);
};
