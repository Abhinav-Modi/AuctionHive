import React from "react";
import AuctionCard from "./AuctionCard";

async function getData() {
	const res = await fetch("http://localhost:6001/search?pagesize=10", {
		next: {
			revalidate: 600, // Cache for 10mins
		},
		headers: {
			"Cache-Control": "public, s-maxage=600, stale-while-revalidate=59",
		},
	});

	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}
	return res.json();
}

async function Listings() {
	const data = await getData();
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
			{data &&
				data.results.map((auction: any) => (
					<AuctionCard key={auction.id} auction={auction} />
				))}
		</div>
	);
}

// Add static page revalidation
export const revalidate = 3600; // Revalidate the page every hour

export default Listings;
