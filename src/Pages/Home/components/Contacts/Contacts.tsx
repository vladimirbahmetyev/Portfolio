import {FC} from "react";
import {useStyle} from "./Contacts.styles";
import {ContactsTitle, HH, Instagram, LinkedIn, Telegram} from "icons";
import {Button, Typography} from "ui-kit";
import {Track} from "./Assets";

export const Contacts:FC = () => {
	const {classes, cx} =useStyle();
	return (
		<div className={classes.container} id='contacts'>
			<ContactsTitle className={classes.contactsTitle}/>
			<Typography className={classes.description} block variant='body'>I’m interested in freelance opportunities – especially ambitious or large projects. However, if you have other request or question, don’t hesitate to use the form.</Typography>
			<div className={classes.contentContainer}>
				<div className={classes.formContainer}>
					<Track className={cx(classes.animationTrack, classes.emailFocus) }/>
					<div className={classes.infoContainer}>
						<div className={classes.inputContainer}>
							<Typography variant='body'>Name</Typography>
						</div>
						<div className={classes.inputContainer}>
							<Typography variant='body'>Email</Typography>
						</div>
					</div>
					<div className={classes.inputContainer}>
						<Typography variant='body'>Message</Typography>
					</div>
					<Button className={classes.button}>
						Send message
					</Button>
				</div>
				<div className={classes.contactsContainer}>
					<div className={classes.contact}>
						<Typography variant='h4' block>Phone</Typography>
						<Typography variant='body' block>+955 522 222 819</Typography>
					</div>
					<div className={classes.contact}>
						<Typography variant='h4' block>Email</Typography>
						<Typography variant='body' block>vladimir240298perm@gmail.com</Typography>
					</div>
					<div className={classes.socialContainer}>
						<Instagram/>
						<Telegram/>
						<LinkedIn/>
						<HH/>
					</div>
				</div>
			</div>
			<img src='/images/catEnd.png' className={classes.catEnd}  alt='cat with sign'/>
		</div>);
};
