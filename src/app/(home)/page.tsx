import About from "../about/page";
import Socials from "../common/socials";
import CardHero from "./components/card-hero";
import { QuestionList } from "./components/question-list";

export default function Home() {
	return (
		<>
			<div
				className="h-[800px] w-full bg-fixed flex items-center justify-center bg-opacity-70 "
				style={{
					backgroundImage: "url('/background-image.jpg')",
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundColor: "rgba(0, 0, 0, 0.2)",
					backgroundBlendMode: "overlay",
				}}
			>
				<div className=" p-6 rounded-lg flex w-full px-52 items-end">
					<div className="w-full flex flex-col gap-5">
						<QuestionList />
						<Socials />
					</div>
					<div className="flex w-96 flex-col items-center justify-center ">
						<CardHero />
					</div>
				</div>
			</div>

			<About />
		</>
	);
}
