import { SlArrowRight } from "react-icons/sl";

import NextArrowProps from "./nextArrow.props";

const NextArrow = ({ onClick }: NextArrowProps): JSX.Element => {
    return (
        <button className="arrow" onClick={onClick}>
            <SlArrowRight />
        </button>
    );
};

export default NextArrow;
