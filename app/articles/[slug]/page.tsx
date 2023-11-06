import { format, parseISO } from "date-fns";
import { allArticles } from "contentlayer/generated";
import { notFound } from "next/navigation";

export const generateStaticParams = async () =>
    allArticles.map((article) => ({ slug: article._raw.flattenedPath }));

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
    const post = allArticles.find(
        (post) => post._raw.flattenedPath === params.slug
    );
    if (!post) {
        return notFound();
    }
    return { title: post.title };
};

const PostLayout = ({ params }: { params: { slug: string } }) => {
    const post = allArticles.find(
        (post) => post._raw.flattenedPath === params.slug
    );
    if (!post) {
        return notFound();
    }

    return (
        <article>
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
    );
};

export default PostLayout;
