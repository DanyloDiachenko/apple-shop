import Head from "next/head";
import MainSlider from "components/contentBlocks/MainSlider";
import AboutUs from "components/contentBlocks/AboutUs";
import AutoSlider from "components/contentBlocks/AutoSlider";
import MacbookBlock from "components/contentBlocks/Macbook";
import MacbooksShort from "components/contentBlocks/MacbooksShort";
import IphoneBlock from 'components/contentBlocks/Iphone';
import IphonesShort from 'components/contentBlocks/IphonesShort';

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
                <AutoSlider />
                <MacbookBlock />
                <MacbooksShort />
                <IphoneBlock />
                <IphonesShort />
            </main>
        </>
    );
};

export default Home;
