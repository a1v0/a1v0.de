import fs from "fs";
import matter from "gray-matter";

export interface PostMetadata {
	title: string;
	date: string;
	category: string;
	slug: string;
	path: string;
}

export default function getPostMetadata(category: string) {
	const folder = `articles/${category}/`;
	const allFiles = fs.readdirSync(folder);
	const markdownFiles = allFiles.filter((file) => {
		return file.endsWith(".md");
	});

	const posts = getPosts(markdownFiles, category);

	return posts;
}

function getPosts(markdownFiles: string[], category: string) {
	return markdownFiles.map((filename) => {
		const fileContents = fs.readFileSync(
			`articles/${category}/${filename}`,
			"utf-8"
		);

		const matterResult = matter(fileContents);
		const slug = filename.replace(".md", "");

		const metadata: PostMetadata = {
			title: matterResult.data.title,
			date: matterResult.data.date,
			category: matterResult.data.category,
			slug: slug,
			path: `${matterResult.data.category}/${slug}`
		};

		return metadata;
	});
}
