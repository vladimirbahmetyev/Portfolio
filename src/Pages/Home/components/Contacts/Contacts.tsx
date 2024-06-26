import {FC, useEffect, useState} from "react";
import {useStyle} from "./Contacts.styles";
import {Instagram, LinkedIn, Telegram, Github, Check} from "icons";
import {Button, Input, Typography} from "ui-kit";
import {CircleTrack, Track, TrackMobile} from "./Assets";
import {AnimatePresence, motion} from "framer-motion";
import {send} from "emailjs-com";


type FocusElementType = "name" | "email" | "message" | ""

export const Contacts:FC = () => {
	const [focus, setFocus] = useState<FocusElementType>("");
	const [name, setName] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [message, setMessage] = useState<string>("");
	const [isButtonFocus, setIsButtonFocus] = useState<boolean>(false);

	const [isEmailCopied, setIsEmailCopied] = useState<boolean>(false);
	const [isPhoneCopied, setIsPhoneCopied] = useState<boolean>(false);
	const [isMessageSent, setIsMessageSent] = useState<boolean>(false);

	const [error, setError] = useState<string>("");

	const onPhoneClick = () => {
		setIsPhoneCopied(true);
		navigator.clipboard.writeText("+955 522 222 819");
	};
	const onEmailClick = () => {
		setIsEmailCopied(true);
		navigator.clipboard.writeText("vladimirbakhmetevwork@gmail.com");
	};

	const onEmailSubmit = () => {
		if(!name){
			setError("Name is empty :(");
			return;
		}
		if(!email){
			setError("Email is empty :(");
			return;
		}
		const isEmail = !!email.match(/^\S+@\S+\.\S+$/);
		if(!isEmail){
			setError("The email doesn't look like an email ~_~");
			return;
		}
		if(!message){
			setError("Message is empty :O");
			return;
		}

		send("service_2tb7cto", "template_i94yxrr", {
			sender_name:name,
			sender_email: email,
			message: message
		},
		"e98n-xW02BbB6H1GP"
		).then(() => setIsMessageSent(true));
	};


	useEffect(() => {
		if(isPhoneCopied){
			const timer = setTimeout(() => setIsPhoneCopied(false), 3000);
			return () => clearTimeout(timer);
		}
	}, [isPhoneCopied]);

	useEffect(() => {
		if(isEmailCopied){
			const timer = setTimeout(() => setIsEmailCopied(false), 3000);
			return () => clearTimeout(timer);
		}
	}, [isEmailCopied]);

	useEffect(() => {
		if(isMessageSent){
			const timer = setTimeout(() => setIsMessageSent(false), 6000);
			return () => clearTimeout(timer);
		}
	}, [isMessageSent]);

	useEffect(() => {
		if(error){
			const timer = setTimeout(() => setError(""), 3000);
			return () => clearTimeout(timer);
		}
	}, [error]);


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
						onClick={onEmailSubmit}
					>
						Send message
					</Button>
				</div>
				<div className={classes.contactsContainer}>
					<div className={classes.contact} onClick={onPhoneClick}>
						<Typography variant='h4' block>Phone</Typography>
						<Typography variant='body' block>+955 522 222 819</Typography>
					</div>
					<div className={classes.contact} onClick={onEmailClick}>
						<Typography variant='h4' block>Email</Typography>
						<Typography variant='body' block>vladimirbakhmetevwork@gmail.com</Typography>
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
			<AnimatePresence>
				{isEmailCopied && (
					<motion.img className={classes.copyMessage}
						src='/images/emailCopy.webp'
						alt='Copy email message'
						initial={{ opacity: 0, right:-500, rotate:"100deg" }}
						animate={{ opacity: 1, right:0, rotate:"0deg" }}
						exit={{ opacity: 0, right:-500, rotate:"100deg" }}
					/>

				)}
				{isPhoneCopied && (
					<motion.img className={classes.copyMessage}
						initial={{ opacity: 0, right:-500, rotate:"100deg" }}
						animate={{ opacity: 1, right:0, rotate:"0deg" }}
						exit={{ opacity: 0, right:-500, rotate:"100deg" }}
						src='/images/phoneCopy.webp'
						alt='Copy phone message'
					/>

				)}
				{isMessageSent && (
					<motion.div className={classes.messageNotification}
						transformTemplate={({y}) => `translateY(${y})`}
						initial={{ y:"100%" }}
						animate={{  y:"0" }}
						exit={{  y:"110%" }}
					>
						<Check style={{minWidth: 30, minHeight: 30}}/>
						<Typography color='black' variant='h4' block>
							Your message has been sent! I will reply shortly. If I&apos;m busy, the cat will answer you.
						</Typography>
					</motion.div>
				)}
				{error && (
					<motion.div className={classes.messageNotification}
						transformTemplate={({y}) => `translateY(${y})`}
						initial={{ y:"100%" }}
						animate={{  y:"0" }}
						exit={{  y:"110%" }}
					>
						<Typography color='black' variant='h4' block>
							{error}
						</Typography>
					</motion.div>
				)}
			</AnimatePresence>
		</div>);
};
