import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export type SimplifiedProduct = {
	_id: string;
	name: string;
	imageUrl: string;
	price: number;
	categoryName: string;
	slug: string;
};

export type Product = {
	_id: string;
	images: any;
	price: number;
	slug: string;
	categoryName: string;
	name: string;
	price_id: string;
	description: string;
};

export interface ProductCart {
	name: string;
	description: string;
	price: number;
	currency: string;
	image: SanityImageSource;
	price_id: string;
}
