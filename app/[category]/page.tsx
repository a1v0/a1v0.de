//
// to-do:
// - move the articles page into a category subfolder so that each article renders as part of its category
// - replace menu links with category links
//
// https://medium.com/frontendweb/how-to-build-the-static-blog-with-content-layer-markdown-and-nextjs-29f6ac93d06
// this article can guide if necessary
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
import { categoriesMap } from "@/app/article-categories";
import { allArticles } from "contentlayer/generated";
import Link from "next/link";
import { notFound } from "next/navigation";

export const generateStaticParams = async () => {
	return allArticles.map((article) => {
		return { category: article.category.toLowerCase() };
	});
};

export const generateMetadata = ({
	params
}: {
	params: { category: string };
}) => {
	const post = allArticles.find((post) => {
		return post.category.toLowerCase() === params.category.toLowerCase();
	});
	if (!post) {
		return notFound();
	}

	const categoryName = categoriesMap[post.category].displayName;
	return { title: categoryName };
};

const PostLayout = ({ params }: { params: { category: string } }) => {
	const post = allArticles.find(
		(post) => post.category.toLowerCase() === params.category.toLowerCase()
	);
	if (!post) {
		return notFound();
	}

	const categoryName = categoriesMap[post.category].displayName;

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
								article.category === post.category;
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
