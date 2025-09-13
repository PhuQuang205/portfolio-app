import { TechIcon } from "@/components/TechIcon";
import { ElementType } from "react";
import { twMerge } from "tailwind-merge";

export const ToolboxItem = ({
	items,
	className,
	itemWapperClassName,
}: {
	items: {
		title: string;
		iconType: ElementType;
	}[];
	className?: string;
	itemWapperClassName?: string;
}) => {
	return (
		<div
			className={twMerge(
				"flex p-0.5 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
				className
			)}
		>
			<div className={twMerge("flex flex-none py-0.5 gap-6 pr-6", itemWapperClassName)}>
				{items.map((item) => (
					<div
						key={item.title}
						className="inline-flex gap-4 items-center py-2 px-3 outline outline-2 outline-white/10 rounded-lg"
					>
						<TechIcon component={item.iconType} />
						<span className="font-semibold">{item.title}</span>
					</div>
				))}
			</div>
		</div>
	);
};
