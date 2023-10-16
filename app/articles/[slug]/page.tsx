import Article from "@/app/articles";
import { useEffect, useState } from "react";

// Return a list of `params` to populate the [slug] dynamic segment
export function generateStaticParams() {
    return Article.allArticles.map((article) => {
        slug: article.slug;
    });
}

// Multiple versions of this page will be statically generated
// using the `params` returned by `generateStaticParams`
export default function ArticlePage({
    params
}: {
    params: any /* I know this is bad practice but I couldn't find the under-the-hood data type of params */;
}) {
    const { slug } = params;
    const currentArticle = Article.allArticles.find((article) => {
        return (article.slug = slug);
    });

    currentArticle?.getContent().then(({ data }) => {
        console.log(data);
    });

    return (
        <main>
            <h1>{currentArticle?.title}</h1>
        </main>
    );
}
