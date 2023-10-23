import Header from "./Header";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "a1v0.de",
    description: "Generated by create next app"
};

export default function RootLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin=""
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Jost:wght@400;500;700&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body>
                <Header />
                {children}
            </body>
        </html>
    );
}