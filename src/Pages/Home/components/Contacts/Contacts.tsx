import {FC, useState} from "react";
import {useStyle} from "./Contacts.styles";
import {ContactsTitle, HH, Instagram, LinkedIn, Telegram} from "icons";
import {Button, Input, Typography} from "ui-kit";
import {Track, TrackMobile} from "./Assets";
import {useScreenWidth} from "../../../../shared";

export const Contacts:FC = () => {
	const [focus, setFocus] = useState<string>("");
	const [name, setName] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [message, setMessage] = useState<string>("");
	const [isButtonFocus, setIsButtonFocus] = useState<boolean>(false);
	const width = useScreenWidth();
	const {classes, cx} =useStyle({screenWidth: width});

	return (
		<div className={classes.container} id='contacts'>
			<ContactsTitle className={classes.contactsTitle}/>
			<Typography className={classes.description} block variant='body'>I’m interested in freelance opportunities – especially ambitious or large projects. However, if you have other request or question, don’t hesitate to use the form.</Typography>
			<div className={classes.contentContainer}>
				<div className={classes.formContainer}>
					<Track className={cx(classes.animationTrack, isButtonFocus ? classes.buttonHover :  focus) }/>
					<TrackMobile className={classes.animationTrackMobile}/>
					<div className={classes.infoContainer}>
						<Input
							value={name}
							onChange={setName}
							label='Name'
							onFocus={() => setFocus(classes.nameTrackFocus)}
							className={classes.topInput}
						/>
						<Input value={email}
							onChange={setEmail}
							label='Email'
							type='email'
							onFocus={() => setFocus(classes.emailFocus)}
							className={classes.topInput}
						/>
					</div>
					<Input
						value={message}
						onChange={setMessage}
						label='Message'
						onFocus={() => setFocus(classes.messageFocus)}
						className={classes.bottomInput}
					/>
					<Button
						className={classes.button}
						transparent={isButtonFocus}
						onMouseEnter={() => setIsButtonFocus(true)}
						onMouseLeave={() => setIsButtonFocus(false)}
					>
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
