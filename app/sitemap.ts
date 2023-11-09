// the bulk of the code here is taken or adapted from https://gist.github.com/ChangoMan/824daa0b4fbd6f824d2e8a2ab1532006

import { MetadataRoute } from "next";
import { allArticles } from "contentlayer/generated";

const BASE_URL = process.env.SITE_URL || "https://www.a1v0.de";

export default function sitemap(): MetadataRoute.Sitemap {
    const yearlyChangeFrequency = "yearly";

    const allPages = allArticles.map((article) => {
        // map articles here
    });

    // push static pages to allPages, then return

    return [
        {
            url: "https://example.com",
            lastModified: new Date()
        },
        {
            url: "https://example.com/hello",
            lastModified: new Date()
        },
        {
            url: "https://example.com/goodbye",
            lastModified: new Date()
        }
    ];
}

// export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
//   let articles = await getAllArticles()
//   const changeFrequency = 'daily' as changeFrequency

//   const posts = articles.map(({ slug, date }) => ({
//     url: `${WEBSITE_HOST_URL}/posts/${slug}`,
//     lastModified: date,
//     changeFrequency,
//   }))

//   const routes = ['', '/about', '/posts'].map((route) => ({
//     url: `${WEBSITE_HOST_URL}${route}`,
//     lastModified: new Date().toISOString(),
//     changeFrequency,
//   }))

//   return [...routes, ...posts]
// }
