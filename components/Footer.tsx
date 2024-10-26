import React from "react";
import Logo from "./Logo";
import Link from "next/link";

function Footer() {
	return (
		<footer className="bg-brand-colour py-2 [&_a]:text-text-dark ">
			<div className="clear-gutters flex items-center justify-between">
				<section className="flex grow-[3] flex-col">
					<p className="m-0">
						Copyright &copy; {new Date().getFullYear()}{" "}
						<strong className="font-medium">a1v0.de</strong>. All
						rights reserved.
					</p>
					<nav aria-label="Footer">
						<ul className="flush m-0 flex">
							<li className="m-0 pr-5">
								<Link href="/disclaimer">Disclaimer</Link>
							</li>
							<li className="m-0 pr-5">
								<Link href="/contact">Contact</Link>
							</li>
							<li className="m-0 pr-5">
								<Link href="/sitemap.xml">Sitemap</Link>
							</li>
							<li className="m-0 pr-5">
								<Link href="https://github.com/a1v0/">
									GitHub
								</Link>
							</li>
						</ul>
					</nav>
				</section>
				<div className="flex grow-[2] justify-end">
					<Logo classNames="h-9 my-5" />
				</div>
			</div>
		</footer>
	);
}

export default Footer;
