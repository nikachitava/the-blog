import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { DarkModeContext } from "../context/darkModeContext";
import { IoMdClose } from "react-icons/io";

const Menu = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [menuHeight, setMenuHeight] = useState("0px");
	const { isDarkMode } = useContext(DarkModeContext);

	const toggleMenu = () => {
		setIsMenuOpen((prev) => !prev);
	};

	useEffect(() => {
		if (isMenuOpen) {
			setMenuHeight("100vh");
		} else {
			setMenuHeight("0px");
		}
	}, [isMenuOpen]);

	return (
		<>
			<div
				className={`fixed w-full left-0 top-0 bg-black z-10 overflow-hidden transition-height duration-500 ease-in-out`}
				style={{ height: menuHeight }}
			>
				<div className="flex flex-col justify-center items-center gap-10 mt-20">
					<Link to={"/"} className="text-white" onClick={toggleMenu}>
						Blogs
					</Link>
					<Link
						to={"/projects"}
						className="text-white"
						onClick={toggleMenu}
					>
						Projects
					</Link>
					<Link
						to={"/about"}
						className="text-white"
						onClick={toggleMenu}
					>
						About
					</Link>
					<Link
						to={"/newsletter"}
						className="text-white"
						onClick={toggleMenu}
					>
						NewsLetter
					</Link>
					<IoMdClose
						size={24}
						color="white"
						className="cursor-pointer"
						onClick={toggleMenu}
					/>
				</div>
			</div>
			<GiHamburgerMenu
				size={24}
				className="md:hidden cursor-pointer"
				color={isDarkMode ? "white" : "black"}
				onClick={toggleMenu}
			/>
		</>
	);
};

export default Menu;
