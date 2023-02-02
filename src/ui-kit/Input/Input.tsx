import {FC, useState} from "react";
import {useStyle} from "./Input.styles";
import {Typography} from "../Typography";

type InputType = "text" | "email"

interface IInputProps {
	value: string
	onChange: (value: string) => void,
	className?:string,
	onFocus?: () => void
	onBlur?:() => void
	label?: string,
	type?: InputType
}

export const Input:FC<IInputProps> = ({className= "",label = "",type = "text", onChange, value, ...rest}) => {
	const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const {target: {value}} = event;
		onChange(value);
	};
	const [isFocus, setIsFocus] = useState<boolean>(false);
	const handleFocus = () => {
		const {onFocus} = rest;
		if(onFocus){
			onFocus();
		}
		setIsFocus(true);

	};
	const handleBlur = () => {
		const {onBlur} = rest;
		if(onBlur){
			onBlur();
		}
		setIsFocus(false);

	};

	const isLabelUp = !!value || isFocus;
	const {classes, cx} = useStyle({isLabelUp});
	return <label className={cx(className, classes.inputContainer)} >
		{label && (
			<Typography variant='body' className={classes.inputLabel}>{label}</Typography>
		)}
		<Typography variant='body' block className={classes.inputSubcontainer}>
			<input {...rest} onChange={handleOnChange} className={classes.input} type={type} onFocus={handleFocus} onBlur={handleBlur} value={value}/>
		</Typography>
	</label>;
};
