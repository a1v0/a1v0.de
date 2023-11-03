import React from "react";
import Article from "@/app/articles";
import Link from "next/link";

export default function Menu() {
    const articles = [];
    for (let article in Article.allArticles) {
        articles.push(Article.allArticles[article]);
    }

    return (
        <section className="bg-background-grey">
            <div className="clear-gutters flex justify-stretch py-8">
                <div className="flex-1">
                    <h2>Articles</h2>
                    <ul>
                        {articles.map((article: Article, index) => {
                            return (
                                <li key={index}>
                                    <Link href={`/articles/${article.slug}`}>
                                        {article.title}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className="flex-1">
                    <h2>Links</h2>
                    <ul>
                        <li>
                            <Link href="https://github.com/a1v0">
                                GitHub [possibly also a link to this repo?]
                            </Link>
                        </li>
                        <li>[LinkedIn?]</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
