"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/logo_horizontal_black.webp";
import { cn } from "../utils";
import { useWindowScroll } from "@uidotdev/usehooks";

export default function NavBar() {
	const [{ y }] = useWindowScroll();

	return (
		<nav
			className={cn(
				" flex w-full items-center justify-center bg-blur py-6 transition-all duration-500 z-9999 fixed z-20",
				y !== null && y >= 25
					? "bg-gray-950/[.4] shadow-sm backdrop-blur-md z-20"
					: "",
			)}
		>
			<div className="container flex justify-between items-center w-full">
				<Image src={logo} alt="Logo" className="w-40 text-center pl-2" />
				<div className=" flex justify-end w-full gap-5 md:pr-44">
					<Link href="/">Home</Link>
					<Link href="/about">About</Link>
					<Link href="/projects">Projects</Link>
				</div>
			</div>
		</nav>
	);
}
