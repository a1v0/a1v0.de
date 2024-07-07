import { defineDocumentType, makeSource } from "contentlayer/source-files";
import highlight from "rehype-highlight";
import { Pluggable } from "unified";

export const Article = defineDocumentType(() => ({
	name: "Article",
	filePathPattern: `**/*.md`,
	fields: {
		title: { type: "string", required: true },
		date: { type: "date", required: true },
		category: { type: "string", required: true }
	},
	computedFields: {
		url: {
			type: "string",
			resolve: (article) =>
				`/${article.category}/${article._raw.flattenedPath}`
		}
	}
}));

export default makeSource({
	contentDirPath: "articles",
	documentTypes: [Article],
	markdown: { rehypePlugins: [highlight] as Pluggable[] }
});
