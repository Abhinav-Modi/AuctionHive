

export { auth as middleware } from "@/auth";

export const config = {
	matcher: ["/sessions"],
	pages: {
		signIn: "api/auth/signin",
	},
};
