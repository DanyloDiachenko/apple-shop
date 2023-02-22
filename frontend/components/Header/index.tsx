import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";

import { useState, useEffect } from "react";

import { RxHamburgerMenu } from "react-icons/rx";
import { TfiClose as CloseIcon } from "react-icons/tfi";

import Trans from "inc/locale/Trans";
import translate from "inc/locale/transFunc";

import INavMenu from "./navMenu.interface";

import TitleBordered from "components/UI/TitleBordered";

const Header = (): JSX.Element => {
    const router = useRouter();

    const [languageMenu, setLanguageMenu] = useState<boolean>(false);
    const [language, setLanguage] = useState<string>(router.locale || "ru");
    const [burgerMenu, setBurgerMenu] = useState<boolean>(false);

    const navMenu: INavMenu[] = [
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
                    {navMenu.map((nav) => (
                        <h6 key={nav.link}>
                            <Link className="nav-item" href={nav.link}>
                                <TitleBordered>
                                    <Trans string={nav.title} />
                                </TitleBordered>
                            </Link>
                        </h6>
                    ))}
                </div>
                <div className="col-5 d-flex align-items-center justify-content-end right-col">
                    <div className="burger-menu">
                        {burgerMenu ? (
                            <CloseIcon
                                fill="white"
                                onClick={(): void => setBurgerMenu(!burgerMenu)}
                            />
                        ) : (
                            <RxHamburgerMenu
                                onClick={(): void => setBurgerMenu(!burgerMenu)}
                            />
                        )}

                        {burgerMenu && (
                            <div className="content">
                                <div>
                                    {navMenu.map((nav) => (
                                        <h6 key={nav.link} className="mt-4">
                                            <Link
                                                className="nav-item-sm"
                                                href={nav.link}
                                            >
                                                <Trans string={nav.title} />
                                            </Link>
                                        </h6>
                                    ))}
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
                                    <div
                                        onClick={(): void =>
                                            setLanguageMenu(!languageMenu)
                                        }
                                        className={`align-items-center justify-content-center mt-4 language language-sm ${
                                            !languageMenu && "language-inactive"
                                        }`}
                                    >
                                        <div className="lang align-items-center justify-content-center">
                                            <Image
                                                src="/images/icons/arrow-bottom.svg"
                                                alt="+"
                                                width={12}
                                                height={15}
                                            />
                                            <div>
                                                <div>
                                                    <Image
                                                        src={
                                                            language == "uk"
                                                                ? "/images/icons/ukraine-flag.png"
                                                                : language ==
                                                                  "ru"
                                                                ? "/images/icons/russian-flag.png"
                                                                : "/images/icons/usa-flag.png"
                                                        }
                                                        alt={
                                                            language == "uk"
                                                                ? "Ukr"
                                                                : language ==
                                                                  "ru"
                                                                ? "Rus"
                                                                : "En"
                                                        }
                                                        className="mx-2"
                                                        width={35}
                                                        height={28}
                                                    />
                                                    <span>
                                                        {language == "uk"
                                                            ? "Укр"
                                                            : language == "ru"
                                                            ? "Рус"
                                                            : "En"}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        {languageMenu && (
                                            <div
                                                style={{
                                                    padding:
                                                        "15px 5px 10px 25px",
                                                    position: "absolute",
                                                }}
                                                className={`${
                                                    languageMenu &&
                                                    "lang-additional"
                                                }`}
                                            >
                                                <Link
                                                    onClick={() =>
                                                        setLanguage("ru")
                                                    }
                                                    href={router.asPath}
                                                    locale="ru"
                                                    className="lang-link"
                                                >
                                                    <div>
                                                        <Image
                                                            src={
                                                                "/images/icons/russian-flag.png"
                                                            }
                                                            alt="Rus"
                                                            className="mx-2"
                                                            width={35}
                                                            height={28}
                                                        />
                                                        <span>
                                                            <Link
                                                                className="lang-link"
                                                                href={
                                                                    router.asPath
                                                                }
                                                                locale="ru"
                                                            >
                                                                Рус
                                                            </Link>
                                                        </span>
                                                    </div>
                                                </Link>
                                                <Link
                                                    onClick={() =>
                                                        setLanguage("uk")
                                                    }
                                                    href={router.asPath}
                                                    locale="uk"
                                                    className="lang-link"
                                                >
                                                    <div className="mt-3">
                                                        <Image
                                                            src="/images/icons/ukraine-flag.png"
                                                            alt="Ukr"
                                                            className="mx-2"
                                                            width={35}
                                                            height={28}
                                                        />
                                                        <span>
                                                            <Link
                                                                className="lang-link"
                                                                href={
                                                                    router.asPath
                                                                }
                                                                locale="uk"
                                                            >
                                                                Укр
                                                            </Link>
                                                        </span>
                                                    </div>
                                                </Link>
                                                <Link
                                                    onClick={() =>
                                                        setLanguage("en")
                                                    }
                                                    href={router.asPath}
                                                    locale="en"
                                                    className="lang-link"
                                                >
                                                    <div className="mt-3">
                                                        <Image
                                                            src="/images/icons/usa-flag.png"
                                                            alt="USA"
                                                            style={{
                                                                margin: "0 10px 0 0 ",
                                                            }}
                                                            width={35}
                                                            height={28}
                                                        />
                                                        <span>
                                                            <Link
                                                                className="lang-link"
                                                                href={
                                                                    router.asPath
                                                                }
                                                                locale="en"
                                                            >
                                                                En
                                                            </Link>
                                                        </span>
                                                    </div>
                                                </Link>
                                            </div>
                                        )}
                                    </div>
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
                    <div
                        onClick={(): void => setLanguageMenu(!languageMenu)}
                        className={`align-items-center justify-content-center language ${
                            !languageMenu && "language-inactive"
                        }`}
                    >
                        <div className="lang align-items-center justify-content-center">
                            <Image
                                src="/images/icons/arrow-bottom.svg"
                                alt="+"
                                width={12}
                                height={15}
                            />
                            <div>
                                <div>
                                    <Image
                                        src={
                                            language == "uk"
                                                ? "/images/icons/ukraine-flag.png"
                                                : language == "ru"
                                                ? "/images/icons/russian-flag.png"
                                                : "/images/icons/usa-flag.png"
                                        }
                                        alt={
                                            language == "uk"
                                                ? "Ukr"
                                                : language == "ru"
                                                ? "Rus"
                                                : "En"
                                        }
                                        className="mx-2"
                                        width={35}
                                        height={28}
                                    />
                                    <span>
                                        {language == "uk"
                                            ? "Укр"
                                            : language == "ru"
                                            ? "Рус"
                                            : "En"}
                                    </span>
                                </div>
                            </div>
                        </div>
                        {languageMenu && (
                            <div
                                style={{
                                    padding: "15px 0 10px 25px",
                                    position: "absolute",
                                }}
                                className={`${
                                    languageMenu && "lang-additional"
                                }`}
                            >
                                <Link
                                    onClick={() => setLanguage("ru")}
                                    href={router.asPath}
                                    locale="ru"
                                    className="lang-link"
                                >
                                    <div>
                                        <Image
                                            src={
                                                "/images/icons/russian-flag.png"
                                            }
                                            alt="Rus"
                                            style={{ margin: "0 7px" }}
                                            width={35}
                                            height={28}
                                        />
                                        <span>
                                            <Link
                                                className="lang-link"
                                                href={router.asPath}
                                                locale="ru"
                                            >
                                                Рус
                                            </Link>
                                        </span>
                                    </div>
                                </Link>
                                <Link
                                    onClick={() => setLanguage("uk")}
                                    href={router.asPath}
                                    locale="uk"
                                    className="lang-link"
                                >
                                    <div className="mt-3">
                                        <Image
                                            src="/images/icons/ukraine-flag.png"
                                            alt="Ukr"
                                            style={{ margin: "0 7px" }}
                                            width={35}
                                            height={28}
                                        />
                                        <span>
                                            <Link
                                                className="lang-link"
                                                href={router.asPath}
                                                locale="uk"
                                            >
                                                Укр
                                            </Link>
                                        </span>
                                    </div>
                                </Link>
                                <Link
                                    onClick={() => setLanguage("en")}
                                    href={router.asPath}
                                    locale="en"
                                    className="lang-link"
                                >
                                    <div className="mt-3">
                                        <Image
                                            src="/images/icons/usa-flag.png"
                                            alt="USA"
                                            style={{ margin: "0 7px" }}
                                            width={35}
                                            height={28}
                                        />
                                        <span>
                                            <Link
                                                className="lang-link"
                                                href={router.asPath}
                                                locale="en"
                                            >
                                                En
                                            </Link>
                                        </span>
                                    </div>
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
