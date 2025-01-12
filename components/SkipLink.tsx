import Link from "next/link";

function SkipLink() {
	return (
		<Link
			href="#main-content"
			className="skip-link absolute block !h-0 !w-0 overflow-hidden bg-accent-colour focus:static focus:!h-auto focus:!w-full focus:p-1 dark:bg-dark-mode-accent-colour"
		>
			Skip to main content
		</Link>
	);
}

export default SkipLink;
