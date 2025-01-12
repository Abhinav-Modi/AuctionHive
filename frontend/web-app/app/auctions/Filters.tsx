import React from "react";
import { useParamsStore } from "../hooks/useParamsStore";
import { GiFinishLine, GiFlame } from "react-icons/gi";
import { BsFillStopwatchFill } from "react-icons/bs";

const pageSizeButtons = [4, 8, 12];

const filterButtons = [
	{
		label: "Live Auctions",
		icon: GiFlame,
		value: "live",
	},
	{
		label: "Ending < 6 hours",
		icon: GiFinishLine,
		value: "endingSoon",
	},
	{
		label: "Completed",
		icon: BsFillStopwatchFill,
		value: "finished",
	},
];

const Filters = () => {
	const pageSize = useParamsStore((state) => state.pageSize);
	const setParams = useParamsStore((state) => state.setParams);
	const filterBy = useParamsStore((state) => state.filterBy);

	return (
		<div className="bg-white p-4 rounded-lg shadow-md mb-6">
			<h3 className="text-lg font-semibold text-gray-800 mb-4">
				Filter Options
			</h3>

			<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
				<div className="w-full sm:w-auto">
					<span className="block text-sm font-medium text-gray-600 mb-2">
						Items per page:
					</span>
					<div
						className="inline-flex rounded-md shadow-sm"
						role="group"
						aria-label="Page size options"
					>
						{pageSizeButtons.map((value, index) => (
							<button
								key={index}
								onClick={() => setParams({ pageSize: value })}
								className={`px-4 py-2 text-sm font-medium ${
									index === 0 ? "rounded-l-lg" : ""
								} ${
									index === pageSizeButtons.length - 1 ? "rounded-r-lg" : ""
								} ${
									index > 0 && index < pageSizeButtons.length - 1
										? "rounded-none border-x"
										: ""
								} ${
									pageSize === value
										? "bg-blue-100 text-blue-800"
										: "bg-white text-gray-700 hover:bg-gray-50"
								} focus:z-10 focus:outline-none`}
							>
								{value}
							</button>
						))}
					</div>
				</div>

				<div className="w-full sm:w-auto">
					<span className="block text-sm font-medium text-gray-600 mb-2">
						Filter Auctions by:
					</span>
					<div
						className="inline-flex rounded-md shadow-sm"
						role="group"
						aria-label="Filter options"
					>
						{filterButtons.map(({ label, icon: Icon, value }, index) => (
							<button
								key={index}
								onClick={() => setParams({ filterBy: value })}
								className={`px-4 py-2 text-sm font-medium flex items-center ${
									index === 0 ? "rounded-l-lg" : ""
								} ${index === filterButtons.length - 1 ? "rounded-r-lg" : ""} ${
									index > 0 && index < filterButtons.length - 1
										? "rounded-none border-x"
										: ""
								} ${
									filterBy === value
										? "bg-blue-100 text-blue-800"
										: "bg-white text-gray-700 hover:bg-gray-50"
								} focus:z-10 focus:outline-none`}
							>
								<Icon className="mr-2 h-4 w-4" />
								{label}
							</button>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Filters;
