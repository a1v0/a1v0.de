import React from "react";
import Link from "next/link";
import { compareDesc, format, parseISO } from "date-fns";
import { allArticles, Article } from "contentlayer/generated";

export default function Menu() {
    return (
        <section className="bg-background-grey">
            <div className="clear-gutters flex justify-stretch py-8">
                <div className="flex-1">
                    <h2>Articles</h2>
                    <ul>
                        {allArticles.map((article, index) => {
                            return (
                                <li key={index}>
                                    <Link href={article.url}>
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
