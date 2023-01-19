import {FC, useState} from "react";
import {useStyle} from "./Accordion.styles";
import {Typography} from "../Typography";

type SkillLevelType = 1 | 2 | 3

interface IAccordionProps {
	skillName: string;
	subSkillList: string[];
	skillLevel: SkillLevelType
}

export const Accordion: FC<IAccordionProps> = ({skillName, skillLevel, subSkillList}) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const {classes} = useStyle({isOpen});
	return (
		<div className={classes.accordionContainer}>
			<div className={classes.accordionHead}>
				<div className={classes.starContainer}></div>
				<Typography variant='h3' block>{skillName}</Typography>

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
