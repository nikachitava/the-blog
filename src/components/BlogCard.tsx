import CategoryButton from "./CategoryButton";

const BlogCard = () => {
	return (
		<div className="md:flex md:items-start md:gap-6">
			<img
				src="https://images.pexels.com/photos/840996/pexels-photo-840996.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
				alt="img"
				className="sm:w-full md:w-[320px]"
			/>
			<div className="mt-6 md:mt-0 flex flex-col gap-3">
				<span className="text-[#6941C6] text-sm">
					Saturday, 1 Jan 2023
				</span>
				<h1 className="font-semibold text-2xl">
					UX Review presentations
				</h1>
				<p className="text-[#667085] text-sm">
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
