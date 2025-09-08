const NAV = [
	{
		title: "Home",
		href: "#",
	},
	{
		title: "Projects",
		href: "#",
	},
	{
		title: "About",
		href: "#",
	},
	{
		title: "Contact",
		href: "#",
    active:"bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
	},
];

export const Header = () => {
	return (
		<div className="flex justify-center items-center relative top-3">
			<nav className="p-0.5 gap-1 flex rounded-full border border-white/15 bg-white/10 backdrop-blur">
				{NAV.map((item, indexNav) => (
					<a className={`nav-item ${item?.active}`} key={indexNav} href={item.href}>
						{item.title}
					</a>
				))}
			</nav>
		</div>
	);
};
