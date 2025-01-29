"use client";

import Image from "next/image";
import InViewTransition from "../common/in-view-transition";
import ContactUsBtn from "./components/contact-us-button";
import AboutUsImage from "../../../public/About us page-bro.svg";
import AccordionSection from "./components/accordion-section";

const About = () => {
	return (
		<section className="bg-white pb-20">
			<div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
				<div className="flex flex-col gap-3">
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
					<AccordionSection />

					<InViewTransition delay={0.5}>
						<ContactUsBtn />
					</InViewTransition>
				</div>

				<InViewTransition delay={0.25}>
					<div className="relative flex justify-center">
						<div className="relative w-[90%] max-w-xl">
							<Image
								src={AboutUsImage}
								alt="About Us"
								width={600}
								height={500}
							/>
						</div>
					</div>
				</InViewTransition>
			</div>
		</section>
	);
};

export default About;
