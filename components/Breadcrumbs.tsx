import { categoriesMap } from "@/app/article-categories";
import Link from "next/link";

function Breadcrumbs(props: { category: string }) {
	const category = props.category;
	const categoryName = categoriesMap[category].displayName;

	return (
		<nav aria-label="Breadcrumb" className="breadcrumbs">
			<ol>
				<li>
					<Link href="/">Home</Link>
				</li>
				<li>
					<Link href={`/${category}`}>{categoryName}</Link>
				</li>
			</ol>
		</nav>
	);
}

export default Breadcrumbs;
