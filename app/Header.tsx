import React from "react";
import LogoLink from "./LogoLink";

function Header() {
    return (
        <header className="bg-brand-colour p-1">
            <nav className="mx-auto my-0 flex max-w-gutter items-stretch justify-between p-0">
                <div>
                    <LogoLink />
                </div>
                <div>
                    <button className="flex h-full w-full items-center border-x-2 border-softer-black px-4 py-2 text-lg">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="mr-2 h-4 w-4"
                            viewBox="0 0 16 16"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                            />
                        </svg>
                        Menu
                    </button>
                </div>
            </nav>
        </header>
    );
}

export default Header;
