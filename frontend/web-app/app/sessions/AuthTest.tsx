"use client";
import React from "react";
import { updateAuctionTest } from "../actions/auctionActions";
import { Button } from "flowbite-react";

interface AuctionResult {
	id: string;
	mileage: number;
}

const AuthTest = () => {
	const [loading, setLoading] = React.useState(false);
	const [result, setResult] = React.useState<AuctionResult | null>(null);
	const [error, setError] = React.useState<string | undefined>();

	async function doUpdate() {
		setResult(null);
		setError(undefined);
		setLoading(true);

		try {
			const res = await updateAuctionTest();
			
			setResult(res as unknown as AuctionResult);
		} catch (err) {
			setError(err instanceof Error ? err.message : "An error occurred");
			console.error(err);
		} finally {
			setLoading(false);
		}
	}

	return (
		<div className="flex flex-col gap-4">
			<div className="flex items-center gap-4">
				<Button outline isProcessing={loading} onClick={doUpdate}>
					Test Auth
				</Button>
			</div>

			{error && (
				<div className="text-red-500 bg-red-50 p-2 rounded">{error}</div>
			)}

			{result && (
				<div className="bg-gray-50 p-2 rounded">
					<pre className="whitespace-pre-wrap">
						{JSON.stringify(result, null, 2)}
					</pre>
				</div>
			)}
		</div>
	);
};

export default AuthTest;
