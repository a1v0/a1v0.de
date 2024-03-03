import React from "react";
import Link from "next/link";
import { allArticles } from "contentlayer/generated";

export default function Menu() {
	return (
		<section className="bg-background-grey">
			<div className="clear-gutters flex justify-stretch py-8">
				<div className="flex-1">
					<h2>Articles</h2>
					<ul className="flush">
						{allArticles.map((article, index) => {
							return (
								<li key={index}>
									<Link href={article.url}>
										{article.title}
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
						{/* 
                        - LinkedIn?
                        */}
					</ul>
				</div>
			</div>
		</section>
	);
}
