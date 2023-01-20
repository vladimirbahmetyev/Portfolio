import {FC} from "react";
import {useStyle} from "./Skills.styles";
import {Accordion} from "ui-kit";
import {SkillsTitle} from "icons";

const mockSkill= "React";
const mockSub = ["Hooks", "Redux", "Swr", "Redux-Form"];


export const Skills: FC = () => {
	const {classes} = useStyle();
	return (
		<div className={classes.skillsContainer}>
			<div className={classes.skillsColumn}>
				<SkillsTitle className={classes.skillsTitle}/>
				<Accordion skillName={mockSkill} subSkillList={mockSub} skillLevel={1}/>
				<Accordion skillName={mockSkill} subSkillList={mockSub} skillLevel={3}/>
				<Accordion skillName={mockSkill} subSkillList={mockSub} skillLevel={3}/>
				<Accordion skillName={mockSkill} subSkillList={mockSub} skillLevel={3}/>
				<Accordion skillName={mockSkill} subSkillList={mockSub} skillLevel={3}/>
			</div>
			<div className={classes.skillsColumn}>
				<Accordion skillName={mockSkill} subSkillList={mockSub} skillLevel={3}/>
				<Accordion skillName={mockSkill} subSkillList={mockSub} skillLevel={3}/>
				<Accordion skillName={mockSkill} subSkillList={mockSub} skillLevel={3}/>
				<Accordion skillName={mockSkill} subSkillList={mockSub} skillLevel={3}/>
				<Accordion skillName={mockSkill} subSkillList={mockSub} skillLevel={3}/>
				<Accordion skillName={mockSkill} subSkillList={mockSub} skillLevel={3}/>
			</div>
		</div>);
};
