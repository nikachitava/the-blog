import { useContext } from "react";
import { DarkModeContext } from "../context/darkModeContext";

interface ICategoryButtonProps {
	category: string;
}

const CategoryButton: React.FC<ICategoryButtonProps> = ({ category }) => {
	const { isDarkMode } = useContext(DarkModeContext);
	const checkCategoryButtonColor = (category: string) => {
		switch (category) {
			case "Design":
				return "#6941C6";
			case "Research":
				return "#3538CD";
			case "Software Development":
				return "#027A48";
			case "Tools":
				return "#C11574";
			case "Saas":
				return "#C01048";
		}
	};

	const lightenColor = (color: any, percent: number) => {
		let num = parseInt(color.slice(1), 16),
			amt = Math.round(2.55 * percent),
			R = (num >> 16) + amt,
			G = ((num >> 8) & 0x00ff) + amt,
			B = (num & 0x0000ff) + amt;

		return (
			"#" +
			(
				0x1000000 +
				(R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
				(G < 255 ? (G < 1 ? 0 : G) : 255) * 0x100 +
				(B < 255 ? (B < 1 ? 0 : B) : 255)
			)
				.toString(16)
				.slice(1)
				.toUpperCase()
		);
	};

	const categoryButtonColor = checkCategoryButtonColor(category);
	const buttonBackground = lightenColor(categoryButtonColor, 85);

	return (
		<div
			style={{
				color: categoryButtonColor,
				backgroundColor: isDarkMode ? "#FDF2FA" : buttonBackground,
			}}
			className="cursor-pointer rounded-md bg-opacity-25 py-1 px-4 text-sm dark:bg-[#FDF2FA]"
		>
			{category}
		</div>
	);
};

export default CategoryButton;
