import BlogCard from "../components/BlogCard";

const Home = () => {
	return (
		<div className="">
			<div className="border-y-2 mb-12 flex justify-between  gap-1 font-bold text-[88px] md:text-[160px] lg:text-[244px] text-[#1A1A1A] dark:text-white">
				<span>THE</span>
				<span>BLOG</span>
			</div>
			<h1 className="mb-8 text-2xl font-semibold dark:text-white">
				Recent blog posts
			</h1>

			<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-14 mb-10">
				<BlogCard />
				<BlogCard />
				<BlogCard />
			</div>
		</div>
	);
};

export default Home;
