import { CheckCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function SuccessPage() {
	return (
		<div className="flex items-center justify-center min-h-screen bg-gray-100">
			<Card className="w-[350px]">
				<CardHeader>
					<div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-100 mb-4">
						<CheckCircle className="w-6 h-6 text-green-600" />
					</div>
					<CardTitle className="text-center">Payment Successful</CardTitle>
					<CardDescription className="text-center">Your payment has been processed successfully.</CardDescription>
				</CardHeader>
				<CardContent>
					<p className="text-center text-gray-600">Thank you for your purchase. You will receive an email confirmation shortly.</p>
				</CardContent>
				<CardFooter className="flex justify-center">
					<Link href="/">
						<Button>Return to Home</Button>
					</Link>
				</CardFooter>
			</Card>
		</div>
	);
}
