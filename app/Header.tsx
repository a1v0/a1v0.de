import React from "react";
import styles from "./Header.module.css";
import Logo from "./Logo";

function Header() {
    return (
        <header className={`${styles.Header} brand-colour-background`}>
            <nav className="max-width navbar ">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <Logo />
                        a1v0.de
                    </a>
                </div>
            </nav>
        </header>
    );
}

export default Header;
