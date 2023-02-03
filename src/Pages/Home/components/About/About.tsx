import {FC} from "react";
import {useStyle} from "./About.styles";
import {Typography} from "ui-kit";
import { FilledStar, Star} from "icons";

export const About: FC = () => {
	const {classes} = useStyle();
	return(
		<div className={classes.aboutContainer} id='about'>
			<div className={classes.topContainer}>
				<img src='/images/computer.webp' alt='cat in the computer' className={classes.catInPc}/>
				<img src='/images/photo.jpg' alt='Vladimir in the forest' className={classes.photoMobile}/>
				<div className={classes.titleWithDescription}>
					<img src='/images/titles/about.webp' className={classes.aboutTitle} alt='about title'/>
					<Typography block variant='body' >
					Frontend Developer with 3.5 years of experience
and 5 years with passion to frontend.
						I love creating responsive and fast web applications that will
						benefit both businesses and people. Proficient in HTML, CSS, JS, React and other modern libraries and frameworks.
					</Typography>
				</div>
			</div>
			<div className={classes.bottomContainer}>
				<div className={classes.knowledgeContainer}>
					<div className={classes.itemContainer}>
						<Typography variant='h4' block>Education</Typography>
						<div className={classes.educationContainer}>
							<div className={classes.educationTitleContainer}>
								<Typography variant='h4'block>SPSU</Typography>
								<Typography variant='body'block>2017-2021</Typography>
							</div>
							<Typography variant='body' block>Bachelor, Fundamental Informatics and information technologies</Typography>
						</div>
					</div>
					<div className={classes.itemContainer}>
						<Typography variant='h4' block>Languages</Typography>
						<div className={classes.languageSubcontainer}>
							<div className={classes.languageContainer}>
								<Typography variant='h4' block>Russian</Typography>
								<Typography variant='description' block>Native</Typography>
								<div className={classes.starContainer}>
									<FilledStar/>
									<FilledStar/>
									<FilledStar/>
								</div>
							</div>
							<div className={classes.languageContainer}>
								<Typography variant='h4' block>English</Typography>
								<Typography variant='description' block>B2</Typography>
								<div className={classes.starContainer}>
									<FilledStar/>
									<FilledStar/>
									<Star/>
								</div>
							</div>
						</div>
					</div>
				</div>
				<img src='/images/tape.webp'alt='tape' className={classes.tap}/>
				<img src='/images/photo.jpg' alt='Vladimir in the forest' className={classes.photo}/>
			</div>
		</div>);
};
