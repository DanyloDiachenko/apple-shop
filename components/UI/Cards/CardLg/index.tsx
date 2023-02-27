import Image from "next/image";
import Link from "next/link";

import Trans from "inc/locale/Trans";

import Button from "components/UI/Button";

import IProps from "./props.interface";

const CardLg = (props: IProps) => {
    const {
        key,
        id,
        title,
        src,
        isNovelty,
        isDiscount,
        rate,
        price,
        prevPrice,
    } = props;

    let rateArray: number[] = [];
    for (let i = 0; i <= rate - 1; i++) {
        rateArray.push(i);
    }

    return (
        <article key={key} className="card-lg">
            <h6 className="text-center title">{title}</h6>
            <div className="novelty-discount">
                {isNovelty && (
                    <div>
                        <h6>Новинка</h6>
                    </div>
                )}
                {isDiscount && (
                    <div>
                        <h6>Скидка</h6>
                    </div>
                )}
            </div>
            <div className="d-flex justify-content-center">
                <img src={src} alt={title} className="img-fluid img-product" />
            </div>
            <div className="content">
                <div className="d-flex justify-content-center gap-2 mt-4 rate">
                    {rateArray.map((num: number) => (
                        <Image
                            key={num}
                            width={50}
                            height={50}
                            src="/images/icons/star.svg"
                            alt="star"
                        />
                    ))}
                </div>
                <div className="price-buy mt-4 pb-4">
                    <div className="price">
                        <h6>$ {price}</h6>
                        {prevPrice && (
                            <h6 className="price-past">$ {prevPrice}</h6>
                        )}
                    </div>
                    <div>
                        <Link href={`/macbooks/${id}`}>
                            <Button>
                                <h6>
                                    <Trans string="Купить" />
                                </h6>
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default CardLg;
