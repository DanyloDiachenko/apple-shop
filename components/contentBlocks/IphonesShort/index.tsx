import { useState, useEffect } from "react";

import Slider from "react-slick";

import Card from "components/UI/Card";

import IIphone from "interfaces/iphone.interface";

import NextArrow from "helpers/NextArrow";
import PrevArrow from "helpers/PrevArrow";

import IphonesShortProps from "./iphones.props";

const IphonesShort = ({ iphones }: IphonesShortProps): JSX.Element => {
    const settings = {
        infinite: true,
        slidesToShow: 4,
        dots: true,
        slidesToScroll: 1,
        nextArrow: <NextArrow onClick={() => {}} />,
        prevArrow: <PrevArrow onClick={() => {}} />,
        responsive: [
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 1250,
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

    /* useEffect(() => {
        fetch(process.env.NEXT_PUBLIC_BACKEND_URL + "short-iphones")
            .then((res: Response) => res.json())
            .then((data: IIphone[]) => setIphones(data));
    }, []); */

    return (
        <section className="container row justify-content-between mt-4 slider-details">
            <Slider
                className="d-flex align-items-center justify-content-between"
                {...settings}
            >
                {iphones.map((macbook: IIphone) => (
                    <Card {...macbook} size="sm" key={String(macbook.id)} />
                ))}
            </Slider>
        </section>
    );
};

export default IphonesShort;
