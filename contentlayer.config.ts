import { defineDocumentType, makeSource } from "contentlayer/source-files";
import highlight from "rehype-highlight";

export const Article = defineDocumentType(() => ({
    name: "Article",
    filePathPattern: `**/*.md`,
    fields: {
        title: { type: "string", required: true },
        date: { type: "date", required: true }
    },
    computedFields: {
        url: {
            type: "string",
            resolve: (article) => `/articles/${article._raw.flattenedPath}`
        }
    }
}));

export default makeSource({
    contentDirPath: "articles",
    documentTypes: [Article],
    markdown: { rehypePlugins: [highlight] }
});
