import { useRouter } from "next/router";

import strings from "./Strings";

const translate = (string: string) => {
    const router = useRouter();

    return strings[string][router.locale ? router.locale : "ru"];
};

export default translate;
