import { notFound } from "next/navigation";
import getPostMetadata, { PostMetadata } from "@/utils/getPostMetadata";
import React from "react";
import fs from "fs";
import matter from "gray-matter";
import { categoriesMap } from "@/app/article-categories";
import { renderMarkdown } from "@/utils/renderMarkdown";
import { validateCategory } from "@/utils/validationUtils";
import Breadcrumbs from "@/components/Breadcrumbs";

export const generateStaticParams = async () => {
	const allArticles: PostMetadata[] = [];
	Object.keys(categoriesMap).forEach((category) => {
		const articles = getPostMetadata(category);
		allArticles.push(...articles);
	});

	return allArticles.map((article) => {
		return { articleName: article.slug, category: article.category };
	});
};

export const generateMetadata = ({
	params
}: {
	params: { articleName: string; category: string };
}) => {
	const category = params.category.toLowerCase();
	const categoryExists = validateCategory(category);
	if (!categoryExists) return notFound();

	const articleName = params.articleName.toLowerCase();
	const articles = getPostMetadata(category);
	const article = articles.find((item) => {
		return item.slug === articleName;
	});

	if (!article) {
		return notFound();
	}

	return { title: article.title };
};

const getPostContent = (articleName: string, category: string) => {
	category = category.toLowerCase();
	articleName = articleName.toLowerCase();

	const categoryExists = validateCategory(category);
	if (!categoryExists) return notFound();

	const folder = `articles/${category}/`;
	const file = folder + `${articleName}.md`;

	const fileExists = fs.existsSync(file);
	if (!fileExists) return notFound();

	const content = fs.readFileSync(file, "utf-8");

	const matterResult = matter(content);
	return matterResult;
};

const getDateString = (isoDate: string) => {
	const date = new Date(isoDate);
	const options: Intl.DateTimeFormatOptions = {
		year: "numeric",
		month: "long",
		day: "numeric"
	};

	return date.toLocaleDateString("en-US", options);
};

const PostLayout = async ({
	params
}: {
	params: { articleName: string; category: string };
}) => {
	const category = params.category.toLowerCase();
	const categoryExists = validateCategory(category);
	if (!categoryExists) return notFound();

	const articleName = params.articleName.toLowerCase();
	const article = getPostContent(articleName, category),
		articleMetadata = getPostMetadata(category).find((item) => {
			return item.slug === articleName.toLowerCase();
		});

	if (!articleMetadata) return notFound();

	const content = await renderMarkdown(article.content);

	return (
		<main className="grow bg-background-white dark:bg-dark-mode-background-grey">
			<div>
				<article className="clear-gutters text-content bg-background-white dark:bg-dark-mode-background-grey dark:text-dark-mode-text-light">
					<div>
						<h1>{articleMetadata.title}</h1>
						<div className="flex flex-col justify-between sm:flex-row">
							<Breadcrumbs category={category} />
							<time dateTime={articleMetadata.date}>
								{getDateString(articleMetadata.date)}
							</time>
						</div>
					</div>

					<div dangerouslySetInnerHTML={{ __html: content }} />
				</article>
			</div>
		</main>
	);
};

export default PostLayout;
