import React from "react";
import Image from "next/image";
type Props = {
	auction: any;
};

const AuctionCard = ({ auction }: Props) => {
	return (
		<a href="#">
			<div className=" relative text-center w-full bg-gray-100 shadow-md aspect-video rounded-md overflow-hidden">
				<Image
					src={auction.imageUrl}
					alt="car image"
					fill
					priority
					className="object-cover"
					sizes=" (max-width: 768px) 100vw, 33vw, (max-width: 1024px) 50vw, 25vw"
				/>
			</div>
			<div className="flex justify-between items-center mt-4">
				<h3 className="text-gray-700">
					{auction.make} {auction.model}
				</h3>
				<p className="font-semibold text-sm">{auction.year}</p>
			</div>
		</a>
	);
};

export default AuctionCard;
