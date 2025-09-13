import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import StarIcon from "@/assets/icons/star.svg";
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import JavaScriptIcon from "@/assets/icons/square-js.svg";
import HtmlIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import GithubIcon from "@/assets/icons/github.svg";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItem } from "@/components/ToolboxItem";

const toolboxItems = [
	{
		title: "Javascript",
		iconType: JavaScriptIcon,
	},
	{
		title: "HTML5",
		iconType: HtmlIcon,
	},
	{
		title: "CSS3",
		iconType: CssIcon,
	},
	{
		title: "ReactJs",
		iconType: ReactIcon,
	},
	{
		title: "Chrome",
		iconType: ChromeIcon,
	},
	{
		title: "Github",
		iconType: GithubIcon,
	},
];

const hobbies = [
	{
		title: "Traveling",
		emoji: "✈️",
		left: "50%",
		top: "5%",
	},
	{
		title: "Photography",
		emoji: "📸",
		left: "35%",
		top: "35%",
	},
	{
		title: "Cooking",
		emoji: "👨‍🍳",
		left: "5%",
		top: "10%",
	},
	{
		title: "Gaming",
		emoji: "🎮",
		left: "70%",
		top: "45%",
	},
	{
		title: "Music",
		emoji: "🎵",
		left: "20%",
		top: "60%",
	},
	{
		title: "Fitness",
		emoji: "🏋️‍♂️",
		left: "40%",
		top: "75%",
	},
];

export const AboutSection = () => {
	return (
		<div className="py-16">
			<div className="container mx-auto">
				<SectionHeader
					eyebrow="About me"
					title="A Glimpse Into My World"
					description="Learn more about who I am, What I do, and inspires me."
				/>
				{/* Some Card */}
				<div className="mt-20 flex flex-col gap-8">
					{/* Card my read book */}
					<div className="flex flex-col md:grid md:grid-cols-5 gap-8">
						<Card className="h-[320px] md:col-span-2">
							<CardHeader
								title="My Reads"
								description="Explore the books shaping my perspectives."
							/>
							<div className="w-40 mx-auto mt-12 md:mt-8">
								<Image src={bookImage} alt="book image" />
							</div>
						</Card>
						{/* Card tool use */}
						<Card className="h-[320px] p-0 md:col-span-3">
							<CardHeader
								title="My Toolbox"
								description="Explore the technologies and ...use to craft the exceptional digital experiences."
								className="px-6 pt-6"
							/>
							<ToolboxItem items={toolboxItems} className="mt-6" />
							<ToolboxItem
								items={toolboxItems}
								className="mt-6"
								itemWapperClassName="-translate-x-1/2"
							/>
						</Card>
					</div>
					{/* Enjoy */}
					<div className="md:grid md:grid-cols-5 gap-8">
						<Card className="h-[320px] p-0 flex flex-col md:col-span-3">
							<CardHeader
								title="Beyonds the Code"
								description="Explore my interests and hobbies beyond the digital realm."
								className="px-6 py-6"
							/>
							<div className="relative flex-1">
								{hobbies.map((hobby) => (
									<div
										key={hobby.title}
										className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-blue-500 rounded-full py-1.5 absolute"
										style={{ left: hobby.left, top: hobby.top }}
									>
										<span className="font-medium text-gray-950">
											{hobby.title}
										</span>
										<span>{hobby.emoji}</span>
									</div>
								))}
							</div>
						</Card>
					</div>
				</div>
			</div>
		</div>
	);
};
