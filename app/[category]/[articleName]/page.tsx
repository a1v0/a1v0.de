import { format, parseISO } from "date-fns";
import { allArticles } from "contentlayer/generated";
import { notFound } from "next/navigation";
import Markdown from "markdown-to-jsx";
import getPostMetadata, { PostMetadata } from "@/utils/getPostMetadata";
import React from "react";
import fs from "fs";
import matter from "gray-matter";
import { categoriesMap } from "@/app/article-categories";
import { deepStrictEqual } from "assert";
import Link from "next/link";

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

const PostLayout = ({
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
					<Markdown
						className="[&>*:last-child]:mb-0 [&>*]:mb-3"
						options={{
							overrides: {
								a: {
									component: Link
								}
							},
							namedCodesToUnicode: {
								mdash: "\u2014",
								minus: "\u2212",
								ecirc: "\u00EA",
								iuml: "\u00EF"
							}
						}}
					>
						{article.content}
					</Markdown>
				</article>
			</div>
		</main>
	);
};

export default PostLayout;
