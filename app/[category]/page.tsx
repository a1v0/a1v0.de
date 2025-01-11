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

export const generateMetadata = ({
	params
}: {
	params: { category: string };
}) => {
	const category = params.category.toLowerCase();
	const categoryExists = validateCategory(category);
	if (!categoryExists) return notFound();

	const categoryName = categoriesMap[category].displayName;
	return { title: categoryName };
};

const PostLayout = ({ params }: { params: { category: string } }) => {
	const category = params.category.toLowerCase();
	const categoryExists = validateCategory(category);
	if (!categoryExists) return notFound();

	const categoryName = categoriesMap[category].displayName;

	return (
		<main className="dark:bg-dark-mode-background-grey grow bg-background-white">
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
};

export default PostLayout;
