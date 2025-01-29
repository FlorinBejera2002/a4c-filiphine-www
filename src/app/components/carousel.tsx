"use client";
import { useEffect, useState } from "react";

export default function Carousel() {
	const titles = [
		"How can I encourage someone?",
		"How can I support someone in prayer?",
		"How can I help with the salvation of a loved one?",
	];

	const [currentTitle, setCurrentTitle] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentTitle((prevTitle) => (prevTitle + 1) % titles.length);
		}, 3000);
		return () => clearInterval(interval);
	}, []);

	return (
		<div className="text-start flex w-full justify-start">
			<div className="text-5xl font-bold text-yellow-500 overflow-hidden">
				<p
					key={currentTitle}
					className="animate-slide transition-opacity duration-500 ease-in-out"
				>
					{titles[currentTitle]}
				</p>
			</div>
		</div>
	);
}
