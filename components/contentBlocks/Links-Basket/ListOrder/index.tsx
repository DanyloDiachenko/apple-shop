import Link from "next/link";

const ListOrder = (): JSX.Element => {
    return (
        <Link href="/order" className="list-order">
            {true && (
                <div className="d-flex align-items-center justify-content-center list-order-lentgh">
                    1
                </div>
            )}
            <img src="/images/icons/basket.svg" alt="order" />
        </Link>
    );
};

export default ListOrder;
