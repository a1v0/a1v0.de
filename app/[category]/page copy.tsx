import { categoriesMap } from "@/app/article-categories";
import { allArticles } from "contentlayer/generated";
import Link from "next/link";
import { notFound } from "next/navigation";

export const generateStaticParams = async () => {
	return Object.keys(categoriesMap);
};

export const generateMetadata = ({
	params
}: {
	params: { category: string };
}) => {
	const category = params.category.toLowerCase();
	const post = categoriesMap[category];
	if (!post) {
		return notFound();
	}

	const categoryName = categoriesMap[category].displayName;
	return { title: categoryName };
};

const PostLayout = ({ params }: { params: { category: string } }) => {
	const category = params.category.toLowerCase();
	const post = categoriesMap[category];
	if (!post) {
		return notFound();
	}

	const categoryName = categoriesMap[category].displayName;

	return (
		<main className="grow bg-background-white">
			<article className="clear-gutters text-content bg-background-white">
				<div>
					<h1>{categoryName}</h1>
				</div>
				<div>
					Articles in this category:
					<ul>
						{allArticles.map((article, index) => {
							const articleIsInCategory =
								article.category === category;
							return articleIsInCategory ? (
								<li key={index}>
									<Link href={article.url}>
										{article.title}
									</Link>
								</li>
							) : null;
						})}
					</ul>
				</div>
			</article>
		</main>
	);
};

export default PostLayout;
