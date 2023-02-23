import Trans from "inc/locale/Trans";

import Button from "components/UI/Button";

const CardLg = () => {
    return (
        <article className="col-lg-4 col-md-6 col-sm-12 card-lg my-3">
            <h6 className="text-center title">
                MacBook Pro 16” M2 Pro 512GB Space Gray 2023
            </h6>
            <div className="d-flex justify-content-center">
                <img src="/images/cards/macbook.png" alt="macbook" />
            </div>
            <div className="content">
                <div className="mx-auto d-flex justify-content-center gap-4 mt-4 rate">
                    <span>rate</span>
                    <span>rate</span>
                    <span>rate</span>
                    <span>rate</span>
                </div>
                <div className="price-buy mt-4 pb-4">
                    <div className="price">
                        <h6>$ 1000</h6>
                        <h6 className="price-past">$ 1100</h6>
                    </div>
                    <div>
                        <Button>
                            <h6>
                                <Trans string="Купить" />
                            </h6>
                        </Button>
                    </div>
                </div>
            </div>
            <div className="additional pb-4">
                <div className="d-flex align-items-center justify-content-between mt-4">
                    <span>Год</span>
                    <span>2023</span>
                </div>
                <div className="d-flex align-items-center justify-content-between mt-3">
                    <span>Год</span>
                    <span>2023</span>
                </div>
                <div className="d-flex align-items-center justify-content-between mt-3">
                    <span>Год</span>
                    <span>2023</span>
                </div>
                <div className="d-flex align-items-center justify-content-between mt-3">
                    <span>Год</span>
                    <span>2023</span>
                </div>
                <div className="d-flex align-items-center justify-content-between mt-3">
                    <span>Год</span>
                    <span>2023</span>
                </div>
                <div className="d-flex align-items-center justify-content-between mt-3">
                    <span>Год</span>
                    <span>2023</span>
                </div>
            </div>
        </article>
    );
};

export default CardLg;
