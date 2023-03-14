import type { AppProps } from "next/app";

import { StrictMode } from "react";

import "../styles/index.scss";

import Header from "../components/Header";
import LinksListOrder from "components/contentBlocks/Links-Basket";

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
    return (
        <StrictMode>
            <Header />
            <LinksListOrder />
            <Component {...pageProps} />
        </StrictMode>
    );
};

export default App;
