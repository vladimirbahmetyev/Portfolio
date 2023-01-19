import {FC} from "react";
import {useStyle} from "./Skills.styles";
import {Accordion, Typography} from "ui-kit";

const mockSkill= "React";
const mockSub = ["Hooks", "Redux", "Swr", "Redux-Form"];
const mockLevel = 3;


export const Skills: FC = () => {
	const {classes} = useStyle();
	return (
		<div className={classes.skillsContainer}>
			<div className={classes.skillsColumn}>
				<Typography variant='h1' block className={classes.skillsTitle}>SKILLS</Typography>
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
