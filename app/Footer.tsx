import React from "react";

function Footer() {
    return (
        <footer className="bg-brand-colour py-2">
            <section className="clear-gutters">
                Copyright &copy; {new Date().getFullYear()}{" "}
                <strong className="font-medium">a1v0.de</strong>. All rights
                reserved.
            </section>
        </footer>
    );
}

export default Footer;
