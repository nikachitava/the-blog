import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
// import { IoMdClose } from "react-icons/io";
import { WiMoonAltNew } from "react-icons/wi";
import { FaRegMoon } from "react-icons/fa";

const Navbar = () => {
	return (
		<div className="h-[72px] py-5 px-5 md:px-8 lg:px-16 relative">
			<div className="flex justify-between items-center">
				<Link to={"/"}>
					<h1 className="font-semibold text-xl">Your Name</h1>
				</Link>
				<GiHamburgerMenu width={48} className="md:hidden" />
				<div className="hidden md:flex justify-between items-center gap-4 text-lg lg:text-xl">
					<div className="flex gap-4">
						<Link to={"/"}>Blogs</Link>
						<Link to={"/projects"}>Projects</Link>
						<Link to={"/about"}>About</Link>
						<Link to={"/newsletter"}>NewsLetter</Link>
					</div>
					<div className="flex gap-2">
						<WiMoonAltNew />
						<FaRegMoon />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
