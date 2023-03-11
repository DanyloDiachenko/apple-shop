import TitleBorderedProps from "./titleBordered.props";

const TitleBordered = ({ children }: TitleBorderedProps) => {
    return <span className="title-bordered">{children}</span>;
};

export default TitleBordered;
