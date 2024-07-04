import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
// import { IoMdClose } from "react-icons/io";
import { WiMoonAltNew } from "react-icons/wi";
import { FaRegMoon } from "react-icons/fa";
import { useContext } from "react";
import { DarkModeContext } from "../context/darkModeContext";

import { TbSun } from "react-icons/tb";

const Navbar = () => {
	const { toggleDarkMode, isDarkMode } = useContext(DarkModeContext);

	return (
		<div className="h-20 py-5 relative">
			<div className="flex justify-between items-center">
				<Link to={"/"}>
					<h1 className="font-semibold text-xl dark:text-white">
						Your Name
					</h1>
				</Link>
				<GiHamburgerMenu width={48} className="md:hidden" />
				<div className="hidden md:flex justify-between items-center gap-4 text-lg lg:text-xl ">
					<div className="flex gap-4 dark:text-white">
						<Link to={"/"}>Blogs</Link>
						<Link to={"/projects"}>Projects</Link>
						<Link to={"/about"}>About</Link>
						<Link to={"/newsletter"}>NewsLetter</Link>
					</div>
					<div className="flex gap-2 rounded-full px-4 py-2 bg-[#090D1F] dark:bg-white">
						{!isDarkMode ? (
							<>
								<TbSun
									onClick={toggleDarkMode}
									className="cursor-pointer"
									size={24}
									color="white"
								/>
								<WiMoonAltNew
									onClick={toggleDarkMode}
									className="cursor-pointer"
									size={24}
									color="white"
								/>
							</>
						) : (
							<>
								<WiMoonAltNew
									onClick={toggleDarkMode}
									className="cursor-pointer"
									size={24}
								/>
								<FaRegMoon
									onClick={toggleDarkMode}
									className="cursor-pointer"
									size={24}
								/>
							</>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
