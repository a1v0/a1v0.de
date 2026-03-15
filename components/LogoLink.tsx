import React from "react";
import Logo from "./Logo";
import Link from "next/link";

export default function LogoLink() {
	return (
		<Link
			aria-label="Homepage"
			href="/"
			className="group text-text-dark visited:text-text-dark hover:text-text-dark dark:text-dark-mode-text-light dark:visited:text-dark-mode-text-light dark:hover:text-dark-mode-text-light dark:active:text-dark-mode-background-dark-grey flex flex-row items-center pr-2.5 text-xl font-medium no-underline visited:no-underline hover:rounded-bl hover:no-underline active:rounded-tl-2xl active:rounded-tr active:rounded-br-2xl"
		>
			<div className="bg-accent-colour dark:bg-dark-mode-accent-colour mr-2.5 inline-block rounded-tl rounded-tr-2xl rounded-br rounded-bl-2xl p-2.5 transition-all duration-500 ease-in-out group-hover:rounded-tl-2xl group-hover:rounded-tr group-hover:rounded-br-2xl group-hover:rounded-bl">
				<Logo classNames="h-6" />
			</div>
			a1v0.de
		</Link>
	);
}
