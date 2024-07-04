import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Root = () => {
	return (
		<div className="px-5 md:px-8 lg:px-32 ">
			<Navbar />
			<Outlet />
		</div>
	);
};

export default Root;
