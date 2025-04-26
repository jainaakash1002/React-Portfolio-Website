import React, { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";

import "./topbar.css";

const Topbar = () => {
	const [activeNav, setActiveNav] = useState("#home");
	return (
		<nav>
			{/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
			<a
				href="#home"
				onClick={() => setActiveNav("#home")}
				className={activeNav === "#home" ? "active" : ""}
			>
				<AiOutlineHome />
			</a>
			{/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
			<a
				href="#about"
				onClick={() => setActiveNav("#about")}
				className={activeNav === "#about" ? "active" : ""}
			>
				<AiOutlineUser />
			</a>
			{/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
			<a
				href="#experience"
				onClick={() => setActiveNav("#experience")}
				className={activeNav === "#experience" ? "active" : ""}
			>
				<BiBook />
			</a>
			{/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
			<a
				href="#portfolio"
				onClick={() => setActiveNav("#portfolio")}
				className={activeNav === "#portfolio" ? "active" : ""}
			>
				<RiServiceLine />
			</a>
			{/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
			<a
				href="#contact"
				onClick={() => setActiveNav("#contact")}
				className={activeNav === "#contact" ? "active" : ""}
			>
				<BiMessageSquareDetail />
			</a>
		</nav>
	);
};

export default Topbar;
