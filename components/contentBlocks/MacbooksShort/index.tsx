import { useState, useEffect } from "react";

import Slider from "react-slick";

import { SlArrowRight, SlArrowLeft } from "react-icons/sl";

import Card from "components/UI/Card";

import IMacbook from "./macbook.interface";

const MacbooksShort = () => {
    const [macbooks, setMacbooks] = useState<IMacbook[]>([]);

    const PrevArrow = ({ onClick }: { onClick: () => void }): JSX.Element => {
        return (
            <button className="arrow" onClick={onClick}>
                <SlArrowLeft />
            </button>
        );
    };
    const NextArrow = ({ onClick }: { onClick: () => void }): JSX.Element => {
        return (
            <button className="arrow" onClick={onClick}>
                <SlArrowRight />
            </button>
        );
    };
    const settings = {
        infinite: true,
        slidesToShow: 3,
        dots: true,
        slidesToScroll: 1,
        nextArrow: <NextArrow onClick={() => {}} />,
        prevArrow: <PrevArrow onClick={() => {}} />,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 840,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    useEffect(() => {
        fetch(process.env.NEXT_PUBLIC_BACKEND_URL + "short-macbooks")
            .then((res: Response) => res.json())
            .then((data: IMacbook[]) => setMacbooks(data));
    }, []);

    console.log(macbooks);

    return (
        <section className="container row justify-content-between mt-4 slider-details">
            <Slider
                className="d-flex align-items-center justify-content-between"
                {...settings}
            >
                {macbooks.map((macbook: IMacbook) => (
                    <Card {...macbook} size="lg" key={String(macbook.id)} />
                ))}
            </Slider>
        </section>
    );
};

export default MacbooksShort;
