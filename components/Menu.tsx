import React from "react";
import Link from "next/link";
import { categoriesMap } from "@/app/article-categories";

export default function Menu() {
	return (
		<section className="bg-background-grey">
			<div className="clear-gutters flex flex-col justify-stretch pb-8 pt-4 sm:flex-row">
				<div className="flex-1">
					<h2>Topics</h2>
					<ul className="flush">
						{Object.keys(categoriesMap).map((category, index) => {
							return (
								<li key={index}>
									<Link href={"/" + category}>
										{categoriesMap[category].displayName}
									</Link>
								</li>
							);
						})}
					</ul>
				</div>
				<div className="flex-1">
					<h2>Links</h2>
					<ul className="flush">
						<li>
							<Link href="https://github.com/a1v0">
								My GitHub
							</Link>
						</li>
						<li>
							<Link href="https://github.com/a1v0/a1v0.de">
								This Website on GitHub
							</Link>
						</li>
						<li>
							<Link href="/contact">Contact a1v0</Link>
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
}
