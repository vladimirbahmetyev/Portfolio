import {FC} from "react";
import {useStyle} from "./Contacts.styles";
import {ContactsTitle} from "icons";
import {Typography} from "../../ui-kit";

export const Contacts:FC = () => {
	const {classes} =useStyle();
	return (
		<div className={classes.contactsContainer}>
			<ContactsTitle className={classes.contactsTitle}/>
			<Typography className={classes.description} block variant='body'>I’m interested in freelance opportunities – especially ambitious or large projects. However, if you have other request or question, don’t hesitate to use the form.</Typography>
			<img src='/images/catEnd.png' className={classes.catEnd}/>
		</div>);
};
