import Head from "next/head";
import MainSlider from "components/contentBlocks/MainSlider";
import AboutUs from 'components/AboutUs';

const Home = (): JSX.Element => {
    return (
        <>
            <Head>
                <title>
                    Купить технику Apple в Украине по цене из Америки | Apple
                    Shop
                </title>
                <link
                    rel="icon"
                    type="images/png"
                    href="https://www.realclearfoundation.org/asset/img/apple_icon_white.png"
                />
                <meta
                    name="description"
                    content="Любая техника Apple со скидкой до 30%!
                    Бесплатная доставка по Киеву.
                    3 года гарантии от производителя. Выбирайте любой гаджет и оформляйте заказ"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
            </Head>
            <main>
                <MainSlider />
                <AboutUs />
            </main>
        </>
    );
};

export default Home;
