import { useState, useEffect } from "react";

import Slider from "react-slick";

import Card from "components/UI/Card";

import IProduct from "interfaces/product.interface";

import NextArrow from "helpers/NextArrow";
import PrevArrow from "helpers/PrevArrow";

import ProductsShortProps from "interfaces/products.props";

const IpadsShort = ({ products }: ProductsShortProps): JSX.Element => {
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

    return (
        <section className="container row justify-content-between mt-4 slider-details">
            <Slider
                className="d-flex align-items-center justify-content-between"
                {...settings}
            >
                {products.map((macbook: IProduct) => (
                    <Card {...macbook} size="sm" key={String(macbook.id)} />
                ))}
            </Slider>
        </section>
    );
};

export default IpadsShort;
