import memojiIamge from "@/assets/images/memoji-computer.png";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
export const HeroSection = () => {
	return (
		<div className="py-32 md:py-48 lg:py-60 relative z-0">
			<div
				className="absolute inset-0 -z-30 opacity-5"
				style={{
					backgroundImage: `url(${grainImage.src})`,
				}}
			/>
			<div className="size-[620px] hero-ring" />
			<div className="size-[820px] hero-ring" />
			<div className="size-[1020px] hero-ring" />
			<div className="size-[1220px] hero-ring" />
			<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-red-300 border-2 size-[800px] animate-spin [animation-duration:30s]">
				<div className="border-2 border-red-300 inline-flex animate-spin [animation-duration:5s]">
					<StarIcon className="size-28 text-emerald-300"/>
				</div>
			</div>
			{/* Image Avartar */}
			<div className="container">
				<div className="flex flex-col items-center rounded-full">
					<Image
						src={memojiIamge}
						className="size-[100px]"
						alt="Person peeking from behind latop"
					/>
					<div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
						<div className="bg-green-500 size-2.5 rounded-full" />
						<div className="text-sm font-semibold">
							Available for new project
						</div>
					</div>
				</div>
				<div className="max-w-lg mx-auto">
					<h1 className="font-serif mt-8 text-3xl text-center tracking-wide md:text-5xl">
						Building Exceptional User Experiences
					</h1>
					<p className="mt-4 text-center text-white/60 md:text-lg">
						I specialize in transforming designs into functional,
						high-performing web applications. Let&#39;s discuss your next
						project.
					</p>
				</div>
				{/* Buton */}
				<div className="flex flex-col md:flex-row justify-center gap-4 items-center mt-4">
					<button className="inline-flex gap-2 items-center border border-white/15 px-6 h-12 rounded-xl">
						<span className="font-semibold">Explore My Work</span>
						<ArrowDown className="size-4" />
					</button>
					<button className="inline-flex items-center border border-white bg-white text-gray-950 rounded-xl px-6 h-12">
						<span>👋</span>
						<span>Let&#39;s Connect</span>
					</button>
				</div>
			</div>
		</div>
	);
};
