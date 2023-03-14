import { GetStaticProps } from "next";
import Head from "next/head";
import { NextRouter, useRouter } from "next/router";

import { useState, useEffect } from "react";

import axios from "axios";

import MainSlider from "components/contentBlocks/MainSlider";
import AboutUs from "components/contentBlocks/AboutUs";
import AutoSlider from "components/contentBlocks/AutoSlider";
import MacbookBlock from "components/contentBlocks/Macbook";
import MacbooksShort from "components/contentBlocks/MacbooksShort";
import IphoneBlock from "components/contentBlocks/Iphone";
import IphonesShort from "components/contentBlocks/IphonesShort";
import IpadBlock from "components/contentBlocks/Ipad";
import IpadsShort from "components/contentBlocks/IpadsShort";

import IProduct from "interfaces/product.interface";

const Home = ({ macbooks, iphones, ipads }: HomeProps): JSX.Element => {
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");

    const router: NextRouter = useRouter();

    useEffect((): void => {
        switch (router.locale) {
            case "ru":
                setTitle(
                    "Купить технику Apple в Украине по цене из Америки | Apple Shop"
                );
                setDescription(
                    "Любая техника Apple со скидкой до 30%! Бесплатная доставка по Киеву. 3 года гарантии от производителя. Выбирайте любой гаджет и оформляйте заказ"
                );
                break;

            case "uk":
                setTitle(
                    "Придбати техніку Apple в Україні за ціною з Аммерики | Apple Shop"
                );
                setDescription(
                    "Будь-яка техніка Apple зі знижкою до 30%! Безкоштовна доставка по Києву. 3 роки гарантії від виробника. Обирайте будь-який гаджет і оформляйте замовлення."
                );
                break;

            case "en":
                setTitle(
                    "Buy Apple equipment in Ukraine at American prices | Apple Shop"
                );
                break;
            default:
                setTitle(
                    "Buy Apple equipment in Ukraine at American prices | Apple Shop"
                );
                setDescription(
                    "Any Apple device with a discount of up to 30%! Free delivery in Kyiv. 3-year manufacturer's warranty. Choose any gadget and place an order."
                );
        }
    }, [router.locale]);

    return (
        <>
            <Head>
                <title>{title}</title>
                <link
                    rel="icon"
                    type="images/png"
                    href="https://www.realclearfoundation.org/asset/img/apple_icon_white.png"
                />
                <meta name="description" content={description} />
            </Head>
            <main>
                <MainSlider />
                <AboutUs />
                <AutoSlider />
                <MacbookBlock />
                <MacbooksShort products={macbooks} />
                <IphoneBlock />
                <IphonesShort products={iphones} />
                <IpadBlock />
                <IpadsShort products={ipads} />
            </main>
        </>
    );
};

export default Home;

interface HomeProps extends Record<string, unknown> {
    macbooks: IProduct[];
    iphones: IProduct[];
    ipads: IProduct[];
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
    const { data: macbooks } = await axios.get<IProduct[]>(
        process.env.NEXT_PUBLIC_BACKEND_URL + "short-macbooks"
    );
    const { data: iphones } = await axios.get<IProduct[]>(
        process.env.NEXT_PUBLIC_BACKEND_URL + "short-iphones"
    );
    const { data: ipads } = await axios.get<IProduct[]>(
        process.env.NEXT_PUBLIC_BACKEND_URL + "short-ipads"
    );
    return {
        props: {
            macbooks: macbooks,
            iphones: iphones,
            ipads: ipads,
        },
    };
};
