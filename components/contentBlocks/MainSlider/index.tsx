import Slider from "react-slick";

import IImage from "./images.interface";

import Trans from "inc/locale/Trans";

import NextArrow from "helpers/NextArrow";
import PrevArrow from "helpers/PrevArrow";

import Button from "components/UI/Button";

const MainSlider = (): JSX.Element => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow onClick={(): void => {}} />,
        prevArrow: <PrevArrow onClick={(): void => {}} />,
    };

    const images: IImage[] = [
        {
            title: 'MacBook Pro 14" M2',
            description: "2022 / 3000$",
            src: "/images/slider/macbook-slider.png",
            link: "/macbooks",
        },
        {
            title: "Iphone 14 Pro Max",
            description: "2022 / 2000$",
            src: "/images/slider/iphone-slider.png",
            link: "/iphones",
        },
        {
            title: 'Apple iPad Pro 12.9" 2022 M2',
            description: "2022 / 1079$",
            src: "/images/slider/ipad-slider.png",
            link: "/ipads",
        },
    ];

    return (
        <section className="container mt-10 main-slider">
            <Slider
                className="d-flex align-items-center justify-content-between"
                {...settings}
            >
                {images.map((img: IImage) => (
                    <div key={img.title} className="slider-wrapper">
                        <div className="img-wrapper">
                            <div key={img.title} className="img-item">
                                <img
                                    src={img.src}
                                    alt={img.title}
                                    className="img-fluid"
                                />
                            </div>
                            <div className="img-text">
                                <h1>{img.title}</h1>
                                <p>{img.description}</p>
                            </div>
                        </div>
                        <div className="buttons-wrapper">
                            <Button>
                                <h5>
                                    <Trans string="???????????????????? ??????????????" />
                                </h5>
                            </Button>
                            <Button>
                                <h5>
                                    <Trans string="???????????? ?????????? ????????????" />
                                </h5>
                            </Button>
                        </div>
                    </div>
                ))}
            </Slider>
            <div className="main-page-slider-bg"></div>
        </section>
    );
};

export default MainSlider;
