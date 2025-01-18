import NextAuth, { Profile, User as NextAuthUser } from "next-auth";
import { OIDCConfig } from "next-auth/providers";
import DuendeIDS6Provider from "next-auth/providers/duende-identity-server6";

interface User extends NextAuthUser {
	username?: string;
}

export const { handlers, signIn, signOut, auth } = NextAuth({
	session: {
		strategy: "jwt",
	},
	providers: [
		DuendeIDS6Provider({
			id: "id-server",
			clientId: "nextApp",
			clientSecret: "secret",
			issuer: "http://localhost:5000",
			authorization: { params: { scope: "openid profile auctionApp" } },
			idToken: true,
		} as OIDCConfig<Omit<Profile, "username">>),
	],
	callbacks: {
		async authorized({ auth }) {
			return !!auth;
		},
		async jwt({ token, profile, account }) {
			if (account && typeof account.access_token === "string") {
				token.accessToken = account.access_token;
			}
			if (profile && typeof profile.username === "string") {
				token.username = profile.username;
			}
			return token;
		},
		async session({ session, token }) {
			if (token.username && typeof token.username === "string") {
				(session.user as User).username = token.username;
			}
			if (token.accessToken && typeof token.accessToken === "string") {
				session.accessToken = token.accessToken;
			}
			return session;
		},
	},
});
