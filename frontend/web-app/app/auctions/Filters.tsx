import { Button } from "flowbite-react";
import React from "react";
import { useParamsStore } from "../hooks/useParamsStore";

const pageSizeButtons = [4, 8, 12];

const Filters = () => {
	const pageSize = useParamsStore(state => state.pageSize);
	const setParams = useParamsStore(state => state.setParams);

	return (
		<div className="bg-white p-4 rounded-lg shadow mb-6">
			<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
				<div>
					<h3 className="text-lg font-semibold text-gray-800 mb-2 sm:mb-0">
						Filter Options
					</h3>
				</div>
				<div className="flex items-center gap-3">
					<span className="text-sm font-medium text-gray-600">
						Items per page:
					</span>
					<div className="inline-flex rounded-md shadow-sm">
						{pageSizeButtons.map((value, i) => (
							<Button
								key={i}
								onClick={() => setParams({pageSize:value})}
								color={pageSize === value ? "blue" : "gray"}
								className={`
                  px-4 py-2 text-sm font-medium
                  ${i === 0 && "rounded-l-lg rounded-r-none"}
                  ${
										i === pageSizeButtons.length - 1 &&
										"rounded-r-lg rounded-l-none"
									}
                  ${
										i !== 0 &&
										i !== pageSizeButtons.length - 1 &&
										"rounded-none border-l"
									}
                  ${
										pageSize === value
											? "ring-2 ring-blue-500 ring-offset-1"
											: "hover:bg-gray-50"
									}
                  focus:z-10 focus:outline-none
                `}
							>
								{value}
							</Button>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Filters;
