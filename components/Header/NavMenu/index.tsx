import Link from "next/link";

import Trans from "inc/locale/Trans";

import TitleBordered from "components/UI/TitleBordered";

import { NavMenuProps } from "./navItems.interface";
import { SizeProps } from "./navItems.interface";

const NavMenu = ({ size }: SizeProps) => {
    const navMenu: NavMenuProps[] = [
        {
            title: "Macbook",
            link: "/macbooks",
        },
        {
            title: "Iphone",
            link: "/iphones",
        },
        {
            title: "iPad",
            link: "/ipads",
        },
        {
            title: "Сервисы",
            link: "/services",
        },
        {
            title: "Новинки",
            link: "/novelties",
        },
    ];

    return (
        <>
            {navMenu.map((nav) => (
                <h6 key={nav.link} className={`${size == "sm" && "mt-4"}`}>
                    <Link
                        className={`${
                            size !== "sm" ? "nav-item" : "nav-item-sm"
                        }`}
                        href={nav.link}
                    >
                        <TitleBordered>
                            <Trans string={nav.title} />
                        </TitleBordered>
                    </Link>
                </h6>
            ))}
        </>
    );
};

export default NavMenu;
