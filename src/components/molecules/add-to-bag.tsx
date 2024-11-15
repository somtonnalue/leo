"use client";
import { useShoppingCart } from "use-shopping-cart";
import { Button } from "../ui/button";
import { urlFor } from "@/sanity/lib/client";
import { Product } from "use-shopping-cart/core";
import { ProductCart } from "@/lib/types";



export default function AddToBag({ name, description, image, currency, price, price_id }: ProductCart) {
	const { addItem, handleCartClick } = useShoppingCart();
	const product: Product = {
		name,
		description,
		price,
		currency,
		image: urlFor(image).url(),
		price_id,
	};
	return (
		<Button
			onClick={() => {
				addItem(product);
				handleCartClick();
			}}>
			Add to Cart
		</Button>
	);
}
