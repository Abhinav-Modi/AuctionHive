import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./nav/Navbar";

export const metadata: Metadata = {
	title: "AuctionHive",
	description: "AuctionHive",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<Navbar />
				<main className="container mx-auto px-2 pt-10">{children}</main>
			</body>
		</html>
	);
}
