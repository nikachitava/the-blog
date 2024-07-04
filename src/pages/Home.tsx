import BlogCard from "../components/BlogCard";

const Home = () => {
	return (
		<div className="">
			<div className="flex justify-between  gap-1 font-bold text-[88px] md:text-[160px] lg:text-[244px] text-[#1A1A1A]">
				<span>THE</span>
				<span>BLOG</span>
			</div>
			<h1 className="mb-8">Recent blog posts</h1>

			<div className="grid grid-cols-1 gap-8 mb-10">
				<BlogCard />
				<BlogCard />
				<BlogCard />
			</div>
		</div>
	);
};

export default Home;
