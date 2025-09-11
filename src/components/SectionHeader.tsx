import React from "react";

type PropsSectionHeader = {
	title: string;
	eyebrow: string;
	description: string;
};

export const SectionHeader = ({
	title,
	eyebrow,
	description,
}: PropsSectionHeader) => {
	return (
		<>
			<div className="flex justify-center">
				<p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-blue-400 text-transparent bg-clip-text text-center">
					{eyebrow}
				</p>
			</div>
			<h2 className="font-serif text-3xl md:text-5xl text-center mt-6">
				{title}
			</h2>
			<p className="mt-4 text-center text-white/60 md:text-lg max-w-md mx-auto">
				{description}
			</p>
		</>
	);
};
