import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

interface IProps
    extends DetailedHTMLProps<
        ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    > {
    children: ReactNode;
}

const Button = ({ children, ...props }: IProps) => {
    return (
        <button className="btn-ui" {...props}>
            {children}
        </button>
    );
};

export default Button;
