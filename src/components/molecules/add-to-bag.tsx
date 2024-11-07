"use client";
import { useShoppingCart } from "use-shopping-cart";
import { Button } from "../ui/button";
import { urlFor } from "@/sanity/lib/client";

export interface ProductCart {
	name: string;
	description: string;
	price: number;
	currency: string;
	image: any;
}

export default function AddToBag({ name, description, image, currency, price }: ProductCart) {
	const { addItem, handleCartClick } = useShoppingCart();
	const product = {
		name,
		description,
		price,
		currency,
		image: urlFor(image).url,
		id: "sd2",
	};
	return (
		<Button
			onClick={() => {
				addItem(product), handleCartClick();
			}}>
			Add to Cart
		</Button>
	);
}
