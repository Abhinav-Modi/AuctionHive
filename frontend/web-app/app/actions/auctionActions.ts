"use server";
import { auth } from "@/auth";
import { Auction, PagedResult } from "../types";

export async function getData(query: string): Promise<PagedResult<Auction>> {
	const res = await fetch(`http://localhost:6001/search${query}`, {
		next: {
			revalidate: 10,
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

export async function updateAuctionTest() {
	const data = { mileage: Math.floor(Math.random() * 1000) + 1 };
	const session = await auth();
	const res = await fetch(
		"http://localhost:6001/auctions/afbee524-5972-4075-8800-7d1f9d7b0a0c",
		{
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${session?.accessToken}`,
			},
			body: JSON.stringify(data),
		}
	);

	if (!res.ok) {
		throw new Error(
			"Failed to update auction, because" +
				res.statusText +
				" " +
				res.status +
				" " +
				res.url 
		); 
	}

	return res.statusText;
}
