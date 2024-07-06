//
// to-do:
// - create a page for all categories
// - sub-page each category, populated by slug
// - move the articles page into a slug subfolder so that each article renders as part of its category
//
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
import { allArticles } from "contentlayer/generated";
import { notFound } from "next/navigation";

const PostLayout = ({ params }: { params: { slug: string } }) => {
	const post = allArticles.find(
		(post) => post._raw.flattenedPath === params.slug // this probably isn't right
	);
	if (!post) {
		return notFound();
	}
};

export default PostLayout;
