import Image from "next/image";
import logo from "../../../public/logo.svg";
import Socials from "./socials";

export const Footer = () => {
	return (
		<div className="flex items-center justify-between py-6 text-gray-400 text-sm px-40">
			<Image src={logo} alt="Logo" className="w-6 text-center pl-2" />
			<p className="text-gray-400 text-sm flex flex-col items-center gap-2">
				<Socials />© 2025 Arise for Christ.
			</p>
		</div>
	);
};
