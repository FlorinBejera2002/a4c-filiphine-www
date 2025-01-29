import { cn } from "@/app/utils";
import Link from "next/link";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookF, FaSpotify, FaTiktok } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io5";

export default function Socials() {
	const links = [
		{
			id: "whatsapp",
			hoverClasses: "hover:bg-green-500",
			href: "https://wa.me/qr/ID4EZCB73HFTP1",
			icon: <IoLogoWhatsapp className="size-5 text-gray-300" />,
		},
		{
			id: "facebook",
			hoverClasses: "hover:bg-blue-900",
			href: "https://www.facebook.com/AriseForChristRomania/",
			icon: <FaFacebookF className="size-5 text-gray-300" />,
		},
		{
			id: "instagram",
			hoverClasses: "hover:bg-[#7B0166]",
			href: "https://www.instagram.com/p/CfL2FveIMpn/",
			icon: <FaInstagram className="size-5 text-gray-300" />,
		},
		{
			id: "youtube",
			hoverClasses: "hover:bg-red-500",
			href: "https://www.youtube.com/c/Ariseforchrist/",
			icon: <FaYoutube className="size-5 text-gray-300" />,
		},
		{
			id: "tiktok",
			hoverClasses: "hover:bg-[#2AC4CA]",
			href: "https://www.tiktok.com/@ariseforchrist/",
			icon: <FaTiktok className="size-5 text-gray-300" />,
		},
		{
			id: "spotify",
			hoverClasses: "hover:bg-green-500",
			href: "https://open.spotify.com/show/3284C4Oox7JSflk1AOlgav",
			icon: <FaSpotify className="size-5 text-gray-300" />,
		},
	];

	return (
		<div className="!z-10 mb-3 flex w-fit flex-wrap gap-2">
			{links.map((link) => (
				<div
					className={cn(
						"flex h-10 w-10 cursor-pointer items-center justify-center rounded-full transition-all duration-300 hover:bg-blue-900",
						link.hoverClasses,
					)}
					key={link.id}
				>
					<Link href={link.href}>{link.icon}</Link>
				</div>
			))}
		</div>
	);
}
