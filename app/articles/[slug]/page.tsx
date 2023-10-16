import Article from "@/app/articles";

// Return a list of `params` to populate the [slug] dynamic segment
export function generateStaticParams() {
    return Article.allArticles.map((article) => {
        slug: article.slug;
    });
}

export default function ArticlePage() {
    return (
        <main>
            <h1>Article title</h1>
        </main>
    );
}
