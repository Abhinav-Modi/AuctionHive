import { Pagination } from "flowbite-react";
import React from "react";

type Props = {
	currentPage: number;
	pageCount: number;
    pageChanged: (pageNumber: number) => void;
};

const AppPagination = ({ currentPage, pageCount,pageChanged }: Props) => {

	return (
		<div className="flex justify-center my-4">
			<Pagination
				currentPage={currentPage}
				onPageChange={(e) => pageChanged(e)}
				totalPages={pageCount}
				layout="pagination"
				showIcons={true}
				className="bg-gray-100 p-4 rounded-lg"
				theme={{
					pages: {
						base: "xs:mt-0 mt-2 inline-flex items-center-space-x-px",
						showIcon: "inline-flex",
						previous: {
							base: "ml-0 rounded-l-lg border bg-white px-3 py-2 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white",
						},
						next: {
							base: "rounded-r-lg border bg-white px-3 py-2 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white",
						},
						selector: {
							base: "w-12 border bg-white px-3 py-2 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white",
							active:
								"bg-blue-50 text-blue-600 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white",
						},
					},
				}}
			/>
		</div>
	);
};

export default AppPagination;
