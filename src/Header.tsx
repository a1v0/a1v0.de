import React from "react";
import "./Header.css";

function Header() {
    return (
        <div className="Header">
            <nav className="max-width">
                <ul>
                    <li>Articles</li>
                    <li>GitHub</li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;
