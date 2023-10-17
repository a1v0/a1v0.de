import Article from "@/app/articles";

// Return a list of `params` to populate the [slug] dynamic segment
export function generateStaticParams() {
    const allSlugs = Object.keys(Article.allArticles);
    return allSlugs;
}

async function getData(slug: string) {
    return await Article.allArticles[slug].getContent();
}

// Multiple versions of this page will be statically generated
// using the `params` returned by `generateStaticParams`
export default async function ArticlePage({
    params
}: {
    params: any /* I know using 'any' is bad practice but I couldn't find the under-the-hood data type of `params` */;
}) {
    const { slug } = params;

    const currentArticle = Article.allArticles[slug];

    const articleContent = await getData(slug);

    return (
        <main>
            <h1>{currentArticle.title}</h1>
            {articleContent}
        </main>
    );
}
