import { categoriesMap } from "@/app/article-categories";
import getPostMetadata from "@/utils/getPostMetadata";
import { validateCategory } from "@/utils/validationUtils";
import Link from "next/link";
import { notFound } from "next/navigation";

export const generateStaticParams = async () => {
	return Object.keys(categoriesMap).map((category) => {
		return { category };
	});
};

export async function generateMetadata({
	params
}: {
	params: Promise<{ category: string }>;
}) {
	const categoryInfo = await params;
	const category = categoryInfo.category.toLowerCase();
	const categoryExists = validateCategory(category);
	if (!categoryExists) return notFound();

	const categoryName = categoriesMap[category].displayName;
	return { title: categoryName };
}

export default async function PostLayout({
	params
}: {
	params: Promise<{ category: string }>;
}) {
	const categoryInfo = await params;
	const category = categoryInfo.category.toLowerCase();
	const categoryExists = validateCategory(category);
	if (!categoryExists) return notFound();

	const categoryName = categoriesMap[category].displayName;

	return (
		<main className="dark:bg-dark-mode-background-grey bg-background-white grow">
			<article className="clear-gutters text-content dark:bg-dark-mode-background-grey dark:text-dark-mode-text-light bg-background-white">
				<div>
					<h1>{categoryName}</h1>
				</div>
				<div>
					Articles in this category:
					<ul>
						{getPostMetadata(category).map((article, index) => {
							return (
								<li key={index}>
									<Link href={`${article.path}`}>
										{article.title}
									</Link>
								</li>
							);
						})}
					</ul>
				</div>
			</article>
		</main>
	);
}
