import grainImage from "@/assets/images/grain.jpg";
import { twMerge } from "tailwind-merge";

type CardProps = {
	className?: string;
    children?: React.ReactNode;
};

export const Card = ({ className, children }: CardProps) => {
	return (
		<div
			className={twMerge(
				"bg-gray-800 relative z-0 rounded-3xl overflow-hidden after:contents-[''] after:inset-0 after:absolute after:-z-10  after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 after:pointer-events-none p-6",
				className
			)}
		>
			<div
				className="absolute inset-0 -z-10 opacity-5"
				style={{ backgroundImage: `url(${grainImage.src})` }}
			></div>
            {children}
		</div>
	);
};
