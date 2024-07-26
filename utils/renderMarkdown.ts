import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import rehypeStringify from "rehype-stringify";
import remarkRehype from "remark-rehype";
import remarkParse from "remark-parse";
import { unified } from "unified";

export function renderMarkdown(markdown: string): Promise<string> {
	return unified()
		.use(remarkParse)
		.use(remarkRehype)
		.use(rehypeHighlight)
		.use(rehypeSlug)
		.use(rehypeStringify)
		.process(markdown)
		.then((res) => res.toString());
}
