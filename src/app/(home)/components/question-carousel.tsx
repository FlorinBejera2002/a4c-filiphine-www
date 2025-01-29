"use client";

import { useEffect, useState } from "react";

export const QuestionCarousel = () => {
	const questions = [
		"How can I help with the salvation of a loved one?",
		"How can I support someone in prayer?",
		"How can I encourage someone?",
	];
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isAnimating, setIsAnimating] = useState(true);

	useEffect(() => {
		const interval = setInterval(() => {
			setIsAnimating(false);
			setTimeout(() => {
				setCurrentIndex((prevIndex) => (prevIndex + 1) % questions.length);
				setIsAnimating(true);
				clearTimeout(1000);
			}, 800);
		}, 5000);

		return () => clearInterval(interval);
	}, []);

	return (
		<div className="text-wrap flex flex-col justify-center mb-1 ">
			<h5 className="font-bold text-accent text-sm md:text-xl">
				Have you ever asked yourself:
			</h5>
			<div className="overflow-hidden h-20">
				<div
					className={`transform transition-transform duration-1000 ease-out ${
						isAnimating ? "translate-y-0" : "translate-y-24 "
					}`}
				>
					<h3 className="text-2xl font-bold text-white md:text-2xl lg:text-4xl">
						{questions[currentIndex]}
					</h3>
				</div>
			</div>
		</div>
	);
};
