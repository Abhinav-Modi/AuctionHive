"use server";

import { auth } from "@/auth";
import { User } from "../types";
export async function getCurrentUser(): Promise<User | null> {
	try {
		const session = await auth();
		if (!session?.user) {
			return null;
		}
		return {
			name: session.user.name || "",
			expires: session.expires || "",
		};
	} catch (error) {
		throw new Error("Error fetching user data", { cause: error });
	}
}
