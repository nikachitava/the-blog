import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Root = () => {
	return (
		<div className="sm:px-5 md:px-8 lg:px-32 dark:bg-[#090D1F]">
			<Navbar />
			<Outlet />
			<Footer />
		</div>
	);
};

export default Root;
