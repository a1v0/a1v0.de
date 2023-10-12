import React from "react";
import "./App.css";
import Header from "./Header";
import Menu from "./Menu";

function App() {
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
                <li>Create an article template</li>
                <li>Find a way to do breadcrumbs with static content</li>
                <li>Create table of contents component</li>
            </ol>
        </div>
    );
}

export default App;
