import { PropsWithChildren } from "react";

import ButtonProps from "./button.props";

const Button = ({ children, ...props }: PropsWithChildren<ButtonProps>) => {
    return (
        <button className="btn-ui" {...props}>
            {children}
        </button>
    );
};

export default Button;
