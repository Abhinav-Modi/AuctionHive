import React from "react";
import CarImage from "./CarImage";
import CountdownTimer from "./CountdownTimer";
import { Auction } from "../types";

type Props = {
	auction: Auction;
};

const AuctionCard = ({ auction }: Props) => {
	return (
		<a href="#" className="group block">
			<div className="relative bg-gray-200 rounded-lg overflow-hidden shadow-md transition-shadow duration-300 group-hover:shadow-xl">
				<div className="aspect-[16/9] relative">
					<CarImage auction={auction} />
					<div className="absolute bottom-2 right-2">
						<CountdownTimer auctionEnd={auction.auctionEnd} />
					</div>

					<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
				</div>

				<div className="p-3">
					<div className="flex justify-between items-center">
						<h3 className="text-gray-800 font-medium group-hover:text-gray-900 transition-colors">
							{auction.make} {auction.model}
						</h3>
						<p className="text-gray-600 text-sm font-semibold bg-gray-100 px-2 py-1 rounded">
							{auction.year}
						</p>
					</div>
				</div>
			</div>
		</a>
	);
};

export default AuctionCard;
