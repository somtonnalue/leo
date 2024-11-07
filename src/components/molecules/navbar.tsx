"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import { ShoppingBag } from "lucide-react";
import { useShoppingCart } from "use-shopping-cart";

const links = [
	{
		name: "Home",
		href: "/",
	},
	{
		name: "Men",
		href: "/Men",
	},
	{
		name: "Women",
		href: "/Women",
	},
	{
		name: "Kids",
		href: "/Kids",
	},
];

export default function Navbar() {
	const pathname = usePathname();
    const {handleCartClick} = useShoppingCart();
	return (
		<header className="mb-8 border-b">
			<section className="flex items-center justify-between mx-auto max-w-2xl py-6 px-4 sm:px-6 lg:max-w-7xl">
				<Link href={"/"}>
					<h1 className="text-4xl font-bold">
						<span className="text-primary">Leo</span>
					</h1>
				</Link>

				<nav className="hidden gap-12 lg:flex 2xl:ml-16">
					{links.map((link, index) => (
						<div key={index}>
							{pathname === link.href ? (
								<Link className="text-lg font-semibold text-primary" href={link.href}>
									{link.name}
								</Link>
							) : (
								<Link className="text-lg font-semibold text-grey-600 transition duration-100 hover:text-primary" href={link.href}>
									{link.name}
								</Link>
							)}
						</div>
					))}
				</nav>

				<div className="flex divide-x border-r sm:border-l">
					<Button variant={"outline"} className="flex flex-col gap-y-1.5 h-12 w-12  rounded-none" onClick={() => handleCartClick()}>
						<ShoppingBag />
						<span className="hidden text-xs font-semibold text-gray-500 lg:block">Cart</span>
					</Button>
				</div>
			</section>
		</header>
	);
}
