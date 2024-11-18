"use client";
import { ReactNode, useEffect, useState } from "react";
import { CartProvider as USCProvider } from "use-shopping-cart";

export default function CartProvider({ children }: { children: ReactNode }) {
	const [host, setHost] = useState("");

	useEffect(() => {
		setHost(window.location.origin);
	}, []);

	return (
		<USCProvider
			mode="payment"
			cartMode="client-only"
			stripe={process.env.NEXT_PUBLIC_STRIPE_KEY as string}
			successUrl={`${host}/checkout/success`}
			cancelUrl={`${host}/checkout/error`}
			currency="NGN"
			billingAddressCollection={true}
			shouldPersist={true}
			language="en-US">
			{children}
		</USCProvider>
	);
}
