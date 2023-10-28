"use client";

import React, { useState } from "react";
import LogoLink from "./LogoLink";
import Menu from "./Menu";

function Header() {
    const [showMenu, setShowMenu] = useState(true);
    // const [showMenu, setShowMenu] = useState(false);

    const downChevronPath =
            "M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z",
        upChevronPath =
            "M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z";
    return (
        <header>
            <nav className="bg-brand-colour p-1">
                <div className="clear-gutters flex items-stretch justify-between p-0">
                    <div>
                        <LogoLink />
                    </div>
                    <div>
                        <button
                            onClick={() => {
                                setShowMenu(!showMenu);
                            }}
                            className="flex h-full w-full items-center border-x-2 border-y-4 border-x-softer-black border-y-brand-colour px-4 py-1 text-lg hover:border-y-4 hover:border-b-softer-black"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="mr-2 h-4 w-4"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d={
                                        showMenu
                                            ? upChevronPath
                                            : downChevronPath
                                    }
                                />
                            </svg>
                            Menu
                        </button>
                    </div>
                </div>
            </nav>
            {showMenu ? <Menu /> : ""}
        </header>
    );
}

export default Header;
