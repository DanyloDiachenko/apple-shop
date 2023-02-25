import Trans from "inc/locale/Trans";

import Button from "components/UI/Button";

const IphoneBlock = () => {
    return (
        <section className="container mt-10 row align-items-center macbooks-main center">
            <div className="col-lg-6 col-md-12">
                <h4>Iphone 14 Pro Max</h4>
                <p className="mt-3">
                    <Trans string="Переработанная и развитая система питания от" />{" "}
                    <b>Apple 15 Bionic</b>{" "}
                    <Trans string="выдает турбо мощность" />,
                    <br /> <Trans string="на базе операционной системы" />{" "}
                    <b>IOS 16</b>
                </p>
                <Button>
                    <h6>
                        <b>
                            <Trans string="КУПИТЬ" />
                        </b>
                    </h6>
                </Button>
            </div>
            <div className="col-lg-6 col-md-12 right-col">
                <div className="img-wrapper">
                    <img
                        className="img-fluid"
                        src="/images/banners/macbook-main.png"
                        alt="macbook pro 14 m2"
                    />
                </div>
                <div className="main-page-maccbook-bg"></div>
            </div>
        </section>
    );
};

export default IphoneBlock;
