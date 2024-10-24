import SkipLink from "@/components/SkipLink";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "./globals.css";
import "./highlight-theme.css";
import type { Metadata } from "next";
import { Jost } from "next/font/google";

const jost = Jost({
	subsets: ["latin"],
	style: ["normal", "italic"],
	display: "swap"
});

export const metadata: Metadata = {
	title: {
		default: "a1v0.de", // title where no other title is specified
		template: "%s | a1v0.de"
	},
	description:
		"Tech blog featuring useful bits of knowledge to spare you anguish."
};

export default function RootLayout({
	children
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<head>
				<meta
					// This is for Google Search Console
					name="google-site-verification"
					content="FBYNe0HbrCT3tYTTIhpogjuTgc52ItmoiGSLU5n8Yrw"
				/>
			</head>
			<body className={jost.className}>
				<SkipLink />
				<div className="flex min-h-screen flex-col items-stretch justify-between">
					<Header />
					<div id="main-content" className="flex grow flex-col">
						{children}
					</div>
					<Footer />
				</div>
			</body>
		</html>
	);
}
