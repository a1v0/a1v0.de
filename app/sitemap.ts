import {MetadataRoute} from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: 'https://example.com',
			lastModified: new Date()
		},
		{
			url: 'https://example.com/hello',
			lastModified: new Date()
		},
		{
			url: 'https://example.com/goodbye',
			lastModified: new Date()
		},
	]
}
