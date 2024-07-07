import { format, parseISO } from "date-fns";
import { allArticles } from "contentlayer/generated";
import { notFound } from "next/navigation";

export const generateStaticParams = async () => {
	return allArticles.map((article) => {
		return { articleName: article._raw.flattenedPath.toLowerCase() };
	});
};

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
