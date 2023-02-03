import {FC, useState} from "react";
import {useStyle} from "./Contacts.styles";
import {Instagram, LinkedIn, Telegram, Github} from "icons";
import {Button, Input, Typography} from "ui-kit";
import {CircleTrack, Track, TrackMobile} from "./Assets";


type FocusElementType = "name" | "email" | "message" | ""

export const Contacts:FC = () => {
	const [focus, setFocus] = useState<FocusElementType>("");
	const [name, setName] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [message, setMessage] = useState<string>("");
	const [isButtonFocus, setIsButtonFocus] = useState<boolean>(false);
	const {classes, cx} = useStyle();

	const animationClasses: Record<FocusElementType, string> = {
		name: classes.nameTrackFocus,
		email: classes.emailFocus,
		message: classes.messageFocus,
		"":""
	};
	const animationClassesMobile: Record<FocusElementType, string> = {
		name: classes.nameFocusMobile,
		email: classes.emailFocusMobile,
		message: classes.messageFocusMobile,
		"":""
	};

	return (
		<div className={classes.container} id='contacts'>
			<img src='/images/titles/contacts.webp' className={classes.contactsTitle} alt='Contacts title'/>
			<Typography className={classes.description} block variant='body'>I’m interested in freelance opportunities – especially ambitious or large projects. However, if you have other request or question, don’t hesitate to use the form.</Typography>
			<div className={classes.contentContainer}>
				<div className={classes.formContainer} >
					<Track className={cx(classes.animationTrack, isButtonFocus ? classes.buttonHover :  animationClasses[focus]) }/>
					<TrackMobile className={cx(classes.animationTrackMobile, isButtonFocus ? classes.buttonHoverMobile : animationClassesMobile[focus])}/>
					<div className={classes.infoContainer}>
						<Input
							value={name}
							onChange={setName}
							label='Name'
							onFocus={() => setFocus("name")}
							className={classes.topInput}
						/>
						<Input value={email}
							onChange={setEmail}
							label='Email'
							type='email'
							onFocus={() => setFocus("email")}
							className={classes.topInput}
						/>
					</div>
					<Input
						value={message}
						onChange={setMessage}
						label='Message'
						onFocus={() => setFocus("message")}
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
						<a className={classes.linkContainer} href='https://www.instagram.com/vladimirstirlingit/' target='_blank' rel="noreferrer">
							<CircleTrack className={classes.circleTrack}/>
							<Instagram/>
						</a>
						<a className={classes.linkContainer} href='https://t.me/stirlingit' target='_blank' rel="noreferrer">
							<CircleTrack className={classes.circleTrack}/>
							<Telegram/>
						</a>
						<a className={classes.linkContainer} href='https://www.linkedin.com/in/stirlingit/' target='_blank' rel="noreferrer">
							<CircleTrack className={classes.circleTrack}/>
							<LinkedIn/>
						</a>
						<a className={classes.linkContainer} href='https://github.com/vladimirbahmetyev' target='_blank' rel="noreferrer">
							<CircleTrack className={classes.circleTrack}/>
							<Github/>
						</a>
					</div>
				</div>
			</div>
			<img src='/images/catEnd.webp' className={classes.catEnd}  alt='cat with sign'/>
		</div>);
};
