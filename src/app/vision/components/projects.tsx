import Project1 from "../../../../public/project1.svg";
import Project2 from "../../../../public/project2.svg";
import Project3 from "../../../../public/project3.svg";
import Project4 from "../../../../public/project4.svg";
import Project5 from "../../../../public/project5.svg";
import Image from "next/image";
import InViewTransition from "../../common/in-view-transition";

export default function Projects() {
	return (
		<div className="max-w-7xl mx-auto  px-6 lg:px-12 bg-white">
			<h3 className="text-3xl font-semibold  text-gray-900 mb-6">
				Our Projects
			</h3>
			<p className="text-lg text-gray-600  mb-6">
				We are committed to spreading the Gospel and helping those in need
				through various faith-driven initiatives.
			</p>

			<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3 h-96">
				<InViewTransition delay={0.5}>
					<div className="bg-white p-3 rounded-md h-60 shadow-md flex flex-col items-center text-center">
						<Image
							src={Project1}
							alt="Personal Evangelism"
							width={100}
							height={100}
						/>
						<h4 className="text-lg font-semibold text-gray-900">
							Personal Evangelism
						</h4>
						<p className="text-gray-600 mt-2 text-sm">
							Connecting with unchurched individuals within the families of
							believers. Every believer has someone unchurched to reach.
						</p>
					</div>
				</InViewTransition>

				<InViewTransition delay={0.75}>
					<div className="bg-white p-3 rounded-md h-60 shadow-md flex flex-col items-center text-center">
						<Image
							src={Project2}
							alt="Recovery of the Fallen"
							width={100}
							height={100}
						/>
						<h4 className="text-lg font-semibold text-gray-900">
							Recovery of the Fallen
						</h4>
						<p className="text-gray-600 mt-2 text-sm">
							Helping those who have fallen away from faith, guiding them
							towards spiritual healing and restoration.
						</p>
					</div>
				</InViewTransition>

				<InViewTransition delay={1}>
					<div className="bg-white p-3 rounded-md h-60 shadow-md flex flex-col items-center text-center">
						<Image
							src={Project3}
							alt="Biblical Counseling"
							width={100}
							height={100}
						/>
						<h4 className="text-lg font-semibold text-gray-900">
							Biblical Counseling
						</h4>
						<p className="text-gray-600 mt-2 text-sm">
							Providing spiritual guidance for those facing difficulties,
							helping them find faith-based solutions.
						</p>
					</div>
				</InViewTransition>

				<InViewTransition delay={1.25}>
					<div className="bg-white p-3 rounded-md h-60 shadow-md flex flex-col items-center text-center">
						<Image
							src={Project4}
							alt="Intercessory Prayer"
							width={100}
							height={100}
						/>
						<h4 className="text-lg font-semibold text-gray-900">
							Intercessory Prayer
						</h4>
						<p className="text-gray-600 mt-2 text-sm">
							Each person we work with is supported through prayer, a key
							element in all of our efforts.
						</p>
					</div>
				</InViewTransition>

				<InViewTransition delay={1.5}>
					<div className="bg-white p-3 rounded-md h-60 shadow-md flex flex-col items-center text-center">
						<Image
							src={Project5}
							alt="Multimedia Projects"
							width={100}
							height={100}
						/>
						<h4 className="text-lg font-semibold text-gray-900">
							Multimedia Projects
						</h4>
						<p className="text-gray-600 mt-2 text-sm">
							Spreading the Word of God through digital media, podcasts, and
							biblical video content.
						</p>
					</div>
				</InViewTransition>
			</div>
		</div>
	);
}
