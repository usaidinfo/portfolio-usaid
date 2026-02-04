import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://usaid-mustafa.vercel.app';

  // Project IDs
  const projectIds = [
    'career-bridge',
    'time-monitoring',
    'wakanda-books',
    'hiretalentt',
    'ecency-mobile',
    'wakandasign-app',
    'leaf-ai-platform',
    'time-monitoring-mobile',
    'productiviti-marketing',
    'happening-app',
    'mawjood',
    'mawjood-mobile',
  ];

  // Home page
  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
  ];

  // Project detail pages
  const projectPages: MetadataRoute.Sitemap = projectIds.map((id) => ({
    url: `${baseUrl}/${id}`,
    lastModified: new Date(),
  }));

  return [...routes, ...projectPages];
}

