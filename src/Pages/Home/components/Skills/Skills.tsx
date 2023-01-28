import {FC, useState} from "react";
import {useStyle} from "./Skills.styles";
import {Accordion, Button} from "ui-kit";
import {SkillsTitle} from "icons";
import {skillsList} from "./Skills.model";
import {useScreenWidth} from "shared";

const skillFirst = skillsList.slice(0, 6);
const skillSecond = skillsList.slice(6, 11);


export const Skills: FC = () => {
	const {classes} = useStyle();
	const [openSkill, setOpenSkill] = useState<string>("React");
	const width = useScreenWidth();
	const isMobile = width <= 481;
	const [showAll, setShowAll] = useState<boolean>(false);
	const onShowAllClick = () => setShowAll(true);
	return (
		<div className={classes.skillsContainer} id='skills'>
			<div className={classes.skillsColumn}>
				<SkillsTitle className={classes.skillsTitle}/>
				{skillFirst.map((skill) => (
					<Accordion
						{...skill}
						key={skill.skillName}
						isOpen={openSkill === skill.skillName}
						setIsOpen={setOpenSkill}
					/>
				))}
			</div>
			{(!isMobile ||  showAll) && (
				<div className={classes.skillsColumn}>
					{skillSecond.map((skill) =>(
						<Accordion
							{...skill}
							key={skill.skillName}
							isOpen={openSkill === skill.skillName}
							setIsOpen={setOpenSkill}
						/>
					))}
				</div>
			)}
			{isMobile && !showAll && (<Button onClick={onShowAllClick} className={classes.button}>Show All ({skillSecond.length})</Button>)}
		</div>);
};
