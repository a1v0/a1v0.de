import React from "react";
import LogoLink from "./LogoLink";

function Header() {
    return (
        <header className="bg-brand-colour p-1">
            <nav className="mx-auto my-0 flex max-w-gutter items-center justify-between p-0">
                <div>
                    <LogoLink />
                </div>
            </nav>
        </header>
    );
}

export default Header;
