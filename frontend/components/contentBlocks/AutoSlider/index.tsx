import Slider from "react-slick";

import IImages from "./images.interface";

const AutoSlider = (): JSX.Element => {
    const images: IImages[] = [
        {
            src: "/images/banners/macbook-auto-slider.png",
            alt: "macbook",
        },
        {
            src: "/images/banners/iphone-auto-slider.png",
            alt: "iphone",
        },
        {
            src: "/images/banners/ipad-auto-slider.png",
            alt: "ipad",
        },
        {
            src: "/images/banners/macbook1-auto-slider.jpeg",
            alt: "macbook",
        },
        {
            src: "/images/banners/iphone1-auto-slider.jpg",
            alt: "iphone",
        },
        {
            src: "/images/banners/ipad1-auto-slider.png",
            alt: "ipad",
        },
    ];

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    autoplay: true,
                    swipeToSlide: true,
                },
            },
        ],
    };

    return (
        <section className="mt-10">
            <Slider {...settings}>
                {images.map((img) => (
                    <div key={img.src}>
                        <img
                            className="img-fluid"
                            src={img.src}
                            alt={img.alt}
                        />
                    </div>
                ))}
            </Slider>
        </section>
    );
};

export default AutoSlider;
