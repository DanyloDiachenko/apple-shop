export default interface ICharacteristic {
    key: string;
    value: number | string;
}

export default interface IProps {
    size: "lg" | "sm";
    key: string;
    id: number;
    title: string;
    src: string;
    isNovelty: boolean;
    isDiscount: boolean;
    rate: number;
    price: number;
    prevPrice: number;
    kharacteristics: ICharacteristic[];
}
