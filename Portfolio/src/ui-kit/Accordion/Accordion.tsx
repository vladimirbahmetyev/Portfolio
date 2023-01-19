import {FC, useState} from "react";
import {useStyle} from "./Accordion.styles";
import {Typography} from "../Typography";
import {FilledStar, Minus, Plus, Star} from "icons";

type SkillLevelType = 1 | 2 | 3

interface IAccordionProps {
	skillName: string;
	subSkillList: string[];
	skillLevel: SkillLevelType
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

export const Accordion: FC<IAccordionProps> = ({skillName, skillLevel, subSkillList}) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
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
				{subSkillList.map((subSkill) => (
					<div className={classes.item} key={subSkill}>
						<div className={classes.dot}/>
						<Typography variant='body'>{subSkill}</Typography>
					</div>))}
			</div>
		</div>);
};
