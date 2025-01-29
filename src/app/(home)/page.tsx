import React from "react";

import { About } from "../about/about";
import { Social } from "../components/social";
import { QuestionCarousel } from "./components/question-carousel";

export default function Home() {
	return (
		<>
			<div
				className="h-[800px] w-full bg-fixed flex items-center justify-center"
				style={{
					backgroundImage: "url('/background-image.jpg')",
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}
			>
				<div className="space-y-10 p-6 rounded-lg flex flex-col fixed w-full px-40">
					<QuestionCarousel />
					<Social />
				</div>
			</div>

			<About />
		</>
	);
}
