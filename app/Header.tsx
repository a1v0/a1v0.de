import React from "react";
import styles from "./Header.module.css";
import LogoLink from "./LogoLink";

function Header() {
    return (
        <header className={`${styles.Header} brand-colour-background`}>
            <nav className="max-width navbar ">
                <div className="container-fluid">
                    <LogoLink />
                </div>
            </nav>
        </header>
    );
}

export default Header;
