import CategoryButton from "./CategoryButton";

interface IBlogCardProps {
	horizontal: boolean;
}

const BlogCard: React.FC<IBlogCardProps> = ({ horizontal }) => {
	return (
		<div
			className={`md:gap-6 ${
				horizontal ? "md:w-[320px]" : "md:flex md:items-start"
			} `}
		>
			<img
				src="https://images.pexels.com/photos/840996/pexels-photo-840996.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
				alt="img"
				className={`m:w-full md:w-[320px]`}
			/>
			<div
				className={`mt-6 flex flex-col items-start gap-3 ${
					horizontal ? "md:mt-4" : "md:mt-0"
				}`}
			>
				<span className="text-[#6941C6] text-sm font-semibold">
					Saturday, 1 Jan 2023
				</span>
				<h1 className="font-semibold text-2xl dark:text-white">
					UX Review presentations
				</h1>
				<p className="text-sm text-[#667085] dark:text-[#C0C5D0] text-left">
					How do you create compelling presentations that wow your
					colleagues and impress your managers?
				</p>
				<div className="flex items-center flex-wrap gap-2">
					<CategoryButton category={"Design"} />
					<CategoryButton category={"Software Development"} />
					<CategoryButton category={"Tools"} />
				</div>
			</div>
		</div>
	);
};

export default BlogCard;
