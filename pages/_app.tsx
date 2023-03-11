import type { AppProps } from "next/app";

import "../styles/index.scss";

import Header from "../components/Header";

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
    return (
        <>
            <Header />
            <Component {...pageProps} />
        </>
    );
};

export default App;
