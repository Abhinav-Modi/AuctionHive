"use client";

import React, { useState } from "react";
import Image from "next/image";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Auction } from "../types";

type Props = {
	auction: Auction;
};

const CarImage = ({ auction }: Props) => {
	const [isLoading, setLoading] = useState(true);

	return (
		<>
			{isLoading && <Skeleton className="h-full w-full absolute" />}

			<Image
				src={auction.imageUrl}
				alt={`${auction.make} ${auction.model}`}
				fill
				priority
				className={`object-cover transition-transform duration-300 group-hover:scale-105
                    ${isLoading ? "opacity-0" : "opacity-100"}`}
				sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
				onLoad={() => setLoading(false)}
			/>
		</>
	);
};

export default CarImage;
