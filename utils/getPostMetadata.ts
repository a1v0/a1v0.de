import fs from "fs";
import matter from "gray-matter";

interface PostMetadata {
	title: string;
	date: string;
	category: string;
	slug: string;
}

export default function getPostMetadata(basePath: string) {
	const folder = basePath + "/";
	const allFiles = fs.readdirSync(folder);
	const markdownFiles = allFiles.filter((file) => {
		return file.endsWith(".md");
	});

	const posts = markdownFiles.map((filename) => {
		const fileContents = fs.readFileSync(
			`${basePath}/${filename}`,
			"utf-8"
		);

		const matterResult = matter(fileContents);

		const metadata: PostMetadata = {
			title: matterResult.data.title,
			date: matterResult.data.date,
			category: matterResult.data.category,
			slug: filename.replace(".md", "")
		};

		return metadata;
	});

	return posts;
}
