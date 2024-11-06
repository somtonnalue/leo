import Hero from "@/components/molecules/hero";
import NewestProducts from "@/components/molecules/newest-products";
import Link from "next/link";

export default async function Home() {
	return (
		<section className="mx-auto max-w-2xl px-4 sm:-b-6 lg:max-w-7xl lg:px-8">
			<Hero />
			<div className="flex flex-col items-center justify-between gap-8 md:flex-row">
				<div className="flex h-12 w-64 divide-x overflow-hidden rounded-lg border">
					<Link href="/Men" className="flex w-1/3 items-center justify-center text-gray-500 transtion duration-100 hover:bg-gray-100 active:bg-gray-200">
						Men
					</Link>
					<Link href="/Women" className="flex w-1/3 items-center justify-center text-gray-500 transtion duration-100 hover:bg-gray-100 active:bg-gray-200">
						Women
					</Link>

					<Link href="/Kids" className="flex w-1/3 items-center justify-center text-gray-500 transtion duration-100 hover:bg-gray-100 active:bg-gray-200">
						Kids
					</Link>
				</div>
			</div>
			<NewestProducts />
		</section>
	);
}
