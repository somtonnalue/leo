import { XCircle } from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function FailedPage() {
	return (
		<div className="flex items-center justify-center min-h-screen bg-gray-100">
			<Card className="w-[350px]">
				<CardHeader>
					<div className="flex items-center justify-center w-12 h-12 rounded-full bg-red-100 mb-4">
						<XCircle className="w-6 h-6 text-red-600" />
					</div>
					<CardTitle className="text-center">Payment Failed</CardTitle>
					<CardDescription className="text-center">We were unable to process your payment.</CardDescription>
				</CardHeader>
				<CardContent>
					<p className="text-center text-gray-600">Please check your payment details and try again. If the problem persists, contact our support team.</p>
				</CardContent>
				<CardFooter className="flex justify-center space-x-4">
					<Link href="/">
						<Button>Return to Home</Button>
					</Link>
				</CardFooter>
			</Card>
		</div>
	);
}
