import { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

const TitleBordered = ({ children }: Props) => {
    return <span className="title-bordered">{children}</span>;
};

export default TitleBordered;
