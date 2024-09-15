import Link from "next/link";

export const metadata = {
	title: "Contact"
};

export default function Contact() {
	return (
		<main className="flex grow flex-col bg-background-white">
			<div>
				<article className="clear-gutters text-content bg-background-white">
					<h1>Contact a1v0</h1>
					<p>
						The best way to contact me is via my{" "}
						<Link
							href="https://www.linkedin.com/in/alvo-von-cossel"
							target="_blank"
						>
							LinkedIn profile
						</Link>
						. Send me a message and I should reply.
					</p>
					<p>
						Make sure to put "a1v0.de" in the title, though,
						otherwise it'll get lost in the day-to-day spam that
						LinkedIn users get sent all the time.
					</p>
				</article>
			</div>
		</main>
	);
}
