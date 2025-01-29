import InViewTransition from "../common/in-view-transition";
import AccordionSection from "./components/accordion-section";
import ContactUsBtn from "./components/contact-us-button";

const About = () => {
	return (
		<div className="main flex flex-col items-center">
			<div className="custom-page-content z-index-2 max-w-6xl">
				<div className="rounded-md bg-white !p-8 shadow-lg md:!p-12">
					<div className="row">
						<div className="col">
							<InViewTransition delay={0}>
								<p className="text-md line-height-7 md:text-lg">
									Arise for Christ is a Christian mission that aims to mobilize
									Christians to action, connect them, and organize Christian
									organizations to be more effective in proclaiming the Gospel
									and extending the Kingdom of God. Through the portal
									ariseforchrist.com and using social media networking,
									Christians will be able to communicate more easily, unite, and
									encourage each other to act together for Christ.
								</p>
							</InViewTransition>
						</div>
					</div>
					<div className="flex flex-col">
						<InViewTransition delay={0.5}>
							<p className="text-md line-height-7 md:text-lg max-w-[700px]">
								We join our efforts and knowledge to witness the Gospel and
								extend the Kingdom of God worldwide, starting from Romania.
								Fulfilling God's desire (1 Timothy 2:4) is the mission of our
								association, motivated by God's love for us, and in turn, we do
								it for people (1 John 3:16).
							</p>
						</InViewTransition>

						<AccordionSection />

						<div className="appear-animation flex items-center py-4">
							<ContactUsBtn />
						</div>
					</div>

					<InViewTransition delay={0.25}>
						<p className="text-md mb-0 pb-0 md:text-lg">
							We aspire to see a growing movement of Christians who act for
							Christ and implement the principles of the Kingdom of God. We
							desire churches and believers to be dedicated to winning souls for
							God, restoring those who have fallen, and helping those with
							different problems for their spiritual growth. We do not intend to
							replace the mission of the Lord's Church but rather emphasize,
							motivate, and serve as a bridge for evangelizing people and
							serving believers.
						</p>
					</InViewTransition>
				</div>
			</div>
		</div>
	);
};

export default About;
