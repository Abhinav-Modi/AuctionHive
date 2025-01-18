// app/sessions/page.tsx
import React from "react";
import { auth } from "@/auth";
import Heading from "../components/Heading";
import AuthTest from "./AuthTest";

export default async function SessionPage() {
	const session = await auth();

	if (!session) {
		return <div>Not authenticated</div>;
	}

	const sessionData = {
		user: {
			name: session.user?.name ?? null,
			username: session.user?.username ?? null,
		},
		expires: session.expires,
		accessToken: session.accessToken ?? null, 
	};

	return (
		<div>
			<Heading title="Session Dashboard" />
			<div className="border-2 bg-blue-500 p-4">
				<h3 className="text-lg font-bold mb-2">Session data</h3>
				<div className="bg-white p-2 rounded">
					<pre className="whitespace-pre-wrap">
						{JSON.stringify(sessionData, null, 2)}
					</pre>
				</div>
			</div>
			<div className="mt-4">
				<AuthTest />
			</div>
		</div>
	);
}
