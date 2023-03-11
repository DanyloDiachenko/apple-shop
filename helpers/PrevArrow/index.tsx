import { SlArrowLeft } from "react-icons/sl";

import PrevArrowProps from "./prevArrow.props";

const PrevArrow = ({ onClick }: PrevArrowProps): JSX.Element => {
    return (
        <button className="arrow" onClick={onClick}>
            <SlArrowLeft />
        </button>
    );
};

export default PrevArrow;
