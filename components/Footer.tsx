import React from "react";
import Logo from "./Logo";
import Link from "next/link";

function Footer() {
	return (
		<footer className="bg-brand-colour py-2 [&_a]:text-text-dark ">
			<div className="clear-gutters flex items-center justify-between">
				<p>
					Copyright &copy; {new Date().getFullYear()}{" "}
					<strong className="font-medium">a1v0.de</strong>. All rights
					reserved.
				</p>
				<Logo classNames="h-9 my-5" />
				{/* 
                    REFACTOR THESE LINKS INTO A HORIZONTAL FOOTER AT THE BOTTOM OF THE PAGE
                    
                    
                    
                    
                    <nav aria-label="Footer">
						<ul className="flush !ml-3 border-l-2 border-l-softer-black pl-3">
							<li>
								<Link
									className="flex"
									href="https://github.com/a1v0/"
								>
									a1v0 on GitHub
								</Link>
							</li>
							<li>
								<Link href="/contact">Contact</Link>
							</li>
							<li>
								<Link href="/disclaimer">Disclaimer</Link>
							</li>
							<li>
								<Link href="/sitemap.xml">Sitemap</Link>
							</li>
						</ul>
					</nav> */}
			</div>
		</footer>
	);
}

export default Footer;
