import React from "react";
import Article from "@/app/articles";

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
                        {articles.map((article: Article) => {
                            return (
                                <li>
                                    <a href={`/articles/${article.slug}`}>
                                        {article.title}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className="flex-1">
                    <h2>Links</h2>
                    <ul>
                        <li>
                            <a href="https://github.com/a1v0">
                                GitHub [possibly also a link to this repo?]
                            </a>
                        </li>
                        <li>[LinkedIn?]</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
