import { MetadataRoute } from "next";
import { allArticles } from "contentlayer/generated";
import { categoriesMap } from "./article-categories";

const BASE_URL = process.env.SITE_URL || "https://www.a1v0.de";

type changeFrequency =
	| "always"
	| "hourly"
	| "daily"
	| "weekly"
	| "monthly"
	| "yearly"
	| "never";

const yearlyChangeFrequency = "yearly" as changeFrequency;

interface SitemapEntry {
	url: string;
	lastModified: string;
	changeFrequency: changeFrequency;
}

export default function sitemap(): MetadataRoute.Sitemap {
	const allRoutes: SitemapEntry[] = [];

	const staticRoutes = ["/", "/disclaimer", "/sitemap"]; // add any other static routes here
	addStaticPages(staticRoutes, allRoutes);

	addCategoriesAndArticles(allRoutes);

	allArticles.forEach((article) => {
		const url = BASE_URL + article.url,
			lastModified = article.date,
			changeFrequency = yearlyChangeFrequency;

		const sitemapEntry: SitemapEntry = {
			url,
			lastModified,
			changeFrequency
		};

		allRoutes.push(sitemapEntry);
	});

	return allRoutes;
}

function addStaticPages(staticRoutes: string[], allRoutes: SitemapEntry[]) {
	staticRoutes.forEach((route) => {
		const url = BASE_URL + route,
			lastModified = new Date().toISOString(),
			changeFrequency = yearlyChangeFrequency;

		const sitemapEntry: SitemapEntry = {
			url,
			lastModified,
			changeFrequency
		};

		allRoutes.push(sitemapEntry);
	});
}

function addCategoriesAndArticles(allRoutes: SitemapEntry[]) {
	Object.keys(categoriesMap).forEach((category) => {
		const url = `${BASE_URL}/${category}`,
			lastModified = new Date().toISOString(),
			changeFrequency = yearlyChangeFrequency;

		const sitemapEntry: SitemapEntry = {
			url,
			lastModified,
			changeFrequency
		};

		allRoutes.push(sitemapEntry);

		addArticles(allRoutes);
	});
}
