import React from "react";
import Logo from "./Logo";

export default function LogoLink() {
    return (
        <a
            href="/"
            className="group flex flex-row items-center text-xl font-medium"
        >
            <div className="mr-2.5 inline-block rounded-bl-2xl rounded-br rounded-tl rounded-tr-2xl bg-accent-colour p-2.5 transition-all duration-500 ease-in-out group-hover:rounded-bl group-hover:rounded-br-2xl group-hover:rounded-tl-2xl group-hover:rounded-tr">
                <Logo />
            </div>
            a1v0.de
        </a>
    );
}
