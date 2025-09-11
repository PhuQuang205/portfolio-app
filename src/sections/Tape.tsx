import StarIcon from "@/assets/icons/star.svg";

const words = [
	"Performant",
	"Accessible",
	"Secure",
	"Interactive",
	"Scaleable",
	"Responsive",
	"User Friendly",
	"Intuitive",
	"Dynamic",
	"Engaging",
];

export const TapeSection = () => {
	return (
		<div className="py-16 overflow-clip">
			<div className="bg-gradient-to-r from-emerald-300 to-blue-500 -rotate-3 -mx-1">
				<div
					className="flex justify-center [-webkit-mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] [-webkit-mask-repeat:no-repeat] [-webkit-mask-size:100%]"
				>
					<div className="flex flex-none gap-4 py-3">
						{words.map((word, index) => (
							<div key={index} className="inline-flex items-center gap-4">
								<span className="block text-gray-900 text-sm uppercase font-extrabold">
									{word}
								</span>
								<StarIcon className="size-6 text-gray-900" />
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};
