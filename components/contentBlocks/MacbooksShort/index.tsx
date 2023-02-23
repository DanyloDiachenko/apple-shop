import { useState, useEffect } from "react";

import CardLg from "components/UI/Cards/CardLg";

const MacbooksShort = () => {
    const [macbooks, setMacbooks] = useState([]);

    useEffect(() => {
        fetch("https://guarded-taiga-94334.herokuapp.com/" + "short-macbooks")
            .then((res) => res.json())
            .then((data) => console.log(data));
    }, []);

    console.log(macbooks);

    return (
        <section className="container">
            <CardLg />
        </section>
    );
};

export default MacbooksShort;
