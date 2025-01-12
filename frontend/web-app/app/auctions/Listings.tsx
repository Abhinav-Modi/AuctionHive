"use client";
import React, { useEffect, useState } from "react";
import AuctionCard from "./AuctionCard";
import { getData } from "../actions/auctionActions";
import AppPagination from "../components/AppPagination";
import { Auction, PagedResult } from "../types";
import Filters from "./Filters";
import { useParamsStore } from "../hooks/useParamsStore";
import { useShallow } from "zustand/shallow";
import qs from "query-string";

function Listings() {
	const [data, setData] = useState<PagedResult<Auction>>();
	const params = useParamsStore(
		useShallow((state) => ({
			pageNumber: state.pageNumber,
			pageSize: state.pageSize,
			searchTerm: state.searchTerm,
		}))
	);
	const setParams = useParamsStore((state) => state.setParams);
	const url = qs.stringifyUrl({ url: "", query: params });

	function setPageNumber(pageNumber: number) {
		setParams({ pageNumber }); // Fixed parameter name
	}

	useEffect(() => {
		getData(url)
			.then((data) => {
				setData(data);
			})
			.catch((err) => {
				console.error("Failed to fetch data:", err); // Better error handling
			});
	}, [url]);

	if (!data) {
		return (
			<div className="text-center py-10">
				<p className="text-gray-500 text-lg">
					No auctions available at the moment.
				</p>
			</div>
		);
	}

	return (
		<div className="container mx-auto px-4 py-8">
			<div className="flex justify-between items-center mb-6">
				<h1 className="text-3xl font-bold text-gray-800">Current Auctions</h1>
			</div>
			<Filters />
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
				{data.results.map((auction) => (
					<AuctionCard key={auction.id} auction={auction} />
				))}
			</div>
			<div className="flex justify-center mt-6">
				<AppPagination
					currentPage={params.pageNumber}
					pageCount={data.pageCount}
					pageChanged={setPageNumber}
				/>
			</div>
		</div>
	);
}

export const revalidate = 3600;

export default Listings;
