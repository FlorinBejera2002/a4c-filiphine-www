import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "Arise for Christ | Filiphine",
	description: "Arise for Christ Filiphine Asociation",
	icons: "/logo.ico",
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
