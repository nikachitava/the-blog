import BlogCard from "../components/BlogCard";

const Home = () => {
	return (
		<div className="">
			<div className="border-y-2 mb-12 flex justify-between  gap-1 font-bold text-[88px] md:text-[160px] lg:text-[244px] text-[#1A1A1A] dark:text-white">
				<span>THE</span>
				<span>BLOG</span>
			</div>
			<div>
				<h1 className="mb-8 text-2xl font-semibold dark:text-white">
					Recent blog posts
				</h1>
				<div className="grid grid-cols-1 gap-5">
					<BlogCard horizontal={false} />
					<BlogCard horizontal={false} />
					<BlogCard horizontal={false} />
				</div>
			</div>

			<h1 className="mb-8 mt-16 text-2xl font-semibold dark:text-white">
				All Posts
			</h1>

			<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-14 mb-10">
				<BlogCard horizontal={true} />
				<BlogCard horizontal={true} />
				<BlogCard horizontal={true} />
				<BlogCard horizontal={true} />
				<BlogCard horizontal={true} />
			</div>
		</div>
	);
};

export default Home;
