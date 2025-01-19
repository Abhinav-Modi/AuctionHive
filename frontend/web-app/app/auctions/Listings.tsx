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
import EmptyFilter from "../components/EmptyFilter";
import Skeleton from "react-loading-skeleton";

function Listings() {
	const [data, setData] = useState<PagedResult<Auction>>();
	const params = useParamsStore(
		useShallow((state) => ({
			pageNumber: state.pageNumber,
			pageSize: state.pageSize,
			searchTerm: state.searchTerm,
			orderBy: state.orderBy,
			filterBy: state.filterBy,
			seller: state.seller,
			winner : state.winner,
		}))
	);
	const setParams = useParamsStore((state) => state.setParams);
	const url = qs.stringifyUrl({ url: "", query: params });

	function setPageNumber(pageNumber: number) {
		setParams({ pageNumber });
	}

	useEffect(() => {
		getData(url)
			.then((data) => {
				setData(data);
			})
			.catch((err) => {
				console.error("Failed to fetch data:", err);
			});
	}, [url]);

	if (!data) {
		return (
			<div className="container mx-auto px-4 py-8">
				<div className="flex justify-between items-center mb-6">
					<h1 className="text-3xl font-bold text-gray-800">Current Auctions</h1>
				</div>
				<Filters />
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
					{[...Array(12)].map((_, index) => (
						<div key={index} className="group block">
							<div className="relative bg-gray-200 rounded-lg overflow-hidden shadow-md transition-shadow duration-300 group-hover:shadow-xl">
								<div className="aspect-[16/9] relative">
									<Skeleton className="w-full h-full" />
									<div className="absolute bottom-2 right-2">
										<Skeleton className="w-24 h-6" />
									</div>
									<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
								</div>
								<div className="p-3">
									<div className="flex justify-between items-center">
										<Skeleton className="w-48 h-6" />
										<Skeleton className="w-16 h-6" />
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		);
	}

	return (
		<div className="container mx-auto px-4 py-8">
			<div className="flex justify-between items-center mb-6">
				<h1 className="text-3xl font-bold text-gray-800">Current Auctions</h1>
			</div>
			<Filters />
			{data.totalCount === 0 ? (
				<EmptyFilter showReset />
			) : (
				<>
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
				</>
			)}
		</div>
	);
}

export const revalidate = 3600;

export default Listings;
