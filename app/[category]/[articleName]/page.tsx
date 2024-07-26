import { notFound } from "next/navigation";
import getPostMetadata, { PostMetadata } from "@/utils/getPostMetadata";
import React from "react";
import fs from "fs";
import matter from "gray-matter";
import { categoriesMap } from "@/app/article-categories";
import { renderMarkdown } from "@/utils/renderMarkdown";

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
	const articles = getPostMetadata(params.category);
	const article = articles.find((item) => {
		return item.slug === params.articleName.toLowerCase();
	});

	if (!article) {
		return notFound();
	}

	return { title: article.title };
};

const getPostContent = (articleName: string, category: string) => {
	const folder = `articles/${category}/`;
	const file = folder + `${articleName}.md`;
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
	const article = getPostContent(params.articleName, params.category),
		articleMetadata = getPostMetadata(params.category).find((item) => {
			return item.slug === params.articleName.toLowerCase();
		});

	if (!articleMetadata) {
		return notFound();
	}

	const content = await renderMarkdown(article.content);

	return (
		<main className="grow bg-background-white">
			<div>
				<article className="clear-gutters text-content bg-background-white">
					<div>
						<h1>{articleMetadata.title}</h1>
						<time dateTime={articleMetadata.date}>
							{getDateString(articleMetadata.date)}
						</time>
					</div>

					<div dangerouslySetInnerHTML={{ __html: content }} />
				</article>
			</div>
		</main>
	);
};

export default PostLayout;
