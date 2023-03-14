import Link from "next/link";

import { BsInstagram, BsYoutube } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";

const Links = (): JSX.Element => {
    return (
        <div className="links">
            <Link href="https://www.instagram.com/apple-shop/" target="_blank">
                <BsInstagram />
            </Link>
            <Link
                href="https://www.youtube.com/channel/FCNDIHmq1IAGfjoOqBXvxPWg"
                target="_blank"
            >
                <BsYoutube />
            </Link>
            <Link href="https://t.me/apple-shop" target="_blank">
                <FaTelegramPlane />
            </Link>
        </div>
    );
};

export default Links;
