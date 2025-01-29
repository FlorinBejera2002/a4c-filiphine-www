export const About = () => {
	return (
		<>
			<div className=" h-[900px] flex flex-col  relative bg-white z-10 px-40 gap-16">
				<h2 className="text-xl font-bold text-gray-800 pt-10 border-b pb-2 max-w-40 border-black">
					about me
				</h2>
				<div className="grid md:grid-cols-2 w-full gap-8">
					<div className="shadow-md flex flex-col gap-4 p-5">
						<h3 className="text-xl text-accent font-semibold  font-serif">
							Who I Am
						</h3>
						<p className=" text-lg text-gray-600 font-serif">
							As a passionate and skilled developer, I specialize in creating
							innovative and efficient software solutions. From crafting
							enterprise-grade ERP systems to building seamless integrations and
							workflows, my work spans across diverse industries, including
							tech, logistics, and energy. I'm driven by a desire to raise the
							bar in every project I touch, ensuring quality, scalability, and
							user-focused designs.
						</p>
					</div>

					<div className="shadow-md flex flex-col gap-4 p-5">
						<h3 className="text-xl text-accent font-semibold font-serif">
							My Philosophy
						</h3>
						<p className=" font-serif text-lg text-gray-400">
							#Driver #Multiplier #PeoplePerson #GodFirst:
						</p>
						<p className=" font-serif  text-lg text-gray-600">
							I believe in creating meaningful impact through collaboration,
							innovation, and faith-driven initiatives.
						</p>
						<p className=" font-serif  text-lg text-gray-600">
							<b>Empowering Others:</b> I take pride in mentoring and training
							team members, helping them grow while driving the success of our
							collective goals.
						</p>
					</div>

					<div className="shadow-md flex flex-col gap-4 p-5">
						<h3 className="text-xl text-accent font-semibold font-serif">
							What I Do
						</h3>
						<p className=" font-serif  text-lg text-gray-600">
							I have a proven track record of leading teams, driving innovation,
							and delivering exceptional results.
						</p>
						<div>
							{/* <b className="text-lg text-gray-600 font-serif ">
								My portfolio includes:
							</b> */}
							<p className=" font-serif  text-lg text-gray-600">
								<b>ERP Product for Moving Companies:</b> Designed and developed
								an ERP system at Ametras to streamline operations for moving
								companies.
							</p>
							<p className=" font-serif  text-lg text-gray-600">
								<b>Advanced Tools at Bluematrix:</b> Built a PDF Converter and
								an Excel Add-in, alongside transitioning systems to Shibboleth
								SSO for improved security.
							</p>
							<div>
								<p className=" font-serif font-bold  text-lg text-gray-700">
									Scalable Solutions at epilot:
								</p>
								<p className=" font-serif  text-lg text-gray-600 pl-5">
									- Spearheaded the transition of the Ivy Monolith to{" "}
									<b>epilot 360</b>, improving workflows and automation
									processes.
								</p>
								<p className=" font-serif  text-lg text-gray-600 pl-5">
									- Led the <b>Alpha Team</b>, fostering trust, synergy, and
									teamwork.
								</p>
								<p className=" font-serif  text-lg text-gray-600 pl-5">
									- Implemented advanced features such as webhooks, notes, and
									automated workflows.
								</p>
							</div>
						</div>
					</div>

					<div className="shadow-md flex flex-col gap-4 p-5">
						<h3 className="text-xl text-accent font-semibold font-serif">
							What I’m Proud Of
						</h3>
						<p className=" font-serif  text-lg text-gray-600">
							Successfully transitioned through roles from{" "}
							<b>Senior Developer</b> to <b>Tech Lead</b>, and eventually{" "}
							<b>Senior Tech Lead Principal</b>.
						</p>
						<p className=" font-serif  text-lg text-gray-600">
							Made significant contributions to the energy sector, designing
							robust software solutions tailored to its unique challenges.
						</p>
						<p className=" font-serif  text-lg text-gray-600">
							Founded <b>new ark</b>, a visionary company that helps clients
							navigate to success with innovative approaches and world-class
							tools.
						</p>
					</div>
				</div>
			</div>
		</>
	);
};
