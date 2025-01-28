import Link from "next/link";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export const Social = () => {
	return (
		<div className="flex justify-center w-fit gap-8 mt-4 rounded-full bg-white py-2 px-4 shadow-lg bg-opacity-10">
			<Link href="/about" className="hover:text-blue-500">
				<FaFacebook className="w-6 h-6" />
			</Link>
			<Link
				href="https://www.instagram.com/vlad.crisan/"
				className="hover:text-purple-500"
			>
				<FaInstagram className="w-6 h-6" />
			</Link>
			<Link href="https://github.com/vladcrishan" className="hover:text-black">
				<FaGithub className="w-6 h-6" />
			</Link>
			<Link href="/projects" className="hover:text-blue-500">
				<FaLinkedin className="w-6 h-6" />
			</Link>
		</div>
	);
};
