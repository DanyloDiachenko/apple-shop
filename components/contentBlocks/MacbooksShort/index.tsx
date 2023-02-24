import { useState, useEffect } from "react";

import CardLg from "components/UI/Cards/CardLg";

import IMacbook from "./macbook.interface";

const MacbooksShort = () => {
    const [macbooks, setMacbooks] = useState<IMacbook[]>([]);

    useEffect(() => {
        fetch(process.env.NEXT_PUBLIC_BACKEND_URL + "short-macbooks")
            .then((res: Response) => res.json())
            .then((data: IMacbook[]) => setMacbooks(data));
    }, []);

    console.log(macbooks);

    return (
        <section className="container row justify-content-between">
            {macbooks.map((macbook: IMacbook) => (
                <CardLg {...macbook} key={String(macbook.id)} />
            ))}
        </section>
    );
};

export default MacbooksShort;
