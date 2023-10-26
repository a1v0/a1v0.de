import React from "react";
import LogoLink from "./LogoLink";

function Header() {
    return (
        <header className={"bg-brand-colour"}>
            <nav className="max-w-gutter mx-auto my-0">
                <div>
                    <LogoLink />
                </div>
            </nav>
        </header>
    );
}

export default Header;
