import React from "react";
import { AiOutlineCar } from "react-icons/ai";

export default function Navbar() {
	return (
		<header className="sticky top-0 z-50 flex justify-between items-center p-4 bg-white text-gray-800 shadow-md">
			<div className="flex items-center space-x-2 text-2xl font-semibold text-red-500">
				<AiOutlineCar size={34} />
				AuctionHive
			</div>
			<div>Middle</div>
			<div>Right</div>
		</header>
	);
}
