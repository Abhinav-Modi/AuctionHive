
"use client";
import React from "react";

interface SessionData {
	user: {
		name: string | null;
		username: string | null;
	};
	expires: string;
	accessToken: string | null;
}

interface SessionDisplayProps {
	sessionData: SessionData;
}

export default function SessionDisplay({ sessionData }: SessionDisplayProps) {
	return (
		<div className="border-2 bg-blue-500 p-4">
			<h3 className="text-lg font-bold mb-2">Session data</h3>
			<div className="bg-white p-2 rounded">
				<pre className="whitespace-pre-wrap">
					{JSON.stringify(sessionData, null, 2)}
				</pre>
			</div>
		</div>
	);
}
