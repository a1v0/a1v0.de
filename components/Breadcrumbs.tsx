import { categoriesMap } from "@/app/article-categories";
import Link from "next/link";

function Breadcrumbs(props: { category: string }) {
	const category = props.category;
	const categoryName = categoriesMap[category].displayName;

	return (
		<nav aria-label="Breadcrumb" className="breadcrumbs">
			<ul>
				<li>
					<Link href="/">Home</Link>
				</li>
				<li>
					<Link href={`/${category}`}>{categoryName}</Link>
				</li>
			</ul>
		</nav>
	);
}

export default Breadcrumbs;
