import {
	ButtonHTMLAttributes,
	DetailedHTMLProps,
} from "react";

export default interface ButtonProps
	extends DetailedHTMLProps<
		ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	> { };