import { format, parseISO } from "date-fns";
import { allArticles } from "contentlayer/generated";
import { notFound } from "next/navigation";
import Markdown from "markdown-to-jsx";
import getPostMetadata, { PostMetadata } from "@/utils/getPostMetadata";
import React from "react";
import fs from "fs";
import matter from "gray-matter";
import { categoriesMap } from "@/app/article-categories";

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

function getPostContent(slug: string, category: string) {
	const folder = `articles/${category}/`;
	const file = folder + `${slug}.md`;
	const content = fs.readFileSync(file, "utf-8");

	const matterResult = matter(content);
	return matterResult;
}

export const generateMetadata = ({
	params
}: {
	params: { articleName: string; category: string };
}) => {
	const post = allArticles.find((post) => {
		const hasCorrectName =
				post._raw.flattenedPath.toLowerCase() ===
				params.articleName.toLowerCase(),
			hasCorrectCategory =
				post.category.toLowerCase() === params.category.toLowerCase();
		return hasCorrectName && hasCorrectCategory;
	});
	if (!post) {
		return notFound();
	}

	return { title: post.title };
};

const PostLayout = ({
	params
}: {
	params: { articleName: string; category: string };
}) => {
	const post = allArticles.find((post) => {
		return (
			post._raw.flattenedPath.toLowerCase() ===
			params.articleName.toLowerCase()
		);
	});
	if (!post) {
		return notFound();
	}

	return (
		<main className="grow bg-background-white">
			<div>
				<article className="clear-gutters text-content bg-background-white">
					<div>
						<h1>{post.title}</h1>
						<time dateTime={post.date}>
							{format(parseISO(post.date), "LLLL d, yyyy")}
						</time>
					</div>
					<div
						className="[&>*:last-child]:mb-0 [&>*]:mb-3"
						dangerouslySetInnerHTML={{ __html: post.body.html }}
					/>
				</article>
			</div>
		</main>
	);
};

export default PostLayout;
