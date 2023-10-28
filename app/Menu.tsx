import React from "react";

export default function Menu() {
    return (
        <section className="bg-background-grey">
            <div className="clear-gutters flex justify-stretch py-8">
                <div className="flex-1">
                    <h2>Articles</h2>
                    <ul>
                        <li>[list of articles to go here]</li>
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
