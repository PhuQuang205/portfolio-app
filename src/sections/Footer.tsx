import RightUpIcon from "@/assets/icons/arrow-up-right.svg";

const navLinks = [
	{
		title: "Youtube",
		href: "#",
	},
	{
		title: "Twiter",
		href: "#",
	},
	{
		title: "Facebook",
		href: "#",
	},
	{
		title: "LinkedIn",
		href: "#",
	},
];

export const Footer = () => {
	return (
		<footer className="relative -z-10 overflow-clip">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[400px] w-[1600px] bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"/>
			<div className="container">
				<div className="flex flex-col items-center gap-8 border-t border-white/15 py-6 text-sm">
				  <div className="text-white/40">&Copy; 2025. All rights reserved.</div>
  				<div>
  					<nav className="inline-flex flex-col items-center gap-8">
  						{navLinks.map((navLink, index) => (
  							<div key={index} className="flex items-center gap-1">
  								<span>
  								  <a href={navLink.href} className="font-semibold">
    									{navLink.title}
    								</a>
  								</span>
  								<RightUpIcon className="size-4" />
  							</div>
  						))}
  					</nav>
  				</div>
				</div>
			</div>
		</footer>
	);
};
