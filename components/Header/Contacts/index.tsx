import Link from "next/link";

import { AiFillPhone } from "react-icons/ai";
import { MdEmail } from "react-icons/md";

import TitleBordered from "components/UI/TitleBordered";

const Contacts = (): JSX.Element => {
    return (
        <div className="contacts justify-content-end">
            <div className="d-flex gap-5">
                <Link
                    href="tel:+380991234567"
                    className="d-flex gap-2 align-items-center"
                >
                    <AiFillPhone />
                    <TitleBordered>+38 (099) 123-45-67</TitleBordered>
                </Link>

                <Link
                    href="mailto:apple-shop@apshop.com"
                    className="d-flex gap-2 align-items-center"
                >
                    <MdEmail />
                    <TitleBordered>apple-shop@apshop.com</TitleBordered>
                </Link>
            </div>
        </div>
    );
};

export default Contacts;
