import React from "react";
import { auth } from "@/auth";
import Heading from "../components/Heading";
import AuthTest from "./AuthTest";
import SessionDisplay from "./SessionDisplay";

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
			<SessionDisplay sessionData={sessionData} />
			<div className="mt-4">
				<AuthTest />
			</div>
		</div>
	);
}
