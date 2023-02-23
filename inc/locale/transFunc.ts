import { useRouter } from "next/router";
import strings from "./strings";

const translate = (string: string) => {
    const router = useRouter();

    //@ts-ignore
    return strings[string][router.locale ? router.locale : "ru"];
};

export default translate;
