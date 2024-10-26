import React from "react";
import Logo from "./Logo";
import Link from "next/link";

function Footer() {
	return (
		<footer className="bg-brand-colour py-2 [&_a]:text-text-dark ">
			<div className="clear-gutters flex items-center justify-between">
				<section className="flex flex-col">
					<p className="m-0">
						Copyright &copy; {new Date().getFullYear()}{" "}
						<strong className="font-medium">a1v0.de</strong>. All
						rights reserved.
					</p>
					<nav aria-label="Footer">
						<ul className="flush m-0 flex justify-between">
							<li>
								<Link href="/disclaimer">Disclaimer</Link>
							</li>
							<li>
								<Link href="/contact">Contact</Link>
							</li>
							<li>
								<Link href="/sitemap.xml">Sitemap</Link>
							</li>
							<li>
								<Link href="https://github.com/a1v0/">
									GitHub
								</Link>
							</li>
						</ul>
					</nav>
				</section>
				<Logo classNames="h-9 my-5" />
			</div>
		</footer>
	);
}

export default Footer;
