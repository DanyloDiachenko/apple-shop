import { useRouter } from "next/router";
import strings from "./strings";

const Trans = ({ string }: { string: string }): JSX.Element => {
    const router = useRouter();

    return <>{strings[string][router.locale ? router.locale : "ru"]}</>;
};

export default Trans;
