export default interface IProduct {
	key: string;
	id: number;
	title: string;
	src: string;
	isNovelty: boolean;
	isDiscount: boolean;
	rate: number;
	price: number;
	prevPrice?: number;
};
