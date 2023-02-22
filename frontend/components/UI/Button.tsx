import { ReactNode } from "react";

const Button = ({ children }: { children: ReactNode }) => {
    return <button className="btn-ui">{children}</button>;
};

export default Button;
