import Links from "./Links";
import ListOrder from "./ListOrder";

const LinksListOrder = (): JSX.Element => {
    return (
        <div className="links-list-order d-flex align-items-center justify-content-between">
            <Links />
            <ListOrder />
        </div>
    );
};

export default LinksListOrder;
