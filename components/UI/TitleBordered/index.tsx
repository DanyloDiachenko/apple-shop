import TitleBorderedProps from "./titleBordered.interface";

const TitleBordered = ({ children }: TitleBorderedProps) => {
    return <span className="title-bordered">{children}</span>;
};

export default TitleBordered;
