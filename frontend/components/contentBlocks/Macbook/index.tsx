import Trans from "inc/locale/Trans";

import Button from "components/UI/Button";

const MacbookBlock = () => {
    return (
        <section className="container mt-10 row align-items-center macbooks-main center">
            <div className="col-lg-6 col-md-12">
                <h4>MacBook Pro 14{`"`} M2</h4>
                <p className="mt-3">
                    <Trans string="Переработанная и развитая система питания от" />{" "}
                    <b>
                        M2 <Trans string="чипа" />
                    </b>{" "}
                    <Trans string="выдает турбо мощность" />,
                    <br />{" "}
                    <b>
                        <Trans string="в 6x раз" />
                    </b>{" "}
                    <Trans string="больше чем в intel устройств" />
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

export default MacbookBlock;
