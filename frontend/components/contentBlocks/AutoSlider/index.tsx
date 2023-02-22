import Slider from "react-slick";

const AutoSlider = (): JSX.Element => {
    const sliderSettings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
        speed: 18000,
        autoplaySpeed: 0,
        autoplay: true,
        cssEase: "linear",
        variableWidth: true,
        centerMode: true,
        arrows: false,
        dots: false,
        infinite: true,
    };

    return (
        <section className="mt-10">
            <Slider {...sliderSettings}>
                <div>
                    <img
                        className="img-fluid"
                        src="/images/banners/macbook-auto-slider.png"
                        alt="macbook"
                    />
                </div>
                <div>
                    <img
                        className="img-fluid"
                        src="/images/banners/iphone-auto-slider.png"
                        alt="macbook"
                    />
                </div>
                <div>
                    <img
                        className="img-fluid"
                        src="/images/banners/ipad-auto-slider.png"
                        alt="macbook"
                    />
                </div>
                <div>
                    <img
                        className="img-fluid"
                        src="/images/banners/macbook-auto-slider.png"
                        alt="macbook"
                    />
                </div>
                <div>
                    <img
                        className="img-fluid"
                        src="/images/banners/iphone-auto-slider.png"
                        alt="macbook"
                    />
                </div>
                <div>
                    <img
                        className="img-fluid"
                        src="/images/banners/ipad1-auto-slider.png"
                        alt="macbook"
                    />
                </div>
            </Slider>
        </section>
    );
};

export default AutoSlider;
