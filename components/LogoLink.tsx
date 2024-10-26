import React from "react";
import Logo from "./Logo";
import Link from "next/link";

export default function LogoLink() {
	return (
		<Link
			aria-label="Homepage"
			href="/"
			className="group flex flex-row items-center pr-2.5 text-xl font-medium text-text-dark no-underline visited:text-text-dark visited:no-underline hover:rounded-bl hover:text-text-dark hover:no-underline active:rounded-br-2xl active:rounded-tl-2xl active:rounded-tr"
		>
			<div className="mr-2.5 inline-block rounded-bl-2xl rounded-br rounded-tl rounded-tr-2xl bg-accent-colour p-2.5 transition-all duration-500 ease-in-out group-hover:rounded-bl group-hover:rounded-br-2xl group-hover:rounded-tl-2xl group-hover:rounded-tr">
				<Logo classNames="h-6" />
			</div>
			a1v0.de
		</Link>
	);
}
