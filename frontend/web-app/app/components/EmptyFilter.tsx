"use client";

import React from "react";
import { useParamsStore } from "../hooks/useParamsStore";
import Heading from "./Heading";
import { signIn } from "next-auth/react";
type Props = {
	title?: string;
	subtitle?: string;
	showReset?: boolean;
	showLogin?: boolean;
	callbackUrl?: string;
};

const EmptyFilter = ({
	title = "No Matches for this filter",
	subtitle = "Try changing or removing the filter",
	showReset,
	showLogin,
	callbackUrl,
}: Props) => {
	const reset = useParamsStore((state) => state.reset);
	return (
		<div className="h-[40vh] flex flex-col gap-2 justify-center items-center shadow-lg">
			<Heading title={title} subtitle={subtitle} center />
			<div className="mt-4">
				{showReset && (
					<button
						onClick={reset}
						className="bg-blue-500 text-white px-4 py-2 rounded-md"
					>
						Remove Filter
					</button>
				)}
				{showLogin && (
					<button
						onClick={() => signIn("id-server", { callbackUrl })}
						className="bg-blue-500 text-white px-4 py-2 rounded-md"
					>
						Login
					</button>
				)}
			</div>
		</div>
	);
};

export default EmptyFilter;
