function SkipLink() {
	return (
		<a
			href="#main-content"
			className="absolute block !h-0 !w-0 overflow-hidden bg-accent-colour focus:static focus:!h-auto focus:!w-full focus:p-1"
		>
			Skip to main content
		</a>
	);
}

export default SkipLink;
