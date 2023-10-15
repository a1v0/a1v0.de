import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./Header";
import Menu from "./Menu";
import Article from "./articles";

function App() {
    const [content, setContent] = useState("");

    useEffect(() => {
        Article.allArticles[0].getContent().then((retrievedContent) => {
            setContent(retrievedContent);
        });
    });

    return (
        <div className="App">
            <Header />
            <Menu />
            <h1>Hello!</h1>
            <p>The plan is as follows:</p>
            <ol>
                <li style={{ textDecoration: "line-through" }}>
                    Create a colour scheme
                </li>
                <li>Create header bar</li>
                <li>Create footer bar</li>
                <li>Find way to import static HTML or markdown content</li>
                <li>
                    Enable server-side rendering (see
                    https://www.freecodecamp.org/news/server-side-rendering-your-react-app-in-three-simple-steps-7a82b95db82e)
                </li>
                <li>Find a way to do breadcrumbs with static content</li>
                <li>Create table of contents component</li>
            </ol>
            {content}
        </div>
    );
}

export default App;
