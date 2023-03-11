import Trans from "inc/locale/Trans";

import IAboutUS from "./about.interface";

const AboutUs = (): JSX.Element => {
    const aboutUs: IAboutUS[] = [
        {
            title: "5",
            description: "Лет на рынке",
        },
        {
            title: "2000+",
            description: "Купленных гаджетов",
        },
        {
            title: "30%",
            description: "Значительная выгода",
        },
    ];

    return (
        <section
            className="container mt-10 row align-items-center about"
            style={{ maxWidth: "1400px" }}
        >
            <div
                className="col-lg-6 col-md-12"
                style={{ position: "relative" }}
            >
                <div className="main-page-about-bg"></div>
                <h2>
                    <Trans string="Мир AppleShop" />
                </h2>
                <p className="mt-4">
                    <Trans string="Откройте для себя" /> <b>«APPLE SHOP»</b>{" "}
                    <Trans
                        string="как
                    бренд, сервис и компанию на нашем веб-сайте. Здесь вы
                    найдете интересующую вас информацию о"
                    />{" "}
                    <b>
                        <Trans string="моделях" />
                    </b>
                    ,{" "}
                    <Trans
                        string="получите поддержку о технологиях и процессе выбора и
                    покупки"
                    />{" "}
                    <b>
                        <Trans string="нового гаджета" />
                    </b>
                    .
                </p>
            </div>
            <div className="col-lg-6 col-md-12 about-right-col">
                <div>
                    {aboutUs.map((about: IAboutUS) => (
                        <div key={about.title} className="about-item">
                            <h3>{about.title}</h3>
                            <p>
                                <Trans string={about.description} />
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
