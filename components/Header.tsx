"use client";

import React, { useEffect, useState } from "react";
import LogoLink from "./LogoLink";
import Menu from "./Menu";
import { usePathname } from "next/navigation";

function Header() {
	const [showMenu, setShowMenu] = useState(false);

	const pathname = usePathname();
	useEffect(() => {
		setShowMenu(false);
		window.scrollTo(0, 0);
	}, [pathname]);

	const downChevronPath =
			"M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z",
		upChevronPath =
			"M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z";
	return (
		<header>
			<nav className="bg-brand-colour" aria-label="Main">
				<div className="clear-gutters flex items-stretch justify-between p-0">
					<div className="py-1">
						<LogoLink />
					</div>
					<div
						className={`border-y-4 ${
							showMenu
								? "border-hidden bg-background-grey"
								: "border-solid border-y-brand-colour bg-brand-colour hover:border-b-softer-black hover:border-t-brand-colour"
						}`}
					>
						<button
							onClick={() => {
								setShowMenu(!showMenu);
							}}
							className="flex h-full w-full items-center border-x-2 border-x-softer-black px-4 py-1 text-lg"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="mr-2 h-4 w-4"
								viewBox="0 0 16 16"
							>
								<path
									fillRule="evenodd"
									d={
										showMenu
											? upChevronPath
											: downChevronPath
									}
								/>
							</svg>
							Menu
						</button>
					</div>
				</div>
			</nav>
			{showMenu ? <Menu /> : ""}
		</header>
	);
}

export default Header;
