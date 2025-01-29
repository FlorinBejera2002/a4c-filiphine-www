import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "Arise for Christ",
	description: "Arise for Christ Asociation",
	icons: "/logo.svg",
};

import "./globals.css";
import NavBar from "./components/nav";
import { Footer } from "./components/footer";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className="antialiased font-playfair">
				<NavBar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
