import { MetadataRoute } from "next";
import { allArticles } from "contentlayer/generated";
import { categoriesMap } from "./article-categories";

export default function sitemap(): MetadataRoute.Sitemap {
	const BASE_URL = process.env.SITE_URL || "https://www.a1v0.de";

	type changeFrequency =
		| "always"
		| "hourly"
		| "daily"
		| "weekly"
		| "monthly"
		| "yearly"
		| "never";

	interface SitemapEntry {
		url: string;
		lastModified: string;
		changeFrequency: changeFrequency;
	}

	const yearlyChangeFrequency = "yearly" as changeFrequency;

	const allPages: SitemapEntry[] = [];

	const staticRoutes = ["/", "/disclaimer"]; // add any other static routes here

	staticRoutes.forEach((route) => {
		const url = BASE_URL + route,
			lastModified = new Date().toISOString(),
			changeFrequency = yearlyChangeFrequency;

		const sitemapEntry: SitemapEntry = {
			url,
			lastModified,
			changeFrequency
		};

		allPages.push(sitemapEntry);
	});

	allArticles.forEach((article) => {
		const url = BASE_URL + article.url,
			lastModified = article.date,
			changeFrequency = yearlyChangeFrequency;

		const sitemapEntry: SitemapEntry = {
			url,
			lastModified,
			changeFrequency
		};

		allPages.push(sitemapEntry);
	});

	Object.keys(categoriesMap).forEach((category) => {
		const url = BASE_URL + "/" + category,
			lastModified = new Date().toISOString(),
			changeFrequency = yearlyChangeFrequency;

		const sitemapEntry: SitemapEntry = {
			url,
			lastModified,
			changeFrequency
		};

		allPages.push(sitemapEntry);
	});

	return allPages;
}
