import React from "react";
import styles from "./Header.module.css";

function Header() {
    return (
        <div className={styles.Header}>
            <nav className="max-width">
                <div className={styles.logo}>
                    <a href="#">a1v0</a>
                </div>
                <div>Menu</div>
            </nav>
        </div>
    );
}

export default Header;
