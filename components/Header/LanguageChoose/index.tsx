import Link from "next/link";
import Image from "next/image";
import { useRouter, NextRouter } from "next/router";

import { useState } from "react";

import { LanguageChooseProps } from "./language.interface";
import { ILanguageItem } from "./language.interface";

const LanguageChoose = ({ size }: LanguageChooseProps): JSX.Element => {
    const router: NextRouter = useRouter();

    const [languageMenu, setLanguageMenu] = useState<boolean>(false);
    const [language, setLanguage] = useState<string>(router.locale || "ru");

    const languages: ILanguageItem[] = [
        { title: "Рус", locale: "ru", src: "/images/icons/russian-flag.png" },
        { title: "Укр", locale: "uk", src: "/images/icons/ukraine-flag.png" },
        { title: "En", locale: "en", src: "/images/icons/usa-flag.png" },
    ];

    const setPrevLangMenu = (): void => {
        setLanguageMenu(!languageMenu);
    };

    return (
        <div
            onClick={setPrevLangMenu}
            className={`align-items-center justify-content-center language ${
                size === "sm" && "language-sm mt-4"
            } ${!languageMenu && "language-inactive"}`}
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
                        padding: "0 0 10px 25px",
                        position: "absolute",
                    }}
                    className={`${languageMenu && "lang-additional"}`}
                >
                    {languages.map((lang: ILanguageItem) => (
                        <Link
                            key={lang.title}
                            onClick={(): void => setLanguage(lang.locale)}
                            href={router.asPath}
                            locale={lang.locale}
                            className="lang-link"
                        >
                            <div className="mt-3">
                                <Image
                                    src={lang.src}
                                    alt={lang.locale}
                                    style={{ margin: "0 7px" }}
                                    width={35}
                                    height={28}
                                />
                                <span>{lang.title}</span>
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};

export default LanguageChoose;
