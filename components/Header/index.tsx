import Image from "next/image";
import Link from "next/link";

import { useState, useEffect } from "react";

import { RxHamburgerMenu } from "react-icons/rx";
import { TfiClose as CloseIcon } from "react-icons/tfi";

import Trans from "inc/locale/Trans";
import translate from "inc/locale/transFunc";

import NavMenu from "./NavMenu";

import LanguageChoose from "./LanguageChoose";

const Header = (): JSX.Element => {
    const [burgerMenu, setBurgerMenu] = useState<boolean>(false);

    const setPrevMenu = (): void => {
        setBurgerMenu(!burgerMenu);
    };

    return (
        <header className="container-fluid d-flex align-items-center">
            <div className="container row">
                <div className="col-7 d-flex align-items-center justify-content-between">
                    <Link href={"/"}>
                        <Image
                            src="/images/icons/logo.svg"
                            alt="logo"
                            width={40}
                            height={40}
                        />
                    </Link>
                    <NavMenu />
                </div>
                <div className="col-5 d-flex align-items-center justify-content-end right-col">
                    <div className="burger-menu">
                        {burgerMenu ? (
                            <CloseIcon fill="white" onClick={setPrevMenu} />
                        ) : (
                            <RxHamburgerMenu onClick={setPrevMenu} />
                        )}

                        {burgerMenu && (
                            <div className="content">
                                <div>
                                    <NavMenu size="sm" />
                                    <h6 className="mt-4">
                                        <Link
                                            className="nav-item-sm"
                                            href="/about-us"
                                        >
                                            <Trans string="О нас" />
                                        </Link>
                                    </h6>
                                    <div className="p-3 mt-4 input-wrapper input-wrapper-sm">
                                        <Image
                                            src="/images/icons/search.svg"
                                            alt="search"
                                            width={30}
                                            height={30}
                                        />
                                        <input
                                            placeholder={translate(
                                                "Найти гаджет"
                                            )}
                                        />
                                    </div>
                                    <LanguageChoose size="sm" />
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="p-3 input-wrapper">
                        <Image
                            src="/images/icons/search.svg"
                            alt="search"
                            width={30}
                            height={30}
                        />
                        <input
                            placeholder={translate("Найдите желаемый гаджет")}
                        />
                    </div>
                    <LanguageChoose />
                </div>
            </div>
        </header>
    );
};

export default Header;
