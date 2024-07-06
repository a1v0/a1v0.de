//
// to-do:
// - create a page for all categories
// - sub-page each category, populated by slug
// - move the articles page into a slug subfolder so that each article renders as part of its category
// - if possible, find a way to map categories to names, so that:
//   a) all categories can be lowercase in the articles
//   b) while a category may be named C-Sharp in the backend, the frontend can display C# (C-Sharp looks rubbish)
//   - this could be achieved potentially by creating a simple dictionary that maps categories to their display
//     names (any any other data I might want to pass in)
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

export const generateStaticParams = async () => {
	return allArticles.map((article) => {
		return { slug: article.category.toLowerCase() };
	});
};

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
	const post = allArticles.find((post) => {
		return post.category.toLowerCase() === params.slug.toLowerCase();
	});
	if (!post) {
		return notFound();
	}

	return { title: post.category };
};

const PostLayout = ({ params }: { params: { slug: string } }) => {
	const post = allArticles.find(
		(post) => post.category.toLowerCase() === params.slug.toLowerCase()
	);
	if (!post) {
		return notFound();
	}

	return <h1>category title here</h1>;
};

export default PostLayout;
