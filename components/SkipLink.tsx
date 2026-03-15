import Link from "next/link";

function SkipLink() {
	return (
		<Link
			href="#main-content"
			className="skip-link bg-accent-colour dark:bg-dark-mode-accent-colour absolute block h-0! w-0! overflow-hidden focus:static focus:h-auto! focus:w-full! focus:p-1"
		>
			Skip to main content
		</Link>
	);
}

export default SkipLink;
