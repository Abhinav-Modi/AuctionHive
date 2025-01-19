"use server";

import { auth } from "@/auth";
import { User } from "next-auth";
export async function getCurrentUser(): Promise<User | null> {
	try {
		const session = await auth();
		if (!session?.user) {
			return null;
		}
		return {
			name: session.user.name || "",
			username: session.user.username,
		};
	} catch (error) {
		throw new Error("Error fetching user data", { cause: error });
	}
}
