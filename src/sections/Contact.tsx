import ArrowRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
export const ContactSection = () => {
	return (
		<div className="py-16 lg:py-24">
			<div className="container">
				<div className="bg-gradient-to-r from-emerald-300 to-sky-400 rounded-3xl text-gray-950 px-8 py-10 text-center z-0 relative overflow-hidden md:text-left">
					<div
						className="absolute -z-10 inset-0 opacity-5"
						style={{ backgroundImage: `url(${grainImage.src})` }}
					/>
					<div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
						<div>
							<h2 className="font-serif text-2xl md:text-3xl">
								Let's create something amazing together
							</h2>
							<p className="text-sm md:text-base">
								Ready to bring your next project to life? Let's connect and
								discuss how I can help you achieve your goals.
							</p>
						</div>
						<div className="">
							<button className="inline-flex items-center gap-2 bg-gray-950 text-white px-6 h-12 rounded-xl w-max">
								<span className="font-semibold border border-gray-950">Contact Me</span>
								<ArrowRightIcon className="size-4" />
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
