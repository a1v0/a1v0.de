/** @type {import("next-sitemap").IConfig} */
module.exports = {
	siteUrl: process.env.SITE_URL || "https://a1v0.de",
	generateRobotsTxt: true,
	changefreq: "monthly",
	generateIndexSitemap: false
};
