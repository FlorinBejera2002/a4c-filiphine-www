"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import InViewTransition from "../../common/in-view-transition";

const ContactUsBtn = () => {
	const pathname = usePathname();
	const language = pathname.split("/")[1];

	return (
		<InViewTransition delay={1}>
			<Link
				className="flex items-center font-medium gap-2 rounded-md bg-accent p-4 py-2 text-black !no-underline hover:!no-underline"
				href={`/${language}/evangelism-request`}
			>
				Contact Us
			</Link>
		</InViewTransition>
	);
};

export default ContactUsBtn;
