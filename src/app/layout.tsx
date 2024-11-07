import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/molecules/navbar";
import CartProvider from "@/components/providers/cart-provider";
import ShoppingCartModal from "@/components/molecules/shopping-cart-modal";

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

export const metadata: Metadata = {
	title: "Leo",
	description: "Minimal ecommerce store",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<CartProvider>
					<Navbar />
					<ShoppingCartModal />
					{children}
				</CartProvider>
			</body>
		</html>
	);
}
