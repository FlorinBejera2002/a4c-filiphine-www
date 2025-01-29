"use client";

import Image from "next/image";
import InViewTransition from "../common/in-view-transition";
import AccordionSection from "./components/accordion-section";
import ContactUsBtn from "./components/contact-us-button";
import AboutUsImage from "../../../public/About us page-bro.svg";

const About = () => {
	return (
		<section className="bg-white py-20">
			<div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
				<div className="flex flex-col">
					<InViewTransition delay={0}>
						<h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase">
							About Us
						</h3>
						<h2 className="text-4xl font-bold text-gray-900 mt-2 leading-snug">
							Helping <span className="text-accent">communities grow</span>{" "}
							through the power of faith.
						</h2>
						<p className="text-lg text-gray-500 mt-4 leading-relaxed">
							We empower believers to act, connect, and create lasting impact.
							Our mission is to build a strong faith-driven community, united in
							helping and uplifting each other through meaningful actions and
							outreach programs.
						</p>
					</InViewTransition>

					<InViewTransition delay={0.5}>
						<div className="mt-6">
							<ContactUsBtn />
						</div>
					</InViewTransition>
				</div>

				<InViewTransition delay={0.25}>
					<div className="relative flex justify-center">
						<div className="relative w-[90%] max-w-md">
							<Image
								src={AboutUsImage}
								alt="About Us"
								width={500}
								height={400}
							/>
						</div>
					</div>
				</InViewTransition>
			</div>

			<div className="max-w-7xl mx-auto mt-16 px-6 lg:px-12">
				<div className="bg-gray-100 p-8 rounded-lg shadow-lg">
					<h3 className="text-3xl font-semibold text-center text-gray-800 mb-6">
						Our Core Beliefs & Mission
					</h3>
					<p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-6">
						We are committed to spreading the Gospel, empowering believers, and
						creating a strong, united Christian community.
					</p>
					<AccordionSection />
				</div>
			</div>
		</section>
	);
};

export default About;
