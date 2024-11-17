import { ReactNode, Suspense } from "react";

export default function CheckoutTemplate({ children }: { children: ReactNode }) {
	return (
		<html lang="en">
			<body>
				<Suspense>{children}</Suspense>
			</body>
		</html>
	);
}
