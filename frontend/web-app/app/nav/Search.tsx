import React from "react";
import { FaSearch } from "react-icons/fa";
import { useParamsStore } from "../hooks/useParamsStore";

const Search = () => {
	const setParams = useParamsStore((state) => state.setParams);
	const setSearchValue = useParamsStore((state) => state.setSearchValue);
	const searchValue = useParamsStore((state) => state.searchValue);
	function onChange(e: React.ChangeEvent<HTMLInputElement>) {
		setSearchValue(e.target.value);
	}
	function search() {
		setParams({ searchTerm: searchValue });
	}
	return (
		<div className="relative w-[400px] group">
			<div className="flex items-center bg-gray-50 rounded-full border border-gray-200 transition-all duration-300 ease-in-out group-hover:border-red-200 group-hover:shadow-md group-hover:bg-white">
				<input
					onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
						if (e.key === "Enter") {
							search();
						}
					}}
					value={searchValue}
					onChange={onChange}
					type="text"
					placeholder="Search for cars by make, model or colour"
					className="w-full px-4 py-2 bg-transparent border-none focus:outline-none focus:ring-0 text-gray-700 placeholder-gray-500 rounded-full transition-all duration-300"
				/>
				<button
					onClick={search}
					className="p-2 mr-2 text-gray-500 hover:text-red-500 hover:scale-110 transition-all duration-300"
				>
					<FaSearch className="w-5 h-5" />
				</button>
			</div>
		</div>
	);
};

export default Search;
