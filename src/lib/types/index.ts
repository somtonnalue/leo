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
	description: string;
};
