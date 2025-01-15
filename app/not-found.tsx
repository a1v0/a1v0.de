export const metadata = {
	title: "404"
};

function NotFoundPage() {
	return (
		<main className="flex grow flex-col">
			<div className="bg-accent-colour  dark:bg-dark-mode-background-grey dark:text-dark-mode-accent-colour">
				<header className="clear-gutters py-16">
					<h1 className="m-auto p-0">
						<span className="block">Page not found.</span>
						<span className="block text-softer-black dark:text-brand-colour">
							Better luck next time.
						</span>
					</h1>
				</header>
			</div>
			<div className="text-content grow bg-background-white dark:bg-dark-mode-background-grey dark:text-dark-mode-text-light">
				<article className="clear-gutters">
					<h2>What do I do now?</h2>
					<p>
						All that&apos;s left at this point is to go home and
						rethink your life. Nothing good will come of you
						lingering on this page. Quoth the Server: 404.
					</p>
				</article>
			</div>
		</main>
	);
}

export default NotFoundPage;
