import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Projects from "./pages/Projects.tsx";
import About from "./pages/About.tsx";
import Newsletter from "./pages/Newsletter.tsx";
import Root from "./pages/Root.tsx";

import { DarkThemeContextProvider } from "./context/darkModeContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<Router>
			<DarkThemeContextProvider>
				<Routes>
					<Route path="/" element={<Root />}>
						<Route index element={<Home />} />
						<Route path="about" element={<About />} />
						<Route path="projects" element={<Projects />} />
						<Route path="newsletter" element={<Newsletter />} />
					</Route>
				</Routes>
			</DarkThemeContextProvider>
		</Router>
	</React.StrictMode>
);
