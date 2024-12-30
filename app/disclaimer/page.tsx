import Link from "next/link";

export const metadata = {
	title: "Disclaimer"
};

export default function Disclaimer() {
	return (
		<main className="flex grow flex-col bg-background-white">
			<div>
				<article className="clear-gutters text-content bg-background-white">
					<h1>Disclaimer</h1>
					<p>
						This website, a1v0.de, and{" "}
						<Link href="/contact">its author</Link> can accept no
						liability for any incorrect or outdated information
						given. I do my best to ensure my posts are accurate and
						properly proofread, and I try to ensure that the
						limitations of my posts are stated clearly, but
						nobody&apos;s perfect.
					</p>
					<p>
						It is the responsibility of anyone who chooses to copy
						and paste code from this website to ensure that it is
						suitable for their system.
					</p>
					<p>
						At the end of the day, the contents of this site are
						little more than opinions and thoughts of one
						individual. The articles on this site are not
						peer-reviewed.
					</p>
				</article>
			</div>
		</main>
	);
}
