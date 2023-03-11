import { useState, useEffect } from "react";

import Slider from "react-slick";

import Card from "components/UI/Card";

import NextArrow from "helpers/NextArrow";
import PrevArrow from "helpers/PrevArrow";

import MacbooksShortProps from "./macbooks.props";

import IProduct from "interfaces/product.interface";

const MacbooksShort = ({ macbooks }: MacbooksShortProps): JSX.Element => {
    const settings = {
        infinite: true,
        slidesToShow: 3,
        dots: true,
        slidesToScroll: 1,
        nextArrow: <NextArrow onClick={(): void => {}} />,
        prevArrow: <PrevArrow onClick={(): void => {}} />,
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

    return (
        <section className="container row justify-content-between mt-4 slider-details">
            <Slider
                className="d-flex align-items-center justify-content-between"
                {...settings}
            >
                {macbooks.map((macbook: IProduct) => (
                    <Card {...macbook} size="lg" key={String(macbook.id)} />
                ))}
            </Slider>
        </section>
    );
};

export default MacbooksShort;
